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
        <span>Your</span>
        <span>Piggy</span>
        <span>Goals</span>
      </div>
    </div>
  );
};

export default PreLoader;
