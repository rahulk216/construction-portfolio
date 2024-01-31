import React from "react";
import Image from "next/image";
import "./index.scss";

const Homepage = () => {
  return (
    <div className="homepage-container">
      <Image
        src="/homepage.jpg"
        alt="background image"
        fill
        priority
        style={{ objectFit: "cover" }}
      />
      <div className="overlay"></div>
      <div className="homepage-content">
        <h1>Building Dreams, Crafting Reality</h1>
        <div className="lenvik-container">
          <h2>WITH LENVIK</h2>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Volutpat
          sed cras ornare arcu dui vivamus arcu felis bibendum. Suspendisse
          interdum consectetur libero id faucibus nisl.
        </p>
        <button className="homepage-btn">Request for a consultation</button>
      </div>
    </div>
  );
};

export default Homepage;
