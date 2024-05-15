import Image from "next/image";

export default function Userlogo() {
  return (
    <div className=" size-full relative">
      <Image
        fill
        src={"/assets/testIcons/logo.jpg"}
        alt="userlogo"
        className="rounded-full"
      />
    </div>
  );
}
