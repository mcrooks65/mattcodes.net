import React from 'react'
import Link from 'next/link'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-width-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-white'>
                    STILL NEED A COOL CATCHPHRASE OR TAGLINE HERE
                </p>
                <h1 className='py-4 text-white'> 
                    Hi, I&#39;m <span className='text-[#42e103]'>Matt</span>
                </h1>
                <h1 className='py-4 text-white'> 
                    A Full-Stack Web Developer
                </h1>
                <p className='px-24 py-4 text-white max-2-[70%] m-auto text-2xl' >
                    I&#39;m a Full-Stack Web Developer specializing in building and designing clean, user-friendly digital experiences.  Currently, I&#39;m focused on building responsive front-end web applications, while maintaining my own back-end API&#39;s for various projects.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <a href="https://www.linkedin.com/in/matthew-crooks-67887390/">
                        <div className='rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </a>
                    <a href="https://github.com/mcrooks65">
                        <div className='rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </a>
                    <Link href='/#contact'>
                        <div className='rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </Link>
                    <Link href="/assets/MC-Resume.pdf">
                        <div className='rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main