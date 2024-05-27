import Image from "next/image";

export default function Page() {
  return (
    <div className=" bg-white">
      <Image
        fill={true}
        alt="image"
        src={"/assets/testIcons/logo.jpg"}
        className=" object-cover"
      />
    </div>
  );
}
