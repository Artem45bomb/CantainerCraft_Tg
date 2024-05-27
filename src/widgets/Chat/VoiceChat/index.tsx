"use client";

import { useEffect, useRef, useState } from "react";
import Userlogo from "../Userlogo/Userlogo";
import { ObjectFields } from "@/features/api/util";
import Image from "next/image";

function VoiceChat() {
  const [time, setTime] = useState(0);
  const [settings, setSettings] = useState({
    Voice: false,
    Screen: false,
    Micro: false,
    Telephone: false,
  });
  type SettingsT = typeof settings;
  const videoUserRef = useRef<HTMLVideoElement>(null);
  const videoIncomingRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const videoStart = (isActiveAudio: boolean) => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: isActiveAudio })
      .then((stream) => {
        if (videoUserRef.current) {
          videoUserRef.current.srcObject = stream;
          videoUserRef.current.play();
        }
        if (videoIncomingRef.current) {
          videoIncomingRef.current.srcObject = stream;
          videoIncomingRef.current.play();
        }
      })
      .catch((err) => {
        console.error(`An error occurred: ${err}`);
      });
  };

  const videoStop = () => {
    if (videoUserRef.current) {
      videoUserRef.current.pause();
      videoUserRef.current.srcObject = null;
    }
    if (videoIncomingRef.current) {
      videoIncomingRef.current.pause();
      videoIncomingRef.current.srcObject = null;
    }
  };

  const formattedTime = new Date(time * 1000).toISOString().substr(14, 5);

  const handleButtonPress = (buttonName: ObjectFields<SettingsT>) => {
    setSettings((prevState) => ({
      ...prevState,
      [buttonName]: !prevState[buttonName],
    }));
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-msu-green">
      <div className="h-auto mt-4 flex">
        <div className="w-2/3 ml-6 text-verdigris">Никита Ефремов</div>
        <div className="flex w-1/3 justify-end space-x-4 mr-6">
          <button className="relative w-6 h-6 mx-2">
            <Image
              src="/assets/icon/Voice-icon.svg"
              alt="off/on voice"
              layout="fill"
            />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        {settings.Voice == false ? (
          <div>
            <div className="border rounded-full m-6 border-green-300 inline-block w-32 h-32">
              <Userlogo />
            </div>
            <div className="border rounded-full m-6 border-green-300 inline-block w-32 h-32">
              <Userlogo />
            </div>
          </div>
        ) : (
          <div className="w-full h-2/4 mb-6">
            <div className="flex w-full gap-5 h-full justify-center">
              <video
                className="h-full rounded-xl border-2 border-dark-50"
                ref={videoUserRef}
              ></video>
              <video
                className="h-full rounded-xl border-2 border-dark-50"
                ref={videoIncomingRef}
              ></video>
            </div>
          </div>
        )}
        <div className="text-center text-gray-500 text-lg">{formattedTime}</div>
      </div>
      <div className="w-full h-18 my-6 flex items-center justify-center space-x-8">
        <button
          className={`transition-all duration-150 w-14 h-14 flex items-center justify-center rounded-full ${settings.Voice ? "bg-police-blue" : "bg-desaturated-cyan"} `}
          onClick={() => {
            handleButtonPress("Voice");
            if (!settings.Voice) videoStart(true);
            else videoStop();
          }}
        >
          <div className="relative w-8 h-8 mx-auto">
            <Image
              layout="fill"
              src="/assets/icon/Voice-Call-icon.svg"
              alt="no video call"
            />
          </div>
        </button>
        <button
          className={`transition-all duration-150 w-14 h-14 flex items-center justify-center rounded-full ${settings.Screen ? "bg-police-blue" : "bg-desaturated-cyan"} `}
          onClick={() => handleButtonPress("Screen")}
        >
          <div className="relative w-8 h-8 mx-auto">
            <Image
              src="/assets/icon/Screen-icon.svg"
              alt="screen"
              layout="fill"
            />
          </div>
        </button>
        <button
          className={`transition-all duration-150 w-14 h-14 flex items-center justify-center rounded-full ${settings.Micro ? "bg-police-blue" : "bg-desaturated-cyan"} `}
          onClick={() => {
            handleButtonPress("Micro");
            videoStart(settings.Micro);
          }}
        >
          <div className="relative w-6 h-6 mx-auto">
            <Image
              src="/assets/icon/Micro-icon.svg"
              alt="Off/on micro"
              layout="fill"
            />
          </div>
        </button>
        <button
          className={`relative transition-all duration-150 w-14 h-14 flex items-center justify-center rounded-full ${settings.Telephone ? "bg-police-blue" : "bg-red-500"} `}
          onClick={() => handleButtonPress("Telephone")}
        >
          <div className="relative w-10 h-10">
            <Image
              layout="fill"
              src="/assets/icon/Telephone-icon.svg"
              alt="end the call"
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default VoiceChat;
