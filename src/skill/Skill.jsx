import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Skill.css'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaCode,
  FaShieldAlt,
  FaLock,
  FaPassport,
  FaCloud,
  FaMobileAlt
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiEjs,
  SiCloudinary,
  SiMaptiler
} from "react-icons/si";

import {
  MdApi,
  MdSecurity,
  MdDevices,
  MdDataObject
} from "react-icons/md";

function Skill() {
    return ( <>
    <div className="container mt-5">
        <h2 className="text-center">Skills</h2>
        <div className="row d-flex divRow">
{/* backend */}
         <div className='col-6 col-md-6 skill'>    
        <div>
    <FaNodeJs color="#339933" size={35} />
    <span>Node.js</span>
  </div>

  <div>
    <SiExpress color="#FFFFFF" size={35} />
    <span>Express.js</span>
  </div>
 <div>
    <MdApi color="#8B5CF6" size={35} />
    <span>REST APIs</span>
  </div>

  <div>
    <MdSecurity color="#22C55E" size={35} />
    <span>Authentication</span>
  </div>
  <div>
    <FaShieldAlt color="#A855F7" size={35} />
    <span>Authorization</span>
  </div>

  <div>
    <FaPassport color="#34E27A" size={35} />
    <span>Passport.js</span>
  </div>
   
        </div>
        {/* frontend */}
            <div className='col-6 col-md-6 skill'>    
        <div>
    <FaCss3Alt color="#1572B6" size={35} />
    <span>CSS3</span>
  </div>

  <div>
    <FaJs color="#F7DF1E" size={35} />
    <span>JavaScript</span>
  </div>
   
  <div>
    <FaReact color="#61DAFB" size={35} />
    <span>React.js</span>
  </div>

  <div>
    <FaBootstrap color="#7952B3" size={35} />
    <span>Bootstrap</span>
  </div>
   <div>
    <FaMobileAlt color="#A855F7" size={35} />
    <span>Responsive Design</span>
  </div>

        </div>

        {/* tools */}
        <div className='col-6 col-md-6 skill'> 
            <div>
    <FaGitAlt color="#F05032" size={35} />
    <span>Git</span>
  </div>

  <div>
    <FaGithub color="#FFFFFF" size={35} />
    <span>GitHub</span>
  </div>

  <div>
    <SiCloudinary color="#3448C5" size={35} />
    <span>Cloudinary</span>
  </div>

  <div>
    <SiMaptiler color="#FF6B35" size={35} />
    <span>MapTiler</span>
  </div>

  <div>
    <SiEjs color="#B4CA65" size={35} />
    <span>EJS</span>
  </div>
        </div>

                {/* database */}
        <div className='col-6 col-md-6 skill'>    
        <div>
    <SiMongodb color="#47A248" size={35} />
    <span>MongoDB</span>
  </div>

  <div>
    <SiMysql color="#4d5052" size={35} />
    <span>MySQL</span>
  </div>

  <div>
    <FaDatabase color="#F29111" size={35} />
    <span>SQL</span>
  </div>
   
        </div>    
        </div>
        </div>
    
    </> );
}

export default Skill;
