import React from "react";
import moneyMastermindBg from "../assets/images/money-mastermind.png"
import studyGuideBg from "../assets/images/studyguide.png"
import meetBreweryBg from "../assets/images/meetbrew.png"
import hotelCaliBg from "../assets/images/hotel-cali.png"

export default function Portfolio() {
  const myProjects = [
    {
      projTitle: "Money Masterminds",
      alt: "Money Masterminds",
      gitRepo: "https://github.com/deafboi6/proj3",
      deployedLink: "https://proj3.herokuapp.com/",
      backgroundImg: moneyMastermindBg
    },
    {
      projTitle: "Study Guide",
      alt: "Study Guide",
      gitRepo: "https://github.com/Syre11/prework-study-guide",
      deployedLink: "https://syre11.github.io/prework-study-guide/",
      backgroundImg: studyGuideBg
    },
    {
      projTitle: "Meet Brewery",
      alt: "Meet Brewery",
      gitRepo: "https://github.com/matwll/nearby-breweries",
      deployedLink: "https://matwll.github.io/nearby-breweries/",
      backgroundImg: meetBreweryBg
    },
    {
      projTitle: "Hotel California",
      alt: "Hotel California",
      gitRepo: "https://github.com/kas500/hotel-california-app",
      deployedLink: "https://hotel-california-app.herokuapp.com/",
      backgroundImg: hotelCaliBg
    }
  ]
  return (
    <div className="bg-whiteGeo bg-cover font-bodyFont">
      <div className="mx-auto max-w-2xl py-4 px- sm:py-6 sm:px-6 lg:max-w-5xl lg:px-8">
        <h2 className="">My Portfolio</h2>
        <div className="grid grid-cols-1 gap-y-16 gap-x-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8">
          {/* May need to put the return info elsewhere to add functionality for IF there isn't a deployed link */}
          {myProjects.map((projects) => {
            return (
              <div className="">
                <a href={projects.deployedLink} className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg xl:aspect-w-8 xl:aspect-h-8">
                  <img src={projects.backgroundImg} alt={projects.alt} className="h-full w-full object-cover object-center group-hover:opacity-75"></img>
                </a>
                <a href={projects.deployedLink} className="mt-4 text-lg text-center">
                  <h2 className="">
                    {projects.projTitle}
                  </h2>
                </a>
                <a href={projects.gitRepo} className="mt-4 text-sm underline text-center">
                  <h5>
                    View GitRepo
                  </h5>
                </a>
              </div>
            )
          })}        
        </div>
      </div>
    </div>
  );
}
