import React from "react";
import Forms from "./component/Forms";
import Navbar from "./component/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container my-4">
        <Forms heading="Enter Your Text To Analyze" />
      </div>
    </>
  );
}

export default Home;
