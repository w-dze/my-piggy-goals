import React, { useEffect } from "react";
import "./PreLoader.css";
import { preLoaderAnim } from "../animation";
const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Yay!</span>
        <span>Right</span>
        <span>Place</span>
      </div>
    </div>
  );
};

export default PreLoader;
