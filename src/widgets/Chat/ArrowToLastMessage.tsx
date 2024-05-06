import Image from "next/image";

export default function ArrowToLastMessage() {
  return (
    <div className="bg-7289D9 p-2.5 inline-block rounded">
      <Image
        width={10}
        height={11}
        src={"/assets/testIcons/arrow.svg"}
        alt="arrow"
      />
    </div>
  );
}
