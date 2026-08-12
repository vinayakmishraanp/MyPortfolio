import  "./template.css"
import Navbar from "./Navbar/Navbar"
import About from "./Hero/About"
import Project from "./Project/Project"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
import Skill from "./skill/Skill"

export default function Template(){
    return(
        <div className="template">
       
          <Navbar  />
          
        
      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="contact">
        <Contact />
      </section>
      <Footer />
        </div>
        
    )
}