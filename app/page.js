import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='section-center'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>Welcome to My Portfolio</h1>
      <p className='text-lg text-gray-600'>Explore my projects and ideas!</p> 
    <div className='flex flex-col items-center justify-center text-gray-800'>
      <span>Crafting incredible innovations while exploring even more thrilling ideas!</span>
    </div>
    </div>
    <About />
    <div className='flex justify-center w-full text-center bg-gray-700'>
      <div className='max-w-[90%] w-full bg-white h-[1.5px] rounded-2xl div-hr'>
      </div>
    </div>
    <Skills />
    <Projects />
    </>
  )
}

export default page