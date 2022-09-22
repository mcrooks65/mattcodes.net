import React from 'react'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-width-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>
                    STILL NEED A COOL CATCHPHRASE OR TAGLINE HERE
                </p>
                <h1 className='py-4 text-gray-700'> 
                    Hi, I'm <span className='text-[#5651e5]'>Matt</span>
                </h1>
                <h1 className='py-4 text-gray-700'> 
                    A Full-Stack Web Developer
                </h1>
                <p className='py-4 text-gray-600 max-2-[70%] m-auto'>
                    I'm a full-stack web developer specializing in building and designing clean user-friendly digital experiences.  Currently I'm focused on building responsive front-end web applications while maintaining my own back-end API's for various projects.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main