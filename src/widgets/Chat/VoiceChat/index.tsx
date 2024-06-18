"use client";

import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import Userlogo from "../Userlogo/Userlogo";
import { ObjectFields } from "@/features/api/util";
import Image from "next/image";
import {userStore} from "@/features/store/user";

export type Settings = {
  Voice: boolean;
  Screen: boolean;
  Micro: boolean;
  Telephone: boolean;
};

interface IVoiceChat {
  userIncomingName?: string;
  setActiveVoiceChat: Dispatch<SetStateAction<boolean>>;
}

function VoiceChat({ userIncomingName, setActiveVoiceChat }: IVoiceChat) {
  const [time, setTime] = useState(0);
  const {user} = userStore();
  const [settings, setSettings] = useState<Settings>({
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
    <div className="flex flex-col h-full w-full bg-1D4846 relative">
      <div className="absolute top-6 left-6 flex justify-center items-center gap-1.5">
          <button className="w-6 bg-365C5E aspect-square flex items-center justify-center rounded-full">
            <div className="relative w-5 aspect-square">
              <Image
                  src="/assets/icon/Left-icon.svg"
                  alt=""
                  fill
              />
            </div>
          </button>
        <p className="text-5BC4BB">{user.name}KKK</p>
      </div>
      <div className="h-auto mt-4 flex">
        {userIncomingName && (
            <div className="w-2/3 ml-6 text-verdigris">{userIncomingName}</div>
        )}
        <div className="flex w-full justify-end space-x-4 mr-6">
          <button className="relative w-6 h-6 mx-2">
            <Image
                src="/assets/icon/Chat-icon.svg"
                alt="off/on voice"
                layout="fill"
            />
          </button>
          <button className="relative w-6 h-6 mx-2">
            <Image
                src="/assets/icon/Voice-icon.svg"
                alt="off/on voice"
                layout="fill"
            />
          </button>
          <button className="relative w-6 h-6 mx-2">
            <Image
                src="/assets/icon/Add-user-icon.svg"
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
              <Userlogo srcImage="/assets/testIcons/logo.jpg" />
            </div>
            <div className="border rounded-full m-6 border-green-300 inline-block w-32 h-32">
              <Userlogo srcImage="/assets/testIcons/logo.jpg" />
            </div>
          </div>
        ) : (
          <div className="w-full flex justify-center mb-6">
            <div className="flex gap-5">
              <video
                className=" transition-all duration-0 w-full  rounded-xl border-2 border-dark-50"
                ref={videoUserRef}
              ></video>
              <video
                className=" transition-all duration-0 w-full rounded-xl border-2 border-dark-50"
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
            if (!settings.Voice) videoStart(settings.Voice);
            else videoStop();
          }}
        >
          <div className="relative w-8 h-8 mx-auto">
            <Image
              layout="fill"
              src="/assets/icon/Voice-call-icon.svg"
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
          onClick={() => {
            handleButtonPress("Telephone");
            setActiveVoiceChat((prev) => !prev);
          }}
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
