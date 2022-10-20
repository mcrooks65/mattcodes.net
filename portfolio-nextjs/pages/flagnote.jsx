import React from 'react'
import Image from 'next/image'
import FlagNoteImage from '../public/assets/projects/FlagNote-React.jpg'

const flagnote = () => {
  return (
    <div className='w-full'>
        <div className='w-screen h-[30vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] bg-black/50 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={FlagNoteImage}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>FlagNote</h2>
          <h3>Ruby on Rails / React JS / Tailwind</h3>
        </div>
      </div>
    </div>
  )
}

export default flagnote