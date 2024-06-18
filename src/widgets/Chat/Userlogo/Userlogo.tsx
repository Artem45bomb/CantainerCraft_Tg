import Image from "next/image";

interface IUserLogo {
  srcImage: string;
}

export default function Userlogo({ srcImage }: IUserLogo) {
  return (
    <div className=" size-full relative">
      <Image fill src={srcImage} alt="userlogo" className="rounded-full" />
    </div>
  );
}
