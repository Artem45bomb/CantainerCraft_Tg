import Image from "next/image";

export default function MessageVideo() {
  return (
    <div>
      <Image
        width={220}
        height={220}
        src={"/assets/testIcons/logo.jpg"}
        alt="circle"
        className=" rounded-full"
      />
    </div>
  );
}
