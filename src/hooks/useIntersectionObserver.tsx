import { useEffect, useRef, useState } from 'react'

interface Props {
  options: IntersectionObserverInit
  unobserve: boolean
}

function useIntersectionObserver({ options, unobserve }: Props) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const target = ref.current
    if (target === null) return

    const callback: IntersectionObserverCallback = (entries) =>
      entries.forEach((entry) => {
        const { target, isIntersecting } = entry
        setIsIntersecting(isIntersecting)

        if (isIntersecting && unobserve) return observer.unobserve(target)
      })
    const observer = new IntersectionObserver(callback, options)

    observer.observe(target)
    return () => observer.unobserve(target)
  }, [])

  return [isIntersecting, ref] as const
}

export default useIntersectionObserver
