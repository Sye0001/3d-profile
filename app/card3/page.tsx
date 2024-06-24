"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

function RiskyCard () {
  return (
    <CardContainer className="inter-var md:mx-0 mx-4 mt-0 md:-[2rem] lg:mt-[8rem]">
      <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-gray-500/[0.1] bg-black bg-opacity-85  dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="60" className="w-full rounded-md mt-4">
            <div className="banner">
                <Image
                src={'https://cdn.discordapp.com/attachments/1131219628106973234/1242869420607537214/639ff0631f9bb76acea130f444f7e4cf.png?ex=66501099&is=664ebf19&hm=3df1b5e655852a5ee38f53e87c1605008e7429ebc12d5eaba1ec4c2dd0f29c81&'}
                width={960}
                height={240}
                alt="Banner"
                className="object-cover rounded-lg  w-full h-[168px]"
                />
            </div>
            <div className="avatar">
          <Image
            src="https://cdn.discordapp.com/attachments/1131219628106973234/1242869389804699680/a518cf028885fb702ff7f6eb797ff318.png?ex=66501091&is=664ebf11&hm=b41dfecb02c7e6c0faaac162e5df79e720171cf1b53b6af16623043365669a9b&"
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
        <a className="font-semibold text-2xl">Risky</a>
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
    <div className="aboutme mt-2 text-white text-opacity-90 w-full  md:text-lg text-xs pl-1" style={{ maxWidth: "100%", overflowX: "auto" }}>
        <p style={{ whiteSpace: "pre-wrap" }}>new account @numilya
</p>
    </div>
</CardItem>


<CardItem translateZ="80" className="px-2 mt-4">
    <h3 className="uppercase text-white text-opacity-55 font-semibold text-xs">Connections</h3>
    <div className="gap-2 md:flex flex-wrap ">
    <a href="https://github.com/coderman7123" target="blank">
        <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
            </svg>
            Github
            <div className="arrow ml-[4rem] sm:ml-14 opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
                </svg>
            </div>
        </div>
    </a>

     
    <a href="https://steamcommunity.com/id/img0ingtokillmyself/" target="blank">
        <div className="connection mt-2 bg-neutral-950 bg-opacity-70 rounded-md py-2.5 px-4 flex items-center gap-2 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-steam" viewBox="0 0 16 16">
  <path d="M.329 10.333A8.01 8.01 0 0 0 7.99 16C12.414 16 16 12.418 16 8s-3.586-8-8.009-8A8.006 8.006 0 0 0 0 7.468l.003.006 4.304 1.769A2.2 2.2 0 0 1 5.62 8.88l1.96-2.844-.001-.04a3.046 3.046 0 0 1 3.042-3.043 3.046 3.046 0 0 1 3.042 3.043 3.047 3.047 0 0 1-3.111 3.044l-2.804 2a2.223 2.223 0 0 1-3.075 2.11 2.22 2.22 0 0 1-1.312-1.568L.33 10.333Z"/>
  <path d="M4.868 12.683a1.715 1.715 0 0 0 1.318-3.165 1.7 1.7 0 0 0-1.263-.02l1.023.424a1.261 1.261 0 1 1-.97 2.33l-.99-.41a1.7 1.7 0 0 0 .882.84Zm3.726-6.687a2.03 2.03 0 0 0 2.027 2.029 2.03 2.03 0 0 0 2.027-2.029 2.03 2.03 0 0 0-2.027-2.027 2.03 2.03 0 0 0-2.027 2.027m2.03-1.527a1.524 1.524 0 1 1-.002 3.048 1.524 1.524 0 0 1 .002-3.048"/>
</svg>
            Steam
            <div className="arrow ml-[4rem] sm:ml-14 opacity-60">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"/>
                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"/>
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

export default RiskyCard
