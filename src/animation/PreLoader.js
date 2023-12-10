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
        <span>Save,</span>
        <span>Smile,</span>
        <span>Shop.</span>
      </div>
    </div>
  );
};

export default PreLoader;
