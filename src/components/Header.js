import React from "react";
import NavBar from "../components/NavBar"
import SRLogo from "../assets/images/FalkenColours.png";

export default function Header({ currentPage, setCurrentPage }) {
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header className="">
      <div>
        <h2 className="text-3xl font-bold underline">Spencer Rye</h2>
        <img src={SRLogo} alt="Spencer Rye Logo" className=""></img>
      </div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
    </header>
  );
};
