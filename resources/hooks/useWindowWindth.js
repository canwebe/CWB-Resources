import { useState, useEffect } from 'react'
import throttle from 'lodash.throttle'

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = throttle(() => {
      setWindowWidth(window.innerWidth)
    }, 500) // Adjust the debounce delay (milliseconds) as needed

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth
}

export default useWindowWidth
