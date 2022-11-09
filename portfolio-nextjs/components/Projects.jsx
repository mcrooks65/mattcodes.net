import React from 'react'
import ProjectItem from './ProjectItem'
import FlagNoteImage from '../public/assets/projects/FlagNote-React.jpg'
import PantryJSImage from '../public/assets/projects/Pantry-JS.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full '>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <h2 className='py-4 text-[#42e103]'>What I&#39;ve Built</h2>
            <div className='grid md:grid-cols-2 gap-8 text-xl'>
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
                    projectUrl='/pantry'
                    descBack='Backend: Ruby on Rails API '
                    descFront='Frontend: JavaScript'
                /> 
            </div>
        </div>
    </div>
  )
}

export default Projects