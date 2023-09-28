'use client'
import { languageEN } from '@/utils/const'
import { yupResolver } from '@hookform/resolvers/yup'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { InferType, object, string } from 'yup'
import { sendEmail } from '../services/email.service'

import { useState } from 'react'
import Button from './Button'
import Message from './Message'

const SchemaContactForm = object({
  name: string().required('Please enter your name.').min(3, 'The name is too short. Minimum 3 characters').trim(),
  email: string()
    .email('Enter a valid email address.')
    .required('Please enter your email address.')
    .min(5, 'The email is too short. Minimum 5 characters')
    .trim(),
  message: string()
    .required('Please enter your message.')
    .min(20, 'The message is too short. Minimo 20 characters')
    .trim()
})

function ContactForm() {
  const [isSend, setIsSend] = useState<'' | 'check' | 'alert'>('')
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
      }, 4000)
    }
  })

  const classes = {
    form: clsx('mx-auto grid max-w-3xl gap-y-4 py-10 md:gap-y-5')
  }

  const hasErrors = Object.keys(errors).length > 0

  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <input placeholder='Name' {...register('name')} aria-invalid={errors.name ? 'true' : 'false'} />
      <input placeholder='Email' {...register('email')} aria-invalid={errors.email ? 'true' : 'false'} />
      <textarea
        rows={6}
        placeholder='Message'
        {...register('message')}
        aria-invalid={errors.message ? 'true' : 'false'}
      />
      {!hasErrors && isSend === 'check' && <Message type='check' message='It was sent correctly, thank you!' />}
      {!hasErrors && isSend === 'alert' && <Message type='alert' message='An error occurred.' />}
      {errors.name?.message && <Message type='error' message={errors.name.message} />}
      {errors.email?.message && <Message type='error' message={errors.email.message} />}
      {errors.message?.message && <Message type='error' message={errors.message.message} />}
      <Button disabled={isSubmitting} className='mt-10'>
        {languageEN.contact.contact.button}
      </Button>
    </form>
  )
}

export default ContactForm
