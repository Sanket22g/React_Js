import React from 'react'

const skills = ['React', 'Tailwind', 'JavaScript', 'CSS Animations', 'UI Design']

function About() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-6 px-4'>
      <div className='jelly-float bg-white rounded-3xl shadow-xl p-8 w-full max-w-md text-center'>
        <div className='jelly w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4 shadow-lg'>J</div>
        <h2 className='text-2xl font-bold text-gray-800 mb-1'>JellyUI Dev</h2>
        <p className='text-gray-500 text-sm mb-5'>Building bouncy, joyful web experiences 🫧</p>
        <div className='flex flex-wrap justify-center gap-2'>
          {skills.map((skill) => (
            <span
              key={skill}
              className='jelly px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium shadow-sm cursor-default'
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
