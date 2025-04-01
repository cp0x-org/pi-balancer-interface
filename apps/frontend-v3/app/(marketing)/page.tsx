'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Используем replace, чтобы не сохранять страницу в истории браузера
    router.replace('/swap')
  }, [router])

  return null
}
