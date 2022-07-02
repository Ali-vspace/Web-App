import React from 'react'

export const PrintTheme = ({ data }) => {
  return (
    <>
      <div className='m-3 text-xs w-auto'>
        <img className='drop-shadow-2xl rounded-md mb-3' src={data.img_url} />
        <div className='block lg:flex justify-between'>
          <div>
            <p className='text-black font-medium my-1 dark:bg-slate-800 dark:text-white'>{data.title}</p>
            <p className='text-gray-500 font-normal my-1 dark:text-gray-400'>{data.category}</p>
          </div>
          <div>
            <p className='text-black flex tracking-wide font-normal my-1 justify-start dark:bg-slate-800 dark:text-white lg:justify-end'>{data.price}</p>
            <p className='hidden lg:flex my-1'>{data.stars}</p>
          </div>
        </div>
      </div>
      
    </>
  )
}
