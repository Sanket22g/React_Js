import React, { useState } from 'react'

function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5 px-4'>
      <div className='jelly-float bg-white rounded-3xl shadow-xl p-8 w-full max-w-sm'>
        <h2 className='text-2xl font-bold text-gray-800 mb-5 text-center text-black'>Say Hello 👋</h2>

        {sent ? (
          <div className='jelly text-center py-6'>
            <div className='text-5xl mb-3'>🫧</div>
            <p className='font-semibold text-gray-700'>Message sent!</p>
            <p className='text-gray-400 text-sm'>We'll bounce back soon.</p>
          </div>
        ) : (
          <div className='flex flex-col gap-3'>
            <input
              type='text'
              placeholder='Your name'
              className='jelly px-4 py-2.5 rounded-full border border-gray-200 outline-none focus:border-gray-400 text-sm w-full shadow-sm'
            />
            <input
              type='email'
              placeholder='Your email'
              className='jelly px-4 py-2.5 rounded-full border border-gray-200 outline-none focus:border-gray-400 text-sm w-full shadow-sm'
            />
            <textarea
              placeholder='Your message...'
              rows={3}
              className='jelly px-4 py-2.5 rounded-2xl border border-gray-200 outline-none focus:border-gray-400 text-sm w-full shadow-sm resize-none'
            />
            <button
              onClick={() => setSent(true)}
              className='jelly mt-1 px-5 py-2.5 rounded-full bg-gray-800 text-white font-medium shadow-md cursor-pointer w-full'
            >
              Send Message 🚀
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact
