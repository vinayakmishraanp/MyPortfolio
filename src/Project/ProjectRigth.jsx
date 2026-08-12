import project1 from '../assets/Project1.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiEjs,
  SiBootstrap,
  SiPassport,
  SiCloudinary,
  SiMaptiler
} from "react-icons/si";

import { FaNodeJs, FaGithub } from "react-icons/fa";
function ProjectRight(){
    return ( 
    <div className='container text-center'>
        <h1 className='projectText'>Project</h1>
        <div className="row mt-5">
             
            <div className="col-12 col-md-6 mt-5 mt-md-0 ps-md-5">
                <h2>Wonderlust</h2>
                <p><b>Wanderlust is a full-stack</b> travel listing web application 
                designed to help users discover,
                 explore, and share amazing places to stay around the world.</p>
            <h4>Technologies:</h4>
            <div className='technologies d-flex'>
<div ><SiJavascript color="#F7DF1E" size={25}/> JavaScript</div>
  <div><FaNodeJs color="#339933" size={25}/> Node.js</div>
  <div><SiExpress color=' #FFFFFF'size={25}/> Express.js</div>
  <div><SiMongodb color="#47A248" size={25} /> MongoDB</div>
  <div><SiEjs color="#B4CA65" size={25}/> EJS</div>
  <div><SiBootstrap color='#7952B3' size={25}/> Bootstrap</div>
  <div><SiPassport color=' #34E27A' size={25}/> Passport.js</div>
  <div><SiCloudinary color='#3448C5' size={25}/> Cloudinary</div>
  <div><SiMaptiler color='#FF6B35'size={25}/> MapTiler</div>
  <div><FaGithub color='FFFFFF' size={25}/> GitHub</div>
            </div>
</div>
            {/* this is image section */}
        <div className="col-12 col-md-6 projectDiv ml-5">
            <div className='projectImg1 mt-3'>
            
                <img src={project1} className='img-fluid projectImg1 ' alt="Vinayak" />
           
            </div>
            <div className='btns mt-3'>
            <a href="https://traveling-website-rq2b.onrender.com/listings" 
            className='bg-dark'><i class="bi bi-box-arrow-up-right">Live demo</i>
            </a>
            <a href="https://github.com/vinayakmishraanp/Traveling-Website" 
            className='bg-dark '><i class="bi bi-github">Code</i>
            </a>
            
            </div>
            </div>
    </div>
    </div>
    );

}
export default ProjectRight;