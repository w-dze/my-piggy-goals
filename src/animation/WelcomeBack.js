import React, { useEffect } from "react";
import "./PreLoader.css";
import { preLoaderAnim } from "../animation";
const WelcomeBack = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Your Piggy Goal</span>
        <span>is</span>
        <span>Loading</span>
      </div>
    </div>
  );
};

export default WelcomeBack;
