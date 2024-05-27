"use client";
import { Chat } from "@/widgets/Chat";
import { NavBar } from "@/widgets/NavBar";
import {FC} from "react";



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
    <main className="h-full w-full flex bg-msu-green">
      <NavBar />
      <Chat />
    </main>
  );
};

export default Main;
