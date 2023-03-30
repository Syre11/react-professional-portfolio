import React from "react";

export default function Portfolio() {
  const myProjects = [
    {
      projTitle: "Money Masterminds",
      // alt: "Money Masterminds",
      gitRepo: "https://github.com/deafboi6/proj3",
      deployedLink: "https://proj3.herokuapp.com/",
    },
    {
      projTitle: "Study Guide",
      // alt: "Study Guide",
      gitRepo: "https://github.com/Syre11/prework-study-guide",
      deployedLink: "https://syre11.github.io/prework-study-guide/"
    },
    {
      projTitle: "Meet Brewery",
      // alt: "Meet Brewery",
      gitRepo: "https://github.com/matwll/nearby-breweries",
      deployedLink: "https://matwll.github.io/nearby-breweries/"
    },
    {
      projTitle: "Hotel California",
      // alt: "Hotel California",
      gitRepo: "https://github.com/kas500/hotel-california-app",
      deployedLink: "https://hotel-california-app.herokuapp.com/"
    }
  ]
  return (
    <div className="bg-whiteGeo">
      <h2>My Portfolio</h2>
      <div>
        {/* May need to put the return info elsewhere to add functionality for IF there isn't a deployed link */}
        {myProjects.map((projects) => {
          return (
            <div>
              <img src={projects.backgroundImg}></img>
              <a href={projects.deployedLink}>
                <h3>
                  {projects.projTitle}
                </h3>
              </a>
              <a href={projects.gitRepo}></a>              
            </div>
          )
        })}
      </div>
    </div>
  );
}
