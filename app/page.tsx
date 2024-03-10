"use client"

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import ThreeDCardDemo from "./card/page";

const Home = () => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Play audio when the overlay is hidden
    if (!showOverlay) {
      const audio = new Audio('https://cdn.discordapp.com/attachments/1033340729239556198/1216288447833178142/video_bio.mp4?ex=65ffd7e3&is=65ed62e3&hm=da8574235f57fca32e083c324dbec0a792bfd59fd79c344a0128b37ef1b147f7&');
      audio.loop = true; // Loop the audio indefinitely
      audio.play();
    }
  }, [showOverlay]);

  const handleOverlayClick = () => {
    setShowOverlay(false);
  };

  return ( 
    <main>
      <div className={`fixed inset-0 z-50 bg-black ${showOverlay ? '' : 'hidden'}`} onClick={handleOverlayClick}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-lg cursor-pointer">Click to enter</div>
        </div>
      </div>
      {/* Use video element for background */}
      <video autoPlay loop muted className="fixed inset-0 object-cover z-0 w-full h-full">
        <source src="https://cdn.discordapp.com/attachments/1033340729239556198/1216288447833178142/video_bio.mp4?ex=65ffd7e3&is=65ed62e3&hm=da8574235f57fca32e083c324dbec0a792bfd59fd79c344a0128b37ef1b147f7&" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <ThreeDCardDemo />
    </main>
  );
}

export default Home;