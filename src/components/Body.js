import React from "react";
import AboutMe from "../pages/AboutMe";
import ContactMe from "../pages/ContactMe";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";

export default function Body({ currentPage }) {
  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "ContactMe") {
      return <ContactMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <AboutMe />;
  };

  return (
    <main className="mb-auto">
      {renderPage()}
    </main>
  )
}
