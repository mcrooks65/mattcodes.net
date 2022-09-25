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
                  Though i've recently become a Full-Stack Web Developer, I've always had a fascination with technology.  From a young age my brother and I had a passion for video games, to the point that we would modify the code of open source games and start prototyping our own.  Eventually we took this passion to taught ourselves the neccessary technologies to become indepedent game developers, culminating in the release of our game FreeHolder on Steam.  
                </p>
                <p className='py-2 text-gray-600'>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
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