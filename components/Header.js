import React from 'react'
import Image from 'next/image'
import{HomeIcon,CheckBadgeIcon,ArchiveBoxIcon,MagnifyingGlassIcon,UserIcon,ArrowTrendingUpIcon} from '@heroicons/react/24/outline'

import HeaderItem from './HeaderItem'
function Header() {
  
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
        <div className='flex flex-grow justify-evenly max-w-2xl'>
        <HeaderItem title='HOME' Icon={HomeIcon}/>
        <HeaderItem title='TRENDING' Icon={ArrowTrendingUpIcon}/>
        <HeaderItem title='VERIFIED' Icon={CheckBadgeIcon}/>
        <HeaderItem title='COLLECTIONS' Icon={ArchiveBoxIcon}/>
        <HeaderItem title='SEARCH' Icon={MagnifyingGlassIcon}/>
        <HeaderItem title='PROFILE' Icon={UserIcon}/>
        
        </div>
  <Image 
  src="https://links.papareact.com/ua6" 
  className='object-contain'
  width={200}
  height={100}
  alt="HULU"
  />

    </header>
    
  )
}

export default Header