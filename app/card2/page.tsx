"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function FramedCard () {
  return (
    <CardContainer className="inter-var md:mx-0 mx-4 mt-0 md:mt-14">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-gray-500/[0.1] bg-black bg-opacity-85  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="60" className="w-full rounded-md mt-4">
            <div className="banner">
                <Image
                src={'https://lh3.googleusercontent.com/u/0/drive-viewer/AKGpihZBTOrs0TtpQMd4kFkLEvL6daxhQi9_BUAWLFXBqhar-2EyzIjnbP461RXYcspi-YaTDXMyhrXGiQxr9jAIgL-bxCA7Sw=w1679-h931'}
                width={960}
                height={240}
                alt="Banner"
                className="object-cover rounded-lg  w-full h-[168px]"
                />
            </div>
            <div className="avatar">
          <Image
            src="https://i.pinimg.com/originals/9d/2c/d1/9d2cd182892de94260a9b386eeca24ca.jpg"
            height="108"
            width="108"
            className=" object-cover ml-4 absolute top-24 w-[108px] h-[108px] sm:top-20 rounded-full group-hover/card:shadow-xl mx-auto"
            alt="Avatar"
          />
          </div>
        </CardItem>
       <CardItem translateZ="80">
        <div className="w-[20rem] sm:w[24rem] md:w-[27rem] px-1">
       <div className="profile px-2 w-full mt-8 flex justify-between items-center">
    <div className="flex items-center">
        <a className="font-semibold text-2xl">Framed</a>
    </div>
    <div className="badges ml-auto p-1 gap-1 flex items-center bg-neutral-950 bg-opacity-40 rounded-md">
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 32 32"><title>hypesquad-event-attendee</title><path d="M31.43,8.79,18.77,17.1a1.47,1.47,0,0,0-.51.57l-1.93,3.87a.36.36,0,0,1-.66,0l-1.93-3.87a1.47,1.47,0,0,0-.51-.57L.57,8.79A.37.37,0,0,0,0,9.27L5.29,19.56A.38.38,0,0,1,5,20.1H1.82a.37.37,0,0,0-.22.67L15.78,30.93a.39.39,0,0,0,.44,0L30.4,20.77a.37.37,0,0,0-.22-.67H27a.38.38,0,0,1-.33-.54L32,9.27A.37.37,0,0,0,31.43,8.79Z" fill="#fbb848"/><path d="M16.28,1.17l1.3,2.65a.33.33,0,0,0,.23.17l2.93.42a.31.31,0,0,1,.17.53L18.79,7a.33.33,0,0,0-.09.27l.5,2.91a.3.3,0,0,1-.44.32L16.14,9.13a.28.28,0,0,0-.28,0L13.24,10.5a.3.3,0,0,1-.44-.32l.5-2.91A.33.33,0,0,0,13.21,7L11.09,4.94a.31.31,0,0,1,.17-.53L14.19,4a.33.33,0,0,0,.23-.17l1.3-2.65A.31.31,0,0,1,16.28,1.17Z" fill="#fbb848"/></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31.43 22">
  <path d="M21.26 16h-1.67A3.64 3.64 0 0 1 16 12.32V10.6a1.45 1.45 0 0 1 1.43-1.47h7.88V7.08h-14c-1.27 2.86-2.57 5.83-3 7a3.65 3.65 0 0 1-3.37 2.31v1.23a6 6 0 0 0 4.16 1.7h12.58a3.64 3.64 0 0 0 3.63-3.63v-.26a3.45 3.45 0 0 1-1.9.57zm-8.43-2.8a1.24 1.24 0 1 1 1.24-1.2 1.24 1.24 0 0 1-1.24 1.2z" fill="#aabff2"/>
  <path d="M12.83 10.72a1.24 1.24 0 0 0 0 2.48 1.24 1.24 0 0 0 0-2.48z"/>
  <path d="M25.56 9.13h-8.13A1.45 1.45 0 0 0 16 10.6v1.72A3.64 3.64 0 0 0 19.59 16h3.82a3.45 3.45 0 0 0 1.9-.57.53.53 0 0 0 .1-.06 3.69 3.69 0 0 0 1.59-3V10.6a1.46 1.46 0 0 0-1.44-1.47zM22 14.4h-1.61a.61.61 0 1 1 0-1.21H22a.61.61 0 1 1 0 1.21zm2.85 0h-.65a.61.61 0 1 1 0-1.21h.61a.61.61 0 0 1 0 1.21z" fill="#cbdaf7"/>
  <path d="M22 13.19h-1.61a.61.61 0 1 0 0 1.21H22a.61.61 0 1 0 0-1.21zM24.81 13.19h-.61a.61.61 0 1 0 0 1.21h.61a.61.61 0 0 0 0-1.21z" fill="#aabff2"/>
  <path d="M2.23 15.37a3.75 3.75 0 0 1-.44-.24v5.78L3.34 22l1.55-1.09v-4.55a3.76 3.76 0 0 1-2.66-.99z" fill="#ef8843"/>
  <path d="M7.29 13.41a3.75 3.75 0 0 1-5.06 2 3.76 3.76 0 0 0 2.66 1 3.65 3.65 0 0 0 3.37-2.31c.45-1.14 1.75-4.11 3-7H10s-1.74 3.84-2.71 6.31z" fill="#d0d9ea"/>
  <path d="M14.46 0l.85.07zM11.32.11A16.07 16.07 0 0 1 13.19 0a16.07 16.07 0 0 0-1.87.11zM21.83 4.3a23 23 0 0 1 3.59.36c-.79-.93-3.82-4-10.11-4.55 4.55 1.09 6.23 3.68 6.52 4.19zM7.29 13.41C8.26 10.94 10 7.08 10 7.08s3.08-2.33 9.41-2.73c-2.2-3-5.83-4-8.08-4.24C3.61.94 0 6.8 0 11.48a4.08 4.08 0 0 0 1.79 3.65 3.77 3.77 0 0 0 5.5-1.72zM.77 10.57A2.86 2.86 0 0 1 3.7 7.85a2.85 2.85 0 0 1 2.18 3.35A2.84 2.84 0 0 1 3 13.92a2.84 2.84 0 0 1-2.23-3.35z" fill="#ebeff7"/>
  <path d="M19.39 4.35c.46 0 .93 0 1.42-.06h1c-.29-.51-2-3.1-6.52-4.19l-.83-.1h-1.27a16.07 16.07 0 0 0-1.87.11c2.24.27 5.87 1.19 8.07 4.24z" fill="#fc964b"/>
  <path d="M20.81 4.29c-.49 0-1 0-1.42.06-6.33.4-9.39 2.73-9.39 2.73h21.43a13.46 13.46 0 0 0-6-2.42 23 23 0 0 0-3.59-.36zM3 13.92a2.84 2.84 0 0 0 2.88-2.72A2.85 2.85 0 0 0 3.7 7.85a2.86 2.86 0 0 0-2.93 2.72A2.84 2.84 0 0 0 3 13.92zm-1.76-3.24a1.9 1.9 0 0 1 2-1.81 1.9 1.9 0 0 1 1.4 2.23 1.89 1.89 0 0 1-1.95 1.8 1.89 1.89 0 0 1-1.45-2.22z" fill="#647096"/>
  <path d="M2.69 12.9a1.89 1.89 0 0 0 1.95-1.8 1.9 1.9 0 0 0-1.45-2.23 1.9 1.9 0 0 0-1.95 1.81 1.89 1.89 0 0 0 1.45 2.22z" fill="#fc964b"/>
</svg>

    </div>
</div>
</div>
       </CardItem>
       <CardItem translateZ="70" className="px-2 mt-5 w-full">
    <h3 className="uppercase text-white text-opacity-55 font-semibold text-xs">About me</h3>
    <div className="aboutme mt-2 text-white text-opacity-90 w-full text-center md:text-lg text-xs" style={{ maxWidth: "100%", overflowX: "auto" }}>
        <p style={{ whiteSpace: "pre-wrap" }}>殪幢緻Iii爰曷樔黎㌢&lsquo;　 　ⅷi爰曷樔黎i爰曷<br></br>
        艇艀裲f睚鳫巓襴骸     &nbsp;&nbsp;&nbsp;𓆩&nbsp;&nbsp;𓆪   贒憊幢緻Iii爰曷幢<br></br>
        殪幢緻I翰儂樔黎夢       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ｨ傾I翰儂樔黎I翰儂<br></br>
        盥皋袍i耘蚌紕偸&            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;雫寬I袍i耘蚌紕袍i耘<br></br>
        悗f篝嚠篩i縒縡ii                &nbsp;&nbsp;&nbsp;&nbsp;Ⅷ辨f輯駲f迯輯駲f<br></br>
        輯駲f迯瓲i軌帶                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;守I厖輯駲f迯孩悗</p>
    </div>
</CardItem>


<CardItem translateZ="80" className="px-2 mt-8">
    <h3 className="uppercase text-white text-opacity-55 font-semibold text-xs">Connections</h3>
    <div className="gap-2 md:flex flex-wrap w-full">
        <a href="https://open.spotify.com/artist/6qW2MCeqjNlMwiLl0JPbuZ?si=c1177ffa143a4556" target="_blank" className="w-[48%]">
            <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2 w-[full]">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-spotify" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288"/>
                </svg>
                Spotify
                <div className="arrow ml-auto opacity-60 justify-end flex items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </div>
            </div>
        </a>

        <a href="https://discordapp.com/users/208168562286788610" target="_blank" className="w-[48%]">
            <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2 w-50%">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-discord" viewBox="0 0 16 16">
                    <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                </svg>
                Discord
                <div className="arrow ml-[4rem] sm:ml-auto opacity-60 justify-end flex items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </div>
            </div>
        </a>

        <a href="https://www.instagram.com/oppxum/" target="_blank" className="w-[48%]">
            <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2 w-50%">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
                Instagram
                <div className="arrow ml-auto opacity-60 justify-end flex items-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                    </svg>
                </div>
            </div>
        </a>

    </div>
</CardItem>

      </CardBody>
    </CardContainer>
  );
}

export default FramedCard
