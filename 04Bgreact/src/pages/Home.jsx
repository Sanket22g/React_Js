import React from 'react'

function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-6 px-4'>
      <div className='jelly-float text-center'>
        <h1 className='spin jelly text-6xl font-bold text-white drop-shadow-lg mb-3'>Welcome 👋</h1>
        <p className='text-white/80 text-xl'>A jelly-powered React UI experience</p>
      </div>
      <div className=' flex gap-4 mt-4'>
        <div className=' jelly px-6 py-3 bg-white rounded-2xl shadow-lg font-semibold text-gray-800'>⚡ Fast</div>
        <div className='jelly px-6 py-3 bg-white rounded-2xl shadow-lg font-semibold text-gray-800'>🫧 Jelly</div>
        <div className='jelly px-6 py-3 bg-white rounded-2xl shadow-lg font-semibold text-gray-800'>🎨 Fun</div>
      </div>
    </div>
  )
}

export default Home
