import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='w-full md:h-screen p-2 '>
        <div className='max-w-[1240px] m-auto flex flex-col justify-center h-full'>
            <h2 className='py-4 text-[#00800d]'>What I Can Do</h2>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
            
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/html.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>HTML</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/css.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>CSS</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/javascript.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>JavaScript</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/ruby.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Ruby</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/rails.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Ruby on Rails</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/node.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NodeJS</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/react.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>React</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/redux.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Redux</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/nextjs.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>NextJS</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/tailwind.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Tailwind</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/bootstrap.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Bootstrap</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/python.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Python</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/wordpress.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Wordpress</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/github1.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Github</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/aws.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>AWS</h3>
                        </div>
                    </div>
                </div>
                <div className='text-xl p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                    <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                        <div className='m-auto'>
                            <Image 
                                src='/assets/skills/unity.png' 
                                width='64px' 
                                height='64px' 
                                alt='/'
                            />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h3>Unity</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills