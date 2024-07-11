"use client";
import { useInput } from "@/features/hooks/customHook";
import { FC, Suspense, useEffect, useRef } from "react";
import { Header } from "./Header";
import { MenuContainer } from "./MenuContainer";
import { Loader } from "./Loader";
import Stomp from "stompjs";
import SockJS from "sockjs-client";

export const NavBar: FC = () => {
  const [value, setValue, setInputValue] = useInput("");
  const websocket = useRef<Stomp.Client>();

  useEffect(() => {
    const socket = new SockJS(`http://localhost:8082/gs-guide-websocket`);
    websocket.current = Stomp.over(socket);

    websocket.current!.connect({}, () => {
      console.log("open");
    });
  }, []);

  return (
    <div className="w-1/3 h-full bg-msu-green ">
      <Header setValue={setValue} value={value} setInputValue={setInputValue} />
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
  );
};
