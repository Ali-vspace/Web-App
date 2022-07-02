import React from 'react'

export const Footer = () => {
  return (
    <div className='max-w-[1150px] mx-auto px-3'>

      <div className="border-t md:flex justify-between items-center">
        <div className="mt-6 md:mb-6">
          <h2 className='text-xs font-medium tracking-wide '>Get new themes in your inbox!</h2>
          <p className='text-gray-500 text-xs font-normal mt-2 dark:text-gray-400'>New themes or big discounts. Never spam.</p>
        </div>
        <div className="flex h-7 my-6">
          <input className="border border-gray-300 bg-gray-200 rounded w-full text-xs py-2 px-3 text-gray-700 leading-tight md:w-64" type="text" placeholder="Email Address" />
          <button className='text-xs bg-purple-800 hover:bg-purple-900 text-white mx-2 px-2 items-center rounded'>Subscribe</button>
        </div>
      </div>

      <div className='flex justify-center border-t md:justify-between'>
        <ul className='flex text-xs items-center py-4 font-normal text-gray-500 dark:text-gray-400'>
          <li className='ml hover:text-gray-900'>Help Center</li>
          <li className='ml-4 hover:text-gray-900'>Terms of Service</li>
          <li className='ml-4 hover:text-gray-900'>Licenses</li>
          <li className='ml-4 hover:text-gray-900'>Sell Themes</li>
        </ul>
        <p className="hidden lg:flex text-xs items-center py-4 font-normal text-gray-500 dark:text-gray-400">Trying to redownload a theme? <span className="text-blue-500"> Use our redownload page.</span></p>
      </div>
    </div>
  )
}
