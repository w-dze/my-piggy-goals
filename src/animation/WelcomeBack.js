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
        <span>Welcome</span>
        <span>Back</span>
        <span>:/</span>
      </div>
    </div>
  );
};

export default WelcomeBack;
