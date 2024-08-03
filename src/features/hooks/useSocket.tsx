"use client";
import { useEffect, useRef } from "react";
import { Client, IFrame } from "@stomp/stompjs";
import { messageCallbackType, StompHeaders, StompConfig } from "@stomp/stompjs";

type Subscriber = {
  cb: messageCallbackType;
  headers?: StompHeaders;
};

type SocketSubscriber = Record<string, Subscriber>;

interface UseSocketParam {
  onConnect?: (frame?: IFrame) => void;
  onDisconnect?: (frame?: IFrame) => void;
  onStompError?: (frame?: IFrame) => void;
  config?: StompConfig;
  subscribers?: SocketSubscriber;
}

export const useSocket = ({
  onConnect,
  onDisconnect,
  onStompError,
  config,
  subscribers,
}: UseSocketParam) => {
  const socket = useRef<Client>();

  useEffect(() => {
    socket.current = new Client(config ? config : {});

    socket.current.onConnect = (frame) => {
      onConnect && onConnect(frame);
      if (subscribers)
        for (const destination of Object.keys(subscribers)) {
          const subscriber = subscribers[destination];
          socket.current?.subscribe(
            destination,
            subscriber.cb,
            subscriber.headers,
          );
        }
    };

    socket.current.onDisconnect = (frame) => {
      onDisconnect && onDisconnect(frame);
    };

    socket.current.onStompError = (frame) => {
      onStompError && onStompError(frame);
    };

    socket.current.activate();
  }, [config]);

  return socket;
};
