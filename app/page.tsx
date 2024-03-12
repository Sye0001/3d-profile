"use client"

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import ThreeDCardDemo from "./card/page";

const Home = () => {
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
      const audio = new Audio('https://cdn.discordapp.com/attachments/1206489703457628182/1217047883262591076/bio_vid.mp4?ex=66029b2b&is=65f0262b&hm=62d2add05077ea7014ee76d4b254454dee448ecd4486eb381a4f7cf7d3b0af7a&');
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
          <div id='overlay' className="text-white text-lg cursor-pointer">
            {ipAddress ? ` ${ipAddress}` : 'Fetching ip...'}
            <br></br>
            <span className='text-white text-opacity-70 justify-center items-center flex text-xs'> (click to enter)</span>
          </div>
        </div>
      </div>
      {/* Use video element for background */}
      <video autoPlay loop muted className="fixed inset-0 object-cover z-0 w-full h-full">
        <source src="https://cdn.discordapp.com/attachments/1206489703457628182/1217047883262591076/bio_vid.mp4?ex=66029b2b&is=65f0262b&hm=62d2add05077ea7014ee76d4b254454dee448ecd4486eb381a4f7cf7d3b0af7a&" />
        Your browser does not support the video tag.
      </video>
      <ThreeDCardDemo />
    </main>
  );
}

export default Home;
