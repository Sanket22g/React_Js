import React from 'react'

function Card({ username = "Alex", btnText = "Contact", img, obj = { sno: 1, city: "Mumbai" } }) {
    return (

        <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl border border-gray-200 shadow-md bg-white dark:bg-gray-800 dark:border-gray-700">
            <div>
                <img class="size-48 shadow-xl rounded-md" alt="" src={img} />
            </div>
            <div class="flex flex-col items-center md:items-start">
                <span class="text-2xl font-medium">{username}</span>
                <span class="font-medium text-sky-500">{btnText}</span>
                <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
                    <span>{obj.city}</span>
                    <span>No. {obj.id}</span>
                </span>
            </div>
        </div>

    )
}

export default Card