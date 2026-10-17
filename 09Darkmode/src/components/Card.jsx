import React from 'react';

export default function Card() {
  return (
    <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-16 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
      {/* Tier 1: Hobby Card */}
      <div className="rounded-3xl rounded-t-3xl bg-white/70 dark:bg-gray-800/80 p-8 ring-1 ring-gray-900/10 dark:ring-gray-700/60 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl shadow-lg transition-colors duration-300 backdrop-blur-sm">
        <h3 id="tier-hobby" className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
          Hobby
        </h3>
        <p className="mt-4 flex items-baseline gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">$29</span>
          <span className="text-base text-gray-500 dark:text-gray-400">/month</span>
        </p>
        <p className="mt-6 text-base/7 text-gray-600 dark:text-gray-300">
          The perfect plan if you're just getting started with our product.
        </p>
        <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600 dark:text-gray-300 sm:mt-10">
          <li className="flex gap-x-3">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400">
              <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
            25 products
          </li>
          <li className="flex gap-x-3">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400">
              <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
            Up to 10,000 subscribers
          </li>
          <li className="flex gap-x-3">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400">
              <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
            Advanced analytics
          </li>
          <li className="flex gap-x-3">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400">
              <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
            24-hour support response time
          </li>
        </ul>
        <a
          href="#"
          aria-describedby="tier-hobby"
          className="mt-8 block rounded-xl px-3.5 py-2.5 text-center text-sm font-semibold text-indigo-600 dark:text-indigo-300 ring-1 ring-indigo-200 dark:ring-indigo-700/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-colors sm:mt-10"
        >
          Get started today
        </a>
      </div>

      {/* Tier 2: Enterprise Card */}
      <div className="relative rounded-3xl bg-gray-900 dark:bg-black/90 p-8 shadow-2xl ring-1 ring-gray-900/10 dark:ring-indigo-500/40 sm:p-10 border border-transparent dark:border-indigo-500/30 transition-colors duration-300">
        <h3 id="tier-enterprise" className="text-base/7 font-semibold text-indigo-400">
          Enterprise
        </h3>
        <p className="mt-4 flex items-baseline gap-x-2">
          <span className="text-5xl font-bold tracking-tight text-white">$99</span>
          <span className="text-base text-gray-400">/month</span>
        </p>
        <p className="mt-6 text-base/7 text-gray-300">
          Dedicated support and infrastructure for your company.
        </p>
        <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
          <li className="flex gap-x-3">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
              <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
            Unlimited products
          </li>
          <li className="flex gap-x-3">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
              <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
            Unlimited subscribers
          </li>
          <li className="flex gap-x-3">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
              <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
            Advanced analytics
          </li>
          <li className="flex gap-x-3">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
              <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
            Dedicated support representative
          </li>
          <li className="flex gap-x-3">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
              <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
            Marketing automations
          </li>
          <li className="flex gap-x-3">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
              <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
            </svg>
            Custom integrations
          </li>
        </ul>
        <a
          href="#"
          aria-describedby="tier-enterprise"
          className="jelly mt-8 block rounded-xl bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors sm:mt-10"
        >
          Get started today
        </a>
      </div>
    </div>
  );
}
