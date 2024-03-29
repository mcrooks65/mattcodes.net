import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn, FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {useRouter} from 'next/router'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false)
  const [navBg, setNavBg] = useState('rgb(30 58 138)')
  const [linkColor, setLinkColor] = useState('#1f2937')
  const router = useRouter()

  useEffect(()=>{
    if (
      router.asPath === '/flagnote' ||
      router.asPath === '/pantry'
    ) {
      setNavBg('transparent')
      setLinkColor('rgb(30 58 138)')
    } else {
      setNavBg('rgb(30 58 138)')
      setLinkColor('#1f2937')
    }
  }, [router])

  const handleNav = () => {
    setNav(!nav)
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div 
    style={{backgroundColor: `${navBg}`}}
    className={
      shadow 
        ? 'fixed w-full h-20 shadow-xl z-[100]' 
        : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          <Image className='cursor-pointer p-3'
            src="/assets/navLogo.png" 
            alt="/" 
            width='225' 
            height='225'
          />
        </Link>
        
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-xl uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-xl uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-xl uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-xl uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li className='ml-10 text-xl uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div onClick={handleNav} className='md:hidden cursor-pointer'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-blue-900 p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src="/assets/navLogo.png" alt="/" width='175' height='175'/>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w [90%] py-4'></p>
            </div>
            <div className='py-4 flex flex-col'>
              <ul className='uppercase'>
                <Link href='/'>
                  <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
                </Link>
                <Link href='/#about'>
                  <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
                </Link>
                <Link href='/#skills'>
                  <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
                </Link>
                <Link href='/#projects'>
                  <li onClick={()=> setNav(false)} className='py-4 text-sm'>Projects</li>
                </Link>
                <Link href='/#contact'>
                  <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
                </Link>
              </ul>
              <div className='pt-40'>
                <p className='uppercase tracking-widest text-[#42e103]'>Let&#39;s connect!</p>
                <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a href='https://www.linkedin.com/in/matthew-crooks-67887390/'>
                      <FaLinkedinIn />
                    </a>
                  </div> 
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <a href='https://github.com/mcrooks65'>
                      <FaGithub />
                    </a>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href="/#contact">
                      <AiOutlineMail onClick={()=> setNav(false)} />
                    </Link>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <Link href="/assets/MC-Resume.pdf">
                      <BsFillPersonLinesFill  />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar