import { useRouter } from 'next/router'
import React from 'react'
import requests from '../utils/requests'

const Nav = () => {
  const router=useRouter();
  return (
    <nav className='relative'>
    <div className='flex  whitespace-nowrap space-x-10 text-2xl px-10 sm:px-20 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
      {Object.entries(requests).map(([key,{title,url}])=>(
        <h2 key={key}
        onClick={()=>
         router.push(`/?genre=${key}`)
        }
        className=" last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 active:text-green-400"
        >{title}</h2>
      ))}
      <div className='absolute top-0 right-0 bg-gradient-to-l from-black h-10 w-1/12'>

      </div>
    </div>
    </nav>
  )
}

export default Nav