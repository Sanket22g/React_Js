import React from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()

    return (
        <div className='max-w-4xl mx-auto my-12 bg-gray-800 text-white p-8 rounded-2xl shadow-2xl flex flex-col sm:flex-row items-center gap-8'>
            <img
                src={data?.avatar_url || "https://images.unsplash.com/photo-1618401471353-b98aedd04e11?w=400"}
                alt="Git Picture"
                className="w-48 h-48 rounded-full border-4 border-orange-600 shadow-md object-cover"
            />
            <div className="text-center sm:text-left space-y-3">
                <h2 className="text-3xl font-bold text-orange-500">
                    {data?.name || data?.login || "Sanket Ghadge"}
                </h2>
                <p className="text-gray-300 text-lg">
                    {data?.bio || "Passionate Software & Web Developer"}
                </p>
                {data?.location && (
                    <p className="text-gray-400 text-sm">
                        📍 {data.location}
                    </p>
                )}
                <div className="flex flex-wrap gap-4 pt-2 justify-center sm:justify-start">
                    <span className="bg-gray-700 px-4 py-2 rounded-lg text-sm font-semibold">
                        👥 Followers: <strong className="text-orange-400">{data?.followers ?? 0}</strong>
                    </span>
                    <span className="bg-gray-700 px-4 py-2 rounded-lg text-sm font-semibold">
                        📁 Repos: <strong className="text-orange-400">{data?.public_repos ?? 0}</strong>
                    </span>
                    {data?.html_url && (
                        <a
                            href={data.html_url}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-orange-700 hover:bg-orange-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                        >
                            View GitHub Profile &rarr;
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Sanket22g')
    return response.json()
}
