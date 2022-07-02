import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

export const Header = () => {
  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }

  const [search, setSearch] = useState(true)
  const handleSearch = () => {
    setSearch(!search)
  }

  return (
    <nav className="border-b">
      <div className='flex items-center justify-between max-w-[1150px] mx-auto px-3'>

        <div className='flex tracking-wide py-3 cursor-pointer'>
          <h2 className='text-xs font-medium'>BootStrap Themes</h2>
          <ul className='hidden lg:flex text-xs items-center font-normal text-gray-500 dark:text-gray-400'>
            <li className='ml-4 hover:text-gray-900'>Categories</li>
            <li className='ml-4 hover:text-gray-900'>Why Our Themes?</li>
            <li className='ml-4 hover:text-gray-900'>The Guide</li>
          </ul>
        </div>

        <div className='hidden lg:flex'>

          <div onClick={handleSearch} className="order-2 mx-3 ml-24">
            <AiOutlineSearch size={27} className='fill-gray-300 w-4/5 items-center' />
          </div>

          <form className= {!search ? 'order-2 mx-3': 'hidden' } action="">
            <input className="rounded" name="s" type="text" placeholder="Search" />
          </form>
          
          <ul className='flex cursor-pointer order-last text-xs items-center tracking-wide font-normal dark:text-gray-400 text-gray-500'>
            <li className='ml-4 hover:text-gray-900'>Sign in</li>
            <li className='ml-4 hover:text-gray-900'>Sign up</li>
          </ul>
        </div>

        <div onClick={handleNav} className="pr-5 block lg:hidden">
          <AiOutlineMenu size={27} color='grey' />
          <div className={!nav ? 'fixed left-0 top-0 pt-12 w-[95%] text-xs tracking-wide cursor-pointer h-30 font-normal' : 'hidden'}>
              <input className="order-2 mx-3 border-b p-2 bg-white rounded"  type="text" placeholder="Search" />
            <ul className='mx-3 cursor-pointer text-gray-500 border-b bg-white'>
              <li className='p-2 hover:text-gray-900'>Categories</li>
              <li className='p-2 hover:text-gray-900'>Why Our Themes?</li>
              <li className='p-2 hover:text-gray-900'>The Guide</li>
            </ul>
            <ul className='mx-3 cursor-pointer text-gray-500 border-b bg-white'>
              <li className='p-2 hover:text-gray-900'>Sign in</li>
              <li className='p-2 hover:text-gray-900'>Sign up</li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )

}


