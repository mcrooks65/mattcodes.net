import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <h2 className='py-4 text-[#42e103]'>
                Get In Touch
            </h2>
            <div className='grid lg:grid-cols-5 gap-8 '>
                {/* Left */}
                <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        <div>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src='\assets\contact.jpg' ></img>
                        </div>
                        <div>
                            <h2 className='py-2'>Matthew Crooks</h2>
                            <p className='text-xl'>Full-Stack Developer</p>
                            <p className='py-4 text-xl'>I am available for freelance or full-time positions.  Contact me and let&#39;s talk.</p>
                        </div>
                        <div>
                            <p className='uppercase py-8 text-xl'>Connect with Me</p>
                            <div className='flex items-center justify-between py-4'>
                                <div className='rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <FaGithub />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <AiOutlineMail />
                                </div>
                                <div className='rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='py-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                            <div className='flex flex-col'>
                                <label className='uppercase text-xl py-2'>Name</label>
                                <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type='text'
                                name='name'
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-xl py-2'>
                                Phone Number
                                </label>
                                <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type='text'
                                name='phone'
                                />
                            </div>
                            </div>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase text-xl py-2'>Email</label>
                            <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type='email'
                                name='email'
                            />
                            </div>
                            <div className='flex flex-col py-2'>
                            <label className='uppercase text-xl py-2'>Subject</label>
                            <input
                                className='border-2 rounded-lg p-3 flex border-gray-300'
                                type='text'
                                name='subject'
                            />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-xl py-2'>Message</label>
                                <textarea
                                    className='border-2 rounded-lg p-3 border-gray-300'
                                    rows='10'
                                    name='message'
                                ></textarea>
                            </div>
                            <button className='w-full p-4 text-gray 100 mt-4 text-xl'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-200 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#42e103]' size={30} />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact