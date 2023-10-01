'use client'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { InferType, object, string } from 'yup'
import { sendEmail } from '../services/email.service'

import { Contact } from '@/models'
import { useState } from 'react'
import Button from './Button'
import Message from './Message'

interface Props {
  form: Contact['contact']
}

function ContactForm({ form }: Props) {
  const [isSend, setIsSend] = useState<'' | 'check' | 'alert'>('')

  const SchemaContactForm = object({
    name: string().required(form.errors.name.required).min(3, form.errors.name.min).trim(),
    email: string()
      .email(form.errors.email.format)
      .required(form.errors.email.required)
      .min(5, form.errors.email.min)
      .trim(),
    message: string().required(form.errors.message.required).min(20, form.errors.message.min).trim()
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<InferType<typeof SchemaContactForm>>({ resolver: yupResolver(SchemaContactForm) })

  const onSubmit = handleSubmit(async (data) => {
    try {
      await sendEmail(data)
      reset()
      setIsSend(() => 'check')
    } catch (error) {
      setIsSend(() => 'alert')
    } finally {
      setTimeout(() => {
        setIsSend(() => '')
      }, 5000)
    }
  })

  const classes = {
    form: clsx('mx-auto grid max-w-3xl gap-y-4 py-10 md:gap-y-5')
  }

  const hasErrors = Object.keys(errors).length > 0

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <input placeholder={form.name} {...register('name')} aria-invalid={errors.name ? 'true' : 'false'} />
      <input placeholder={form.email} {...register('email')} aria-invalid={errors.email ? 'true' : 'false'} />
      <textarea
        rows={6}
        placeholder={form.message}
        {...register('message')}
        aria-invalid={errors.message ? 'true' : 'false'}
      />
      {!hasErrors && isSend === 'check' && <Message type='check' message={form.check} />}
      {!hasErrors && isSend === 'alert' && <Message type='alert' message={form.alert} />}
      {errors.name?.message && <Message type='error' message={errors.name.message} />}
      {errors.email?.message && <Message type='error' message={errors.email.message} />}
      {errors.message?.message && <Message type='error' message={errors.message.message} />}
      <Button disabled={isSubmitting} className='mt-10'>
        {form.button}
      </Button>
    </form>
  )
}

export default ContactForm
