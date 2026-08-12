
import 'bootstrap/dist/css/bootstrap.min.css';

import './Navbar.css'
import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="navBaro mt-2 gap-2 ">

     


      <button
        className="btn btn-primary"
        onClick={() => scrollToSection("about")}
      >
        About
      </button>

      <button
        className="btn btn-primary"
        onClick={() => scrollToSection("projects")}
      >
        Projects
      </button>

      <button
        className="btn btn-primary"
        onClick={() => scrollToSection("skills")}
      >
        Skills
      </button>

      <button
        className="btn btn-primary ms-auto me-3"
        onClick={() => scrollToSection("contact")}
      >
        Contact
      </button>

    </div>
  );
}