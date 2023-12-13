import React, { useState, useRef } from "react";
import { Button } from "react-bootstrap";
import moneySound from "../sound/money.mp3";
function SoundComponent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(moneySound));

  const togglePlay = () => {
    const audio = audioRef.current;
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <Button variant="info" onClick={togglePlay}>
        {isPlaying ? "⏸️" : "🎵"}
      </Button>
    </div>
  );
}

export default SoundComponent;
