import React from 'react'

const links = ['Home', 'About', 'Projects', 'Contact']

function Navbar({ active, setActive }) {
  return (
    <nav className='fixed bottom-7 inset-x-0 z-50 flex justify-center'>
      <div className='jelly-float flex items-center gap-2 px-6 py-2 rounded-full bg-white shadow-xl w-[600px] h-[70px] max-w-[90vw] justify-between'>

        {/* Logo */}
        <div className='jelly flex items-center gap-2 mr-4 cursor-pointer' onClick={() => setActive('Home')}>
          <div className='w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shadow font-bold text-white text-sm'>J</div>
          <span className='font-bold text-gray-800 text-sm tracking-wide'>JellyUI</span>
        </div>

        {/* Nav Links */}
        {links.map((link) => (
          <button
            key={link}
            onClick={() => setActive(link)}
            className='jelly px-5 py-2 rounded-full font-medium shadow-md cursor-pointer transition-colors duration-200'
            style={{
              backgroundColor: active === link ? '#9ebef9ff' : 'white',
              color: active === link ? 'white' : '#374151',
            }}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
