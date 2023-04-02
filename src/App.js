import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
// } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  return (
    // <>
    //   <Router>
        <div className="flex flex-col h-screen justify-between">
          <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <Body currentPage={currentPage} />
          <Footer />
        </div>        
    //   </Router>
    // </>
  );
}

export default App;
