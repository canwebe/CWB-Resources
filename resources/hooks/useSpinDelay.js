import { useState, useRef, useEffect } from 'react'

export default function useLoadingDelay(loading, delay = 500) {
  const [state, setState] = useState('IDLE')
  const timeout = useRef(null)

  useEffect(() => {
    if (loading && state === 'IDLE') {
      clearTimeout(timeout.current)

      timeout.current = setTimeout(() => {
        if (!loading) {
          return setState('IDLE')
        }

        timeout.current = setTimeout(() => {
          setState('EXPIRE')
        }, 200)

        setState('DISPLAY')
      }, delay)

      setState('DELAY')
    }

    if (!loading && state !== 'DISPLAY') {
      clearTimeout(timeout.current)
      setState('IDLE')
    }
  }, [loading, state, options.delay, options.minDuration])

  useEffect(() => {
    return () => clearTimeout(timeout.current)
  }, [])

  return state === 'DISPLAY' || state === 'EXPIRE'
}
