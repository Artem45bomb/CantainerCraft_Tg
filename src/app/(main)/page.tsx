"use client";
import { Chat } from "@/widgets/Chat";
import { FC } from "react";

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
    <div className="h-full w-full bg-msu-green">
      <Chat />
    </div>
  );
};

export default Main;
