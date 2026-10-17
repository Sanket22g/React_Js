import React from 'react'

const projects = [
  { name: 'JellyUI', desc: 'Animated React component library', emoji: '🫧' },
  { name: 'BgReact', desc: 'Background color switcher app', emoji: '🎨' },
  { name: 'TailwindProps', desc: 'Props & card system with Tailwind', emoji: '🃏' },
]

function Projects() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-5 px-4'>
      <h2 className='text-3xl font-bold text-white drop-shadow'>My Projects</h2>
      <div className='flex flex-col gap-4 w-full max-w-md'>
        {projects.map((p) => (
          <div
            key={p.name}
            className='jelly flex items-center gap-4 bg-white rounded-2xl shadow-lg px-5 py-4 cursor-pointer'
          >
            <span className='text-3xl'>{p.emoji}</span>
            <div>
              <h3 className='font-bold text-gray-800'>{p.name}</h3>
              <p className='text-gray-500 text-sm'>{p.desc}</p>
            </div>
            <span className='ml-auto text-gray-300 text-lg'>→</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
