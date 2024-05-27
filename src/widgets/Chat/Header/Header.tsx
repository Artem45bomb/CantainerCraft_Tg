import Search from "../../../shared/ButtonChat/Search";
import Shape from "../../../shared/ButtonChat/Shape";
import More from "../../../shared/ButtonChat/More";
import ChatInfo from "../ChatInfo/ChatInfo";

export interface PropsHeader {
  logoSrc: string;
  chatName: string;
  countOfMembers: number;
  countOfOnlineMembers: number;
}

export default function Header({
  logoSrc,
  chatName,
  countOfMembers,
  countOfOnlineMembers,
}: PropsHeader) {
  return (
    <header className=" border-b border-fff005">
      <div className="flex justify-between items-center px-11 h-21">
        <ChatInfo
          logoSrc={logoSrc}
          chatName={chatName}
          countOfMembers={countOfMembers}
          countOfOnlineMembers={countOfOnlineMembers}
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
