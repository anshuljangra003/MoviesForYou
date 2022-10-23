import Image from 'next/image'
import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'

const Thumbnail = ({result}) => {
    const BASE_URL='https://image.tmdb.org/t/p/original/'
  return (
    <div className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
        <Image
        layout='responsive'
        src={`${BASE_URL}${result.backdrop_path || result.poster_path}`|| `${BASE_URL}${result.poster_path}`}
        height={1080}
        width={1920}
        />
        <div className='p-3'>

        <p className='truncate max-w-md'>{result.overview}</p>
        <h2 className='mt-1 text-2xl group-hover:font-bold transition-all duration-100 ease-in-out'>{result.original_name || result.title}</h2>
        <p className='flex items-center opacity-0 group-hover:opacity-80' 
        >{result.media_type && `${result.media_type}◽`}{" "}
            {result.release_date || result.first_air_date}◽{" "}
            <HeartIcon className='h-6 mx-2 text-red-600'/>{result.vote_count}        
        </p>
        </div>
    </div>
  )
}

export default Thumbnail