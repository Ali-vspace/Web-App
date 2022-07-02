import React from 'react'
import { Themes1, Themes2 } from "./Themes"
import { PrintTheme } from './PrintTheme'

export const Main = () => {
  return (
    <>

      <section className='dark:bg-slate-800 dark:text-white'>
        <img className='mx-auto mt-12' src='https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png' alt="" />
        <h1 className='flex font-bold justify-center text-4xl text-stone-800 lg:text-6xl dark:bg-slate-800 dark:text-white'>Build anything</h1>
        <p className='flex justify-center mt-3 text-gray-500 text-xs tracking-wide font-normal dark:bg-slate-800 dark:text-gray-400'>Themes built by or reviewed by Bootstrap's creators.</p>
        <div className='flex justify-center'>
          <button className='text-xs bg-purple-800 hover:bg-purple-900 text-white px-5 py-3 rounded mt-5 mb-16'>Why our themes?</button>
        </div>
      </section>

      <section className='max-w-[1150px] mx-auto'>
        <div className='m-5 px-5 mx-auto items-center flex justify-between'>
          <div>
            <p className='text-black text-sm font-medium dark:bg-slate-800 dark:text-white'>Latest</p>
            <p className='text-gray-500 text-xs font-normal dark:text-gray-400'>Most recently added to our collection</p>
          </div>
          <div className='hidden md:flex'>
            <button className='text-xs bg-white text-purple-900 border border-purple-900 hover:bg-purple-900 hover:text-white px-2 py-1 rounded'>View all</button>
          </div>
        </div>

        <div className='grid grid-cols-2 mx-auto'>
          {
            Themes1.map((themes) => {
              return (
                <PrintTheme data={themes} />
              )
            })
          }
        </div>

        <div className='flex justify-center mx-auto border-b border-gray-300 w-[95%] pb-4'>
          <button className='text-xs bg-purple-800 hover:bg-purple-900 text-white px-5 py-2 rounded mt-7 flex md:hidden'>View all latest themes</button>
        </div>

      </section>

      <section className='max-w-[1150px] mx-auto'>
        <div className='m-5 items-center'>
            <p className='text-black text-sm mb-1 font-medium dark:bg-slate-800 dark:text-white'>Popular</p>
            <p className='text-gray-500 text-xs font-normal dark:text-gray-400'>Top-sellers in the past week!</p>
          </div>

        <div className='grid grid-cols-2'>
          {
            Themes2.map((themes) => {
              return (
                <PrintTheme data={themes} />
              )
            })
          }
        </div>
      </section>

    </>
  )
}



