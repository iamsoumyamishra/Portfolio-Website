import React from 'react'

const Skills = () => {
  return (
    <div className='section-skills' id='skills'>
        <div className='text-3xl mt-20 font-bold'>
            <div>
                <h2>My Skills</h2>
            </div>
        </div>
        <div className="skill-container">
            <div className="skill-card">
                <h3>JavaScript</h3>
            </div>
            <div className="skill-card">
                <h3>React</h3>
            </div>
            <div className="skill-card">
                <h3>Node.js</h3>
            </div>
            <div className="skill-card">
                <h3>CSS</h3>
            </div>
            <div className="skill-card">
                <h3>HTML</h3>
            </div>
        </div>
    </div>
  )
}

export default Skills