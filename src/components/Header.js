import React from "react";
import NavBar from "../components/NavBar"
import SRLogo from "../assets/images/SRBlackWhite.png";

export default function Header({ currentPage, setCurrentPage }) {
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header className="flex items-center justify-between h-40 px-4 py-2 bg-blue md:flex-none">
      <div className="flex px-4 py-2 items-center">
        <img src={SRLogo} alt="Spencer Rye Logo" className="h-40"></img>
        <h2 className="text-5xl font-headerFont">Spencer Rye</h2>
      </div>
      <NavBar className="" currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
};
