import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'

function About() {
    return ( <>
   <div className="container mt-5"> 
  <div className="row  d-flex align-items-center"> 
    {/* Full width on mobile, half width on desktop */}
    <div className="col-12 col-md-6 img"> 
      <img src='src/assets/vinayak_image.jpeg' className='img-fluid img' alt="Vinayak" /> 
    </div> 
    
    
     <div className="col-12 col-md-6 mt-5 mt-md-0 ps-md-5"> 
    
      <div className='about'>
        <h1>About</h1>
                    <p>Hi, <b>I'm Vinayak Mishra </b>, a B.Sc. IT graduate and aspiring Full-Stack / MERN Developer.
                    I enjoy building responsive, user-friendly web applications and turning ideas into functional digital experiences.</p>

                <p>I work with technologies like <b>HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, and MySQL. </b>
                    I’m continuously improving my development and 
                problem-solving skills by working on real-world projects
                and learning new technologies.</p>

                <p>I'm currently looking for opportunities where I can contribute to a development team, 
                    learn from experienced developers, and grow as a software developer.</p> 
                    </div>
    </div> 
  </div> 
</div>

    
    </> );
}

export default About;