import { useRef } from 'react'

export const useDebounce = () => {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const debounce = (cb: () => void, ms: number) => {
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(cb, ms)
  }

  return debounce
}
