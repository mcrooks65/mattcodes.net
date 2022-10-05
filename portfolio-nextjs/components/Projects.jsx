import React from 'react'
import ProjectItem from './ProjectItem'
import FlagNoteImage from '../public/assets/projects/FlagNote-React.jpg'
import PantryJSImage from '../public/assets/projects/Pantry-JS.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem  
                    title='FlagNote-React' 
                    backgroundImg={FlagNoteImage} 
                    projectUrl='/flagnote'
                    descBack='Backend: Ruby on Rails API '
                    descFront='Frontend: React-Redux'
                /> 
                <ProjectItem  
                    title='Pantry-JS' 
                    backgroundImg={PantryJSImage} 
                    projectUrl='/pantryjs'
                    descBack='Backend: Ruby on Rails API '
                    descFront='Frontend: Javascript'
                /> 
            </div>
        </div>
    </div>
  )
}

export default Projects