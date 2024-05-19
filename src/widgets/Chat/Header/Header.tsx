import Search from "../../../shared/ButtonChat/Search";
import Shape from "../../../shared/ButtonChat/Shape";
import More from "../../../shared/ButtonChat/More";
import ChatInfo from "../ChatInfo/ChatInfo";

export default function Header() {
  return (
    <header className=" border-b border-fff005">
      <div className="flex justify-between items-center px-11 h-21">
        <ChatInfo
          logoSrc="/assets/testIcons/logo.jpg"
          chatName="73 TP"
          countOfMembers={10}
          countOfOnlineMembers={4}
        />
        <div className="flex gap-2.5">
          <Search />
          <Shape />
          <More />
        </div>
      </div>
    </header>
  );
}
