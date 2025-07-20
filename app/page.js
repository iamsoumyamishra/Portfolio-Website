import About from '@/components/About'
import Projects from '@/components/Projects'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='section-center'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>Welcome to My Portfolio</h1>
      <p className='text-lg text-gray-600'>Explore my projects and ideas!</p> 
    <div className='flex flex-col items-center justify-center text-gray-800'>
      <span className=''>Crafting incredible innovations while exploring even more thrilling ideas!</span>
    </div>
    </div>
    <About />
    <Projects />
    </>
  )
}

export default page