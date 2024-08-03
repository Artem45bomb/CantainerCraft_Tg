"use client";
import { useInput } from "@/features/hooks/customHook";
import { FC, Suspense, useEffect, useRef, useState } from "react";
import { Header } from "./Header";
import { MenuContainer } from "./MenuContainer";
import { Loader } from "./Loader";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import SettingsPanel from "@/widgets/SettingsPanel";
import { useSocket } from "@/features/hooks/useSocket";

export const NavBar: FC = () => {
  const [isActive, setActive] = useState<boolean>(false);
  const [value, setInputValue] = useInput("");
  const websocket = useRef<Stomp.Client>();
  const ref = useRef<HTMLDivElement>(null);

  const socket = useSocket({
    config: { brokerURL: "ws://localhost:8082/gs-guide-websocket" },
    subscribers: {
      "/topic": {
        cb: (message) => {},
      },
    },
  });

  return (
    <>
      <div
        style={{ left: isActive ? 0 : -436 }}
        ref={ref}
        className={`transition-all z-30 absolute top-0`}
      >
        <SettingsPanel />
      </div>
      <div className="w-1/3 h-full bg-msu-green relative">
        <Header
          isActivePanel={isActive}
          setActivePanel={setActive}
          onSearchCb={() => {}}
          setInputValue={setInputValue}
        />
        <Suspense
          fallback={
            <div className="w-full flex justify-center">
              <Loader />
            </div>
          }
        >
          <MenuContainer filterName={value} />
        </Suspense>
      </div>
    </>
  );
};
