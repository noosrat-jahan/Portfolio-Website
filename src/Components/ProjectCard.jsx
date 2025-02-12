import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({card}) => {
    return (
        <div className='bg-blue-900 rounded-lg p-3 w-64 h-96'>
            <div className="relative group w-full h-full overflow-hidden rounded-lg shadow-lg">
                    {/* Image */}
                    <img
                        src={card.projectImage}
                        alt="Card"
                        className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Hover Content */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-black bg-opacity-50 text-white flex flex-col justify-center items-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-3xl font-bold text-yellow-100">{card.projectName}</h3>
                        <p className="text-sm mt-2 text-white"> {card.projectType}</p>
                        <Link to={`/details/${card.id}`} className="mt-4 px-4 py-2 bg-amber-600 hover:bg-amber-700 rounded text-sm font-medium">
                            View Details
                        </Link>
                    </div>
                </div>  
        </div>
    );
};

export default ProjectCard;