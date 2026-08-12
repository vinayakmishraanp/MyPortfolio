import React, { memo } from 'react'
import { FcCableRelease } from 'react-icons/fc'
import './Contact.css'
'bootstrap/dist/css/bootstrap.min.css';



function Contack() {
    return ( <>
    
    <div className='contact mt-5 d-flex flex-column'>
        <h5 className='text-center mt-4'>GET IN TOUCH</h5>
        <h2>Let's Connect</h2>
        <p>I'm always open to discussing new project,
            creative ideas or opportunities to be part of a team.
        </p>
    <div className='row contactInfo d-flex'>
    <div className='col-12 col-md-6 '>
       <i class="bi bi-envelope"></i>
        <h5>Email</h5>
        <p>vinayakmishraanp363@gmail.com</p>
        <a href="mailto:vinayakmishraanp363@gmail.com" className='info'> 
            
        <i class="bi bi-envelope"></i>Send Email</a>
        
    </div>
      <div className='col-12 col-md-6'>
       <i class="bi bi-phone"></i>
        <h5>Mobile</h5>
        <p>9026963774</p>
        <a href="tel:+919026963774" className='info'>
            <i class="bi bi-telephone"></i>Call Me</a>
    </div>       
        
    </div> 
    </div>
    </> );
}

export default Contack;
