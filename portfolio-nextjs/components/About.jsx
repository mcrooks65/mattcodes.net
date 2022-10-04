import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about'className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                  / / WebDev | GameDev | Project Management
                </p>
                <p className='py-2 text-gray-600'>
                  I've always had a fascination with technology.  From a young age, I had a passion for video games. I didn't just enjoy playing the games, but wanted to understand how they worked, and how to modify the code to start prototyping my own.
                  My brother had the same interest in video games as I did. We took this fascination and taught ourselves the neccessary technologies to become indepedent game developers, culminating in the release of our game FreeHolder on Steam.  
                </p>
                <p className='py-2 text-gray-600'>
                  Developing and finding a market for FreeHolder has been a big accomplishment, but in a sea of Indie Game competition we remain small fish.  And so I had to find other work to make ends meet and further fund my GameDev ambitions.  I entered the gig economy driving for Lyft and got very comfortable communicating with strangers and occassional regulars. I learned to develop rapport with my riders and through this experience have gained a good feel for what constitutes excellent customer service.  However the gig economy wasn't exactly meeting my ambitions.  I wanted to further develop my coding skills  and set on out to complete Flatirons Software Engineering program.  
                </p>
                <p className='py-2 text-gray-600'>
                  Flatiron's coding bootcamp was a truly immersive experience.  It provided me with the skills and the confidence to build web applications that are clean, efficient, and user friendly.   This full stack education included programming fundamentals for HTML, CSS, OOP, Ruby, SQL, ORM, web frameworks like Rails and Sinatra, JavaScript and front-end frameworks like React, Redux, and JSON.  Building up my portfolio projects with these technologies i've been prepping for a proper engineering role where I can continue to build my skills as a developer.
                </p>
                <Link href='/#projects'>
                  <p className='py-2 text-gray-600 underline cursor-pointer'>
                    Check out some of my latest projects.
                  </p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-110 ease-in duration-300'>
                <Image src={AboutImg} className='rounded-xl' alt='/' />
            </div>
        </div>
    </div>
  )
}

export default About