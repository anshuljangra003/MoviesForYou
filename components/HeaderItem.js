import React from 'react'

const HeaderItem = ({Icon,title}) => {
  return (
    <div className='flex group flex-col items-center cursor-pointer w-12 m-1 sm:w-20'>
      <Icon className='h-8 text-gray-300 group-hover:text-white group-hover:animate-bounce'/>
      <p className='opacity-0 group-hover:opacity-90 tracking-widest'>{title}</p>

    </div>
  )
}

export default HeaderItem