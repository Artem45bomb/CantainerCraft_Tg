"use client";

//
// import VoiceChat from "@/widgets/Chat/VoiceChat";
// import {useState} from "react";

import { useQuery } from "@tanstack/react-query";

export default function TestPage() {
  //const [value,setValue] =  useState<boolean>(true)
  const { data, isPending, error } = useQuery({
    queryKey: ["chats"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json(),
      ),
  });

  if (isPending) {
    return <div>Loader</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div className="w-full h-full bg-black">
      {/*<VoiceChat activeVoiceChat={value} setActiveVoiceChat={setValue}/>*/}
      {data.id}
    </div>
  );
}
