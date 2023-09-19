'use client'
import { useState } from 'react'

function useToggle() {
  const [state, setState] = useState(false)
  const toggleState = () => setState((state) => !state)

  return { state, toggleState }
}

export { useToggle }
