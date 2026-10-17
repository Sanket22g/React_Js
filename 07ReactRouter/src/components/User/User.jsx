import React from 'react'
import { useParams } from 'react-router-dom'

export default function User() {
    const { userid } = useParams()

    return (
        <div className='bg-gray-700 text-white text-3xl text-center py-10 font-bold max-w-4xl mx-auto my-12 rounded-xl shadow-lg'>
            User Profile: <span className='text-orange-400'>{userid || "Guest"}</span>
        </div>
    )
}
