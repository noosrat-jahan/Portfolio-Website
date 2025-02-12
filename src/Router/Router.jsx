import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home';

import Homelayout from '../Layout/Homelayout';
import ProjectDetails from '../Components/ProjectDetails';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Homelayout></Homelayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
        
            },
            {
                path: "/details/:id",
                element: <ProjectDetails></ProjectDetails>        
            }
        ]
    },
    
]);

export default Router;