import { Loader } from "@/widgets/NavBar/Loader";
import axios from "axios";
import { useEffect, useRef, useState } from "react";

interface IMessageVideo {
  srcContent: string;
  size: number;
}

export async function MessageVideo({ srcContent, size }: IMessageVideo) {
  const [isLoader, setIsLoader] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  console.log(srcContent, size);

  useEffect(() => {
    const loader = async () => {
      setIsLoader(false);
      const { data } = await axios.get(srcContent);

      if (videoRef.current) {
        videoRef.current.srcObject = data;
      }

      setIsLoader(true);
    };
    loader();
  }, []);

  return (
    <div className="w-56 aspect-square relative">
      {isLoader && (
        <div
          style={{ translate: "-50%,-50%" }}
          className="absolute top-1/2 left-1/2"
        >
          <Loader />
        </div>
      )}
      <video className="w-full aspect-square rounded-full" ref={videoRef} />
    </div>
  );
}
