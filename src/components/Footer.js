import React from "react";
import githubLogo from "../assets/images/GitHub-logo.png";
import linkedInLogo from "../assets/images/LinkedIn-logo.png";


export default function Footer() {
  return (
    <footer className="bg-teal">
      <div className="flex justify-center py-4">
        <div className="">          
          
          <a href="https://github.com/Syre11"><img src={githubLogo} alt="GitHub logo" className="h-20"></img></a>
        </div>
        <div>
          
          <a href="https://www.linkedin.com/in/spencer-rye/"><img src={linkedInLogo} alt="LinkedIn logo" className="h-20"></img></a>
        </div>
      </div>
    </footer>
  );
}
