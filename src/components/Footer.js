import React from "react";
import githubLogo from "../assets/images/GitHub-logo.png";
import linkedInLogo from "../assets/images/LinkedIn-logo.png";


export default function Footer() {
  return (
    <footer className="">
      <div className="">
        <div className="">          
          <img src={githubLogo} alt="GitHub logo"></img>
          <a href="https://github.com/Syre11">Syre11</a>
        </div>
        <div>
          <img src={linkedInLogo} alt="LinkedIn logo"></img>
          <a href="https://www.linkedin.com/in/spencer-rye/">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
