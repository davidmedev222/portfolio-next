import AlertIcon from './AlertIcon'
import CheckIcon from './CheckIcon'
import ErrorIcon from './ErrorIcon'

interface Props {
  type: 'check' | 'alert' | 'error'
  message: string
}

function Message({ type, message }: Props) {
  return (
    <div className='grid grid-cols-[auto_1fr] items-center gap-x-1.5'>
      {type === 'check' && <CheckIcon />}
      {type === 'alert' && <AlertIcon />}
      {type === 'error' && <ErrorIcon />}
      <p className='text-sm text-black/70 dark:text-white/70 md:text-base'>{message}</p>
    </div>
  )
}

export default Message
