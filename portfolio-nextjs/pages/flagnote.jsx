import React from 'react'
import Image from 'next/image'
import FlagNoteImage from '../public/assets/projects/FlagNote-React.jpg'

const flagnote = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] lg:w-[40vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/50 z-10' />
            <Image className='absolute z-1' layout='fill' objectFit='cover' src={FlagNoteImage} alt='/' />
        </div>

    </div>
  )
}

export default flagnote