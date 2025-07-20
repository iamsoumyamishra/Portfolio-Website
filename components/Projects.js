'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Projects = () => {



    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'A personal portfolio website showcasing my skills and projects.',
            image: '/projects/project1.png'
        },
        {
            id: 2,
            title: 'E-commerce Platform',
            description: 'An online store with a user-friendly interface and secure payment options.',
            image: '/projects/project2.png'
        },
        {
            id: 3,
            title: 'Blog Application',
            description: 'A blogging platform where users can share their thoughts and ideas.',
            image: '/projects/project3.png'
        }
    ]);


    return (
        <div className='section-projects' id='projects'>

            <div className='text-3xl mt-20 font-bold'>
                <div>
                    My Projects
                </div>
            </div>

            <div className='flex space-x-4 mt-20 gap-5 flex-wrap justify-center'>

                {projects.map((project) => (
                    <div className='project-card group' key={project.id}>
                        <div className='h-50'>
                            <Image src="/projects/project1.png" alt="Project 1" width={200} height={100} className='project-image mb-4' />
                        </div>
                        <div className='p-6 z-1 bg-gray-800 rounded-b-xl'>

                            <h2 className='text-2xl  font-semibold mb-3'>{project.title}</h2>
                            <p className='text-lg text-gray-200 mb-4'>{project.description}</p>
                            <Link href={`${project.url}`}>
                                <button className='cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300'>
                                    View Project
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Projects