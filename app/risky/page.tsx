"use client"

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import ThreeDCardDemo from "../card3/page";

const Risky = () => {
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
      const audio = new Audio('https://pouch.jumpshare.com/preview/EW8FhUKxuQeNChgKxAOpjG2PYwY3k2PNL1ER4uwwEB6lrmdWxycWYjMjNutbfbcWx_2GlM7dqG8v4hN0BMx0N95JDXqG4wVPxlw9KFKbD8vHIaxchrCd2WS1JwYnTw9tsHetDA98TMXeayoRyTRLl26yjbN-I2pg_cnoHs_AmgI.mp3');
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
        <source src="https://cdn.discordapp.com/attachments/1124879216316522600/1215982702117912717/HOW_U_FEEL.mp4?ex=6623a524&is=66113024&hm=a017ac2150fe82944ca44ca43deec228d2ca0b8cc859a3b070beee9cbe760296&" />
        Your browser does not support the video tag.
      </video>
      <ThreeDCardDemo />
    </main>
  );
}

export default Risky;
