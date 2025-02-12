import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import { div } from 'motion/react-client';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const [project, setProject] = useState([])

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => {
                setProject(data);
            })
    }, [])
    console.log(project)

    return (
        <div id='project'>
            <h1 className="border-t border-amber-50 w-full px-5 pt-10 bg-gradient-to-r pb-16 from-[#e6bc47] via-[#e99554] to-amber-400 inline-block text-transparent bg-clip-text text-6xl font-bold ">Projects</h1>
            <div className='w-11/12 mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>

                {
                    project.map(card => <ProjectCard key={card.id} card={card}></ProjectCard>)
                }

            </div>
        </div>
    );
};

export default Projects;