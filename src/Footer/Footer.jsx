import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
'bootstrap-icons/font/bootstrap-icons.css';

function Footer() {
    return ( <>
    <div className='mt-5 footerDiv d-flex flex-column'>
        
        <h4>My Portfolio</h4>
        <p> &copy; 2026 <b>Vinayak Mishra</b></p>
        <div className='icons d-flex'>
           <a href='https://www.instagram.com/mishra__vinayak/?hl=en'> <i class="bi bi-instagram"></i></a>
           <a href='https://www.linkedin.com/in/vinayak-mishra-5462a5297/'> <i class="bi bi-linkedin"></i> </a>
          <a href='https://github.com/vinayakmishraanp'>  <i class="bi bi-github"></i></a>
           <a href='https://discord.gg/1443598737590190266'><i class="bi bi-discord"></i></a>

        </div>

    </div>
    </> );
}

export default Footer;