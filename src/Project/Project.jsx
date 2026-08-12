import React from 'react'
import './Project.css'
import ProjectLeft from './ProjectLeft'
import ProjectRight from './ProjectRigth'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Project.css'

function Project() {
    return ( <div className='mt-5'>
   
    <ProjectRight/>
     <ProjectLeft/>
    </div> );
}

export default Project;