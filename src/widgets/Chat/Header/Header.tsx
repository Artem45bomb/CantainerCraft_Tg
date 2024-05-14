import Image from "next/image";
import Search from "../../../shared/ButtonChat/Search";
import Shape from "../../../shared/ButtonChat/Shape";
import More from "../../../shared/ButtonChat/More";
import ChatInfo from "../ChatInfo/ChatInfo";

export default function Header() {
  return (
    <header className=" border-b border-fff005">
      <div className="flex justify-between items-center px-11 h-21">
        <ChatInfo />
        <nav className="flex space-x-2.5">
          <Search />
          <Shape />
          <More />
        </nav>
      </div>
    </header>
  );
}
