import { useEffect } from 'react'

export default function useClickOutside(targetRef, callback) {
  const handleClick = (e) => {
    if (targetRef.current && !targetRef.current.contains(e.target)) {
      callback()
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  })
}
