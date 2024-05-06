import Image from "next/image";

export default function Userlogo() {
  return (
    <div>
      <Image
        width={35}
        height={35}
        src={"/assets/testIcons/logo.jpg"}
        alt="userlogo"
        className="rounded-full"
      />
    </div>
  );
}
