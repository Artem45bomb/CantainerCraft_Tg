"use client";

import { useEffect, useState } from "react";
import Userlogo from "../Userlogo/Userlogo";
import { ObjectFields } from "@/features/api/util";





function VoiceChat() {
  const [time, setTime] = useState(0);
  const [settings, setSettings] = useState({
    Voice: false,
    Screen: false,
    Micro: false,
    Telephone: false,
  });
  type SettingsT = typeof settings;


  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  


  const formattedTime = new Date(time * 1000).toISOString().substr(14, 5);

  const handleButtonPress = (buttonName:ObjectFields<SettingsT>) => {
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
          <button>
            <img
              src="/assets/icon/Voice-icon.svg"
              alt="off/on voice"
              className="w-6 h-6 mx-2"
            />
          </button>
          <button>
            <img
              src="/assets/icon/Add-user-icon.svg"
              alt="add user"
              className="w-6 h-6 mx-2"
            />
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div>
          <div className="border rounded-full m-6 border-green-300 inline-block w-32 h-32">
            <Userlogo />
          </div>
          <div className="border rounded-full m-6 border-green-300 inline-block w-32 h-32">
            <Userlogo />
          </div>
        </div>
        <div className="text-center text-gray-500 text-lg">{formattedTime}</div>
      </div>
      <div className="w-full h-18 my-6 flex items-center justify-center space-x-8">
        <button
          className={`transition-all duration-150 w-14 h-14 flex items-center justify-center rounded-full ${settings.Voice ? "bg-police-blue" : "bg-desaturated-cyan"} `}
          onClick={() => handleButtonPress("Voice")}
        >
          <img
            src="/assets/icon/Voice-Call-icon.svg"
            alt="no video call"
            className="w-8 h-8 mx-auto"
          />
        </button>
        <button
          className={`transition-all duration-150 w-14 h-14 flex items-center justify-center rounded-full ${settings.Screen ? "bg-police-blue" : "bg-desaturated-cyan"} `}
          onClick={() => handleButtonPress("Screen")}
        >
          <img
            src="/assets/icon/Screen-icon.svg"
            alt="screen"
            className="w-8 h-8 mx-auto"
          />
        </button>
        <button
          className={`transition-all duration-150 w-14 h-14 flex items-center justify-center rounded-full ${settings.Micro ? "bg-police-blue" : "bg-desaturated-cyan"} `}
          onClick={() => handleButtonPress("Micro")}
        >
          <img
            src="/assets/icon/Micro-icon.svg"
            alt="Off/on micro"
            className="w-6 h-6 mx-auto"
          />
        </button>
        <button
          className={`transition-all duration-150 w-14 h-14 flex items-center justify-center rounded-full ${settings.Telephone ? "bg-police-blue" : "bg-red-500"} `}
          onClick={() => handleButtonPress("Telephone")}
        >
          <img
            src="/assets/icon/Telephone-icon.svg"
            alt="end the call"
            className="w-8 h-8 mx-auto"
          />
        </button>
      </div>
    </div>
  );
}

export default VoiceChat;
