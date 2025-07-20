import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='section-justify-center flex-col text-white'>
        <div className='text-3xl mt-20 font-bold'>
            <div>
                About Me
            </div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-10 flex-col-md'>
            <div className='card'>
                <Image src="/profile/image.png" alt="Profile" width={150} height={150} className='rounded-full mb-4 border-0 border-black' />
                <h2 className='text-2xl text-black font-semibold mb-3'>Soumya Mishra</h2>
                <h3 className='text-lg text-gray-600 mb-4'>First Year Engineering Student</h3>
                <div className='flex space-x-4'>
                    <Link href="https://github.com/iamsoumyamishra" target="_blank">
                        <Image src="/github-logo.png" alt="GitHub" width={30} height={30} className='inline' />
                    </Link>
                    <Link href="https://www.linkedin.com/in/soumya-mishra-05a547346/" target="_blank">
                        <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} className='inline rounded-full' />
                    </Link>
                    <Link href="https://x.com/soumya.cpp" target="_blank">
                        <Image src="/x-logo.png" alt="X" width={30} height={30} className='inline rounded-full' />
                    </Link>
                    <Link href="https://instagram.com/soumya.cpp" target="_blank">
                        <Image src="/Instagram_logo.svg" alt="Instagram" width={30} height={30} className='inline rounded-full' />
                    </Link>
                </div>
            </div>
            <div className='description'>
                Hi, I'm a first-year engineering student passionate about technology, innovation, and problem-solving. I enjoy exploring how things work and applying my knowledge to create practical solutions. I'm deeply interested in gaining hands-on experience, working on real-world projects, and continuously learning through collaboration and experimentation. I believe engineering is not just about technical skills but also about creativity, critical thinking, and making a positive impact. I’m excited to be on this journey, and I’m committed to growing both personally and professionally as I contribute to meaningful projects and expand my understanding of the ever-evolving world of engineering.
            </div>
        </div>
    </div>
  )
}

export default About