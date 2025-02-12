import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {

    const [projects, setProject] = useState([])

     useEffect(() => {
            fetch('/projects.json')
                .then(res => res.json())
                .then(data => {
                    setProject(data);
                })
        }, [])

        const {id} = useParams()
        console.log(id);

        const projectbyId = projects.find(project => project.id === parseInt(id))
        console.log(projectbyId);

        const technology = projectbyId?.details?.mainTechStack

    return (
        <div className='my-10 w-10/12 mx-auto rounded-lg border border-gray-200 p-5 grid grid-cols-1 lg:grid-cols-1 justify-between items-center gap-5'>
            
            <div className=''>
                <img src={projectbyId?.projectImagedet} alt="" />
            </div>

            <div className='text-left  space-y-4 '>
                <h1 className='text-2xl text-amber-50 font-bold'>Technology Stack</h1>
                {
                    technology?.map(tech=><li key={tech}>{tech}</li>)
                }

                <h1 className='text-2xl text-amber-50 font-bold'>Description</h1>
                <p className='whitespace-pre-line'>{projectbyId?.details.detailedDescription}</p>

                <h1 className='text-2xl pb-2 text-amber-50 font-bold'>Live Link</h1>
                <a className='text-sm ' href={projectbyId?.details.liveLink} target='blank'><p>{projectbyId?.details.liveLink}</p></a>

                <h1 className='text-2xl pb-2 text-amber-50 font-bold'>Github Link</h1>
                <a className='text-sm ' href={projectbyId?.details.githubLink} target='blank'><p>{projectbyId?.details.githubLink}</p></a>
            </div>
           
        </div>
    );
};

export default ProjectDetails;