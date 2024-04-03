"use client"

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import ThreeDCardDemo from "../card2/page";

const Framed = () => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [ipAddress, setIpAddress] = useState(null);

  useEffect(() => {
    // Fetch IP address
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://ipv4.wtfismyip.com/json');
        const data = await response.json();
        setIpAddress(data['YourFuckingIPAddress']);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    // Hide overlay once IP address is fetched
    if (showOverlay) {
      fetchIpAddress();
    }
  }, [showOverlay]);

  useEffect(() => {
    // Play audio when the overlay is hidden
    if (!showOverlay) {
      const audio = new Audio('https://cdn.discordapp.com/attachments/1124879216316522600/1218162963408490516/BabyTron_Streetball_Mixxx.mp3?ex=66191eaa&is=6606a9aa&hm=1a2d960ec7c2c414ef2dc858e06ce2ebec4906500d6ee2333e003605af4719c5&');
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
          <div className="text-white text-opacity-75 hover:text-opacity-100 duration-300 ease-in-out text-lg cursor-pointer">
            <a id='overlay'>
            {ipAddress ? ` ${ipAddress}` : 'Fetching ip...'}
            </a>
            <br></br>
            <span className='text-white text-opacity-70 justify-center items-center flex text-xs'> (click to enter)</span>
          </div>
        </div>
      </div>
      {/* Use video element for background */}
      <video autoPlay loop muted className="fixed inset-0 object-cover z-0 w-full h-full">
        <source src="https://cdn.discordapp.com/attachments/1124879216316522600/1215982702117912717/HOW_U_FEEL.mp4?ex=66113024&is=65febb24&hm=b44f9f7712a5a64a94bea0f303245b3fd88742580eb842c3f366d9604e7d96c9&" />
        Your browser does not support the video tag.
      </video>
      <ThreeDCardDemo />
    </main>
  );
}

export default Framed;
