"use client";
import { initUser } from "@/features/api/service";
import { userStore } from "@/features/store/user";
import { Chat } from "@/widgets/Chat";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { FC, useEffect } from "react";

const Main: FC = () => {
  // const [stompClient, setStompClient] = useState<Client>();
  const { userAuth, init } = userStore();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (userAuth.id === 0) {
        try {
          const user = await initUser();
          console.log("user:", user);
          init(user);
        } catch (error) {
          if (error instanceof Error)
            error.message === "403" && router.push("/login");
        }
      }
    })();
  }, []);

  return (
    <div className="h-full w-full bg-msu-green">
      <Chat />
    </div>
  );
};

export default Main;
