import { FC } from "react";
import { Settings } from "..";
import { User } from "@/entities";
import { useInput } from "@/features/hooks/customHook";
import Image from "next/image";
import { userStore } from "@/features/store/user";

interface Props {
  settingsChat: Settings;
  usersInChat: User[];
  user: User;
}

export const Panel: FC<Props> = ({ settingsChat, user, usersInChat }) => {
  const [value, setValue, setInputValue] = useInput("");


  return (
    <div className="ml-2 border-l border-white w-80 bg-msu-green h-full text-xl text-969DA3 flex flex-col">
      <div className="border-b border-white px-3.5 py-2.5">
        <div className="flex items-center w-full mb-5">
          <div className="flex bg-fff010 items-center w-full rounded border-b-2 border-white">
            <input
              placeholder="Search"
              type="text"
              value={value}
              onChange={setInputValue}
              className=" w-full px-2 py-2.5 text-base text-white"
            />
            <div className="p-3">
              <div className="relative w-6 aspect-square">
                <Image src={"/assets/icon/Search-input.svg"} fill alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex gap-5 items-center">
            <div className="relative w-6 aspect-square">
              <Image src={"/assets/icon/Friends-icon.svg"} fill alt="" />
            </div>
            <p>Пригласить друзей</p>
          </div>
            <div className="flex gap-5 items-center">
                <div className="relative w-6 aspect-square">
                    <Image src={"/assets/icon/Settings-icon.svg"} fill alt=""/>
                </div>
                <p>Настройки</p>
            </div>
        </div>
      </div>
        <div className="flex flex-col justify-between h-full">
            <div className="px-3.5 pt-4.5 ">
                <button className="flex w-full justify-between items-center">
                    <p className="block">Личные сообщения</p>
                    <p className="block">+</p>
                </button>
                <div>
                    {usersInChat.map((e) => (
                        <div className="flex gap-5" key={e.id}>
                            <div className="relative w-9 aspect-square">
                                <Image src={user.srcImageProfile} fill alt=""/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="bg-254C4C flex flex-col gap-7 px-3.5 pb-2 pt-3 border-t border-white">
                <div className="flex items-center justify-between gap-9">
                    <div>
                        <p>Голосовая связь</p>
                    </div>
                    <div className="relative w-9 aspect-square">
                        <Image src={"assets/icon/Phone-red-icon.svg"} fill alt=""/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <div className="relative w-9 aspect-square">
                            <Image src={user.srcImageProfile} fill alt=""/>
                        </div>
                        <div className="flex gap-1 flex-col">
                            <p>{user.name}</p>
                            <p className="text-sm">В сети</p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="relative w-7 aspect-square">
                            <Image src={"/assets/icon/Microphone-panel.svg"} fill alt=""/>
                        </div>
                        <div className="relative w-6 aspect-square">
                            <Image src={"/assets/icon/Headphones-icon.svg"} fill alt=""/>
                        </div>
                        <div className="relative w-6 aspect-square">
                            <Image src={"/assets/icon/Settings-icon.svg"} fill alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
