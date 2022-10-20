import React from 'react'
import Image from 'next/image'
import FlagNoteImage from '../public/assets/projects/FlagNote-React.jpg'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

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
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p>A web-based note taking application specifically for pentesters and CTF events.</p>
            {/* TO ADD - Story behind project!  Why did you code it and what did you get out of it! */}
            <ul>
                <li className='py-1'>● Designed an interactive, efficient UI with RESTful routing using React-Redux.</li>
                <li className='py-1'>● Developed Ruby on Rails API back-end to handle data persistence and respond to fetch requests.</li>
                <li className='py-1'>● Applied custom Tailwind styling resulting in improved readability and use.</li>
            </ul>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
            <button className='px-8 py-2 mt-4'>Code</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
                <p>Technologies</p>
            </div>
            <div className='grid grid-cols-3 md:grid-cols-1'>
                <p className='text-gray-200 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Ruby on Rails</p>
                <p className='text-gray-200 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />HTML</p>
                <p className='text-gray-200 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />JavaScript</p>
                <p className='text-gray-200 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />React</p>
                <p className='text-gray-200 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Redux</p>
                <p className='text-gray-200 py-2 flex items-center'><RiRadioButtonFill className='pr-1' />Tailwind</p>
            </div>
        </div>
      </div>
      <Link href='/#projects'>
        <p className='py-3 px-3 underline cursor-pointer'>Back</p>
      </Link>
    </div>
  )
}

export default flagnote