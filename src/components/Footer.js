import React from "react";
import githubLogo from "../assets/images/GitHub-logo.png";
import linkedInLogo from "../assets/images/LinkedIn-logo.png";


export default function Footer() {
  return (
    <footer className="bg-teal">
      <div className="">
        <div className="">          
          
          <a href="https://github.com/Syre11"><img src={githubLogo} alt="GitHub logo"></img></a>
        </div>
        <div>
          
          <a href="https://www.linkedin.com/in/spencer-rye/"><img src={linkedInLogo} alt="LinkedIn logo"></img></a>
        </div>
      </div>
    </footer>
  );
}
