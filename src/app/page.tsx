"use client";
import { disconnect } from "process";
import React, { FC, useEffect, useState } from "react";
import SockJS from "sockjs-client";
import StompJs, { Client } from "stompjs";

type PropType = {};

const Main: FC = () => {
  const [stompClient, setStompClient] = useState<Client>();
  useEffect(() => {
    const socket = new SockJS("http://localhost:8080/gs-guide-websocket");
    const client = StompJs.over(socket);
    client.connect({}, (frame) => {
      client.subscribe("/topic/public", (message) => {
        const receiveMessage = message.body;
        console.log(receiveMessage);
      });
    });

    setStompClient(client);
  }, []);
  const sendMessage = () => {
    stompClient?.send(
      "/app/submit",
      {},
      JSON.stringify({
        messageText: "jdj",
        img: "jfj",
        author: "jjf",
        pathMessage: "jfj",
      }),
    );
  };
  return (
    <main className="h-full w-full">
      <button onClick={sendMessage}>S</button>
    </main>
  );
};

export default Main;
