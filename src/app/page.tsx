"use client";
import { userStore } from "@/features/store/user";
import { NavBar } from "@/widgets/NavBar";
import { disconnect } from "process";
import React, { FC, useEffect, useState } from "react";
import SockJS from "sockjs-client";
import StompJs, { Client } from "stompjs";

type PropType = {};

const Main: FC = () => {
  // const [stompClient, setStompClient] = useState<Client>();
  // const {user} = userStore();

  // useEffect(() => {
  //   const socket = new SockJS("http://localhost:8080/gs-guide-websocket");
  //   const client = StompJs.over(socket);
  //   client.connect({}, (frame) => {
  //     client.subscribe("/topic/public", (message) => {
  //       const receiveMessage = message.body;
  //       console.log(receiveMessage);
  //     });
  //   });

  //   setStompClient(client);
  // }, []);

  return (
    <main className="h-full w-full flex">
      <NavBar />
    </main>
  );
};

export default Main;
