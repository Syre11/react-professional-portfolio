import React from "react";

export default function NavBar({ currentPage, handlePageChange }) {
  return (
    <div className="text-xl font-bodyFont">
      <div className="flex">
        <div className="px-2">
          <a
            href="#aboutme"
            onClick={() => handlePageChange('AboutMe')}
            className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
            About Me
          </a>          
        </div>
        <div className="px-2">
          <a
            href="#contactme"
            onClick={() => handlePageChange('ContactMe')}
            className={currentPage === 'ContactMe' ? 'nav-link active' : 'nav-link'}>
            Contact Me
          </a>          
        </div>
        <div className="px-2">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </a>          
        </div>
        <div className="px-2">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            Resume
          </a>          
        </div>
      </div>
    </div >
  );
}
