'use client'

import { useState } from 'react'

export default function ContactForm({
  formId,
}: {
  formId: string | number
}) {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    await fetch('/api/form-submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        form: Number(formId),
        submissionData: [
          { field: 'fullName', value: fullName },
          { field: 'phone', value: phone },
          { field: 'message', value: message },
        ],
      }),
    })

    setFullName('')
    setPhone('')
    setMessage('')
    setLoading(false)

    alert('Gửi liên hệ thành công!')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Họ và tên..."
        required
      />

      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Số điện thoại..."
        required
      />

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Nội dung cần hỗ trợ..."
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? 'ĐANG GỬI...' : 'GỬI'}
      </button>
    </form>
  )
}