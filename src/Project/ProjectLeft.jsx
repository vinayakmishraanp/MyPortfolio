import React from 'react'
import project2 from '../assets/Project2.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FaHtml5, FaCss3Alt, FaJs, FaCode } from "react-icons/fa";
import { MdEvent } from "react-icons/md";

import { FaNodeJs, FaGithub } from "react-icons/fa";

function ProjectLeft() {
    return (
        
        <div className='projectLeft container'>
        <div className="row mt-5">

            <div className="col-12 col-md-6 projectDiv ml-5">
            <div className='projectImg1 mt-3'>
            
                <img src={project2} className='img-fluid projectImg1 ' alt="Vinayak" />
            
            </div>
            <div className='btns mt-3 justify-content-center'>
            <a href="https://github.com/vinayakmishraanp/Simon-say-game" 
            className='bg-dark '><i class="bi bi-github">Code</i>
            </a>
            
            </div>
            </div>

        
           <div className="col-12 col-md-6 mt-5 mt-md-0 ps-md-5 projectText1 ">
              <h2>Simon Says Game</h2>
              <p>
                <b>Simon Says</b> is an interactive memory-based game where 
                players need to remember and repeat an increasingly difficult 
                sequence of colors. With every successful round, the sequence 
                becomes longer, challenging 
                the player's memory, concentration, and reaction speed.
                </p> 
                <h4>Technologies:</h4>
                <div className="technologies d-flex">
  <div>
    <FaHtml5 color="#E34F26" size={25} /> HTML
  </div>

  <div>
    <FaCss3Alt color="#1572B6" size={25} /> CSS
  </div>

  <div>
    <FaJs color="#F7DF1E" size={25} /> JavaScript
  </div>

  <div>
    <FaCode color="#61DAFB" size={25} /> DOM Manipulation
  </div>

  <div>
    <MdEvent color="#9C27B0" size={25} /> Event Handling
  </div>
</div>

           
        </div>
         
        </div>
        </div>
    );
}

export default ProjectLeft;