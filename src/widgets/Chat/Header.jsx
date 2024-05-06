import Image from "next/image";
import Search from "./Search";
import Shape from "./Shape";
import More from "./More";

export default function Header() {
  return (
    <header className=" border-b border-fff005">
      <div className="flex justify-between items-center px-11 h-5,19">
        <a href="#" className="flex">
          <div className=" mr-2.5">
            <Image
              className=" rounded-full"
              width="50"
              height="50"
              src="/assets/testIcons/logo.jpg"
              alt="logo of chat"
            />
          </div>
          <div className=" ">
            <div className="text-white font-semibold text-base text-white pb-0.5">
              Design Review Chat
            </div>
            <div className=" text-xs font-normal text-c88">
              5 members, 3 online
            </div>
          </div>
        </a>
        <nav className="flex space-x-2.5">
          <Search />
          <Shape />
          <More />
        </nav>
      </div>
    </header>
  );
}
