import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface Item {
  id: number;
  isLanguage: boolean;
  icon: string;
  text: string;
}
function Item({ id, isLanguage, icon, text }: Item) {
  if (isLanguage) {
    return (
      <li key={id}>
        <button className="flex justify-between py-3 w-90">
          <div className="flex ">
            <Image src={icon} width={18} height={18} alt="account" />
            <p className=" ml-3 text-white text-base font-semibold ">{text}</p>
          </div>
          <p className=" text-base text-9FDAD6 font-semibold opacity-55">
            Русский
          </p>
        </button>
      </li>
    );
  } else {
    return (
      <li key={id}>
        <button className="flex py-3 w-90">
          <Image src={icon} width={18} height={18} alt="account" />
          <p className=" ml-3 text-white text-base font-semibold ">{text}</p>
        </button>
      </li>
    );
  }
}

const mainItems: Item[] = [
  {
    id: 0,
    isLanguage: false,
    icon: "/assets/testIcons/account.svg",
    text: "Мой аккаунт",
  },
  {
    id: 1,
    isLanguage: false,
    icon: "/assets/testIcons/lock.svg",
    text: "Конфиденциальность",
  },
  {
    id: 2,
    isLanguage: false,
    icon: "/assets/testIcons/ring.svg",
    text: "Уведомления и звуки",
  },
  {
    id: 3,
    isLanguage: false,
    icon: "/assets/testIcons/message.svg",
    text: "Настройка чатов",
  },
  {
    id: 4,
    isLanguage: false,
    icon: "/assets/testIcons/folder.svg",
    text: "Папки с чатами",
  },
  {
    id: 5,
    isLanguage: false,
    icon: "/assets/testIcons/gears.svg",
    text: "Продвинутые настройки",
  },
  {
    id: 6,
    isLanguage: false,
    icon: "/assets/testIcons/volume.svg",
    text: "Звуки и камера",
  },
  {
    id: 7,
    isLanguage: false,
    icon: "/assets/testIcons/battery.svg",
    text: "Заряд батареи и анимация",
  },
  {
    id: 8,
    isLanguage: true,
    icon: "/assets/testIcons/language.svg",
    text: "Язык",
  },
  {
    id: 9,
    isLanguage: false,
    icon: "/assets/testIcons/weather.svg",
    text: "Погода",
  },
];

export default function SettingsPage() {
  const [volumeOfRange, setVolumeOfRange] = useState(100);
  const [isCheck, setIsCheck] = useState(true);

  const a = useRef<HTMLInputElement>(null);

  const listMainItems = mainItems.map((item) => (
    <Item
      id={item.id}
      isLanguage={item.isLanguage}
      text={item.text}
      icon={item.icon}
    />
  ));

  function handleVolumeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setVolumeOfRange(parseInt(value));
    if (value != "100") setIsCheck(false);
    else setIsCheck(true);
  }

  function handleChecked(event: React.ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    setIsCheck(checked);
    if (checked) {
      setVolumeOfRange(100);
    }
  }

  useEffect(() => {
    if (a.current) {
      a.current.checked = isCheck;
    }
  });

  useEffect(() => {
    const volumeInput = document.getElementById("volume") as HTMLInputElement;
    if (volumeInput) {
      const value = ((volumeInput.valueAsNumber - 50) / (300 - 50)) * 100;
      volumeInput.style.setProperty("--value", `${value}%`);
    }
  });

  return (
    <>
      <header className="w-104 bg-1b5155 ">
        <div className=" mx-8">
          <div className=" flex justify-between pt-4">
            <div>
              <p className=" text-white text-2xl font-semibold">Настройки</p>
            </div>
            <div>
              <button className=" mr-6">
                <Image
                  src={"/assets/testIcons/threeDots.png"}
                  width={18}
                  height={20}
                  alt="3 dots"
                />
              </button>
              <button>
                <Image
                  src={"/assets/testIcons/cross.png"}
                  width={20}
                  height={23}
                  alt="cross"
                />
              </button>
            </div>
          </div>
          <div className="flex mt-5 pb-4">
            <div className=" mr-6">
              <Image
                src={"/assets/testIcons/logo.jpg"}
                width={85}
                height={85}
                alt="logo"
                className=" rounded-full"
              />
            </div>
            <div>
              <p className=" text-white text-xl font-semibold">Nikita</p>
              <p className=" text-white text-base font-semibold">
                +375 12 345 6677
              </p>
              <p className=" text-A1B0B6 text-lg font-semibold">@geralttop</p>
            </div>
          </div>
        </div>
      </header>
      <div className=" overflow-scroll h-vh90 w-104">
        <div className=" h-3 bg-msu-green w-104"></div>
        <div className="w-104 bg-1b5155 ">
          <div className=" mx-8">
            <ul>{listMainItems}</ul>
          </div>
        </div>
        <div className=" h-3 bg-msu-green w-104"></div>
        <div className="w-104 bg-1b5155 ">
          <div className="mx-8">
            <div className="flex justify-between py-3 w-90">
              <div className="flex ">
                <Image
                  src={"/assets/testIcons/eye.svg"}
                  width={18}
                  height={18}
                  alt="account"
                />
                <p className=" ml-3 text-white text-base font-semibold ">
                  Масштаб по умолчанию
                </p>
              </div>
              <label
                className=" relative inline-block w-10 h-4"
                onClick={() => {}}
              >
                <input
                  type="checkbox"
                  className=" hidden"
                  id="checkbox"
                  onChange={handleChecked}
                  ref={a}
                />
                <span className=" absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-msu-green slider"></span>
                {/* slider round */}
              </label>
            </div>
            <div className="flex">
              <div className="pb-3 mr-3">
                <input
                  type="range"
                  id="volume"
                  min="50"
                  max="300"
                  value={volumeOfRange}
                  step="5"
                  onChange={handleVolumeChange}
                  className="appearance-none w-86 h-1 rounded-full outline-none bg-9FDAD6"
                />
              </div>
              <span className="text-9FDAD6 select-none">{volumeOfRange}%</span>
            </div>
          </div>
        </div>
        <div className=" h-3 bg-msu-green w-104"></div>
        <div className=" w-104  bg-1b5155">
          <div className="mx-8">
            <ul>
              <Item
                isLanguage={false}
                id={10}
                text="Emerald Premium"
                icon="/assets/testIcons/bunny.svg"
              />
              <Item
                isLanguage={false}
                id={10}
                text="Подарить Premium"
                icon="/assets/testIcons/gift.svg"
              />
            </ul>
          </div>
        </div>
        <div className=" h-3 bg-msu-green w-104"></div>
        <div className=" w-104  bg-1b5155">
          <div className="mx-8">
            <ul>
              <Item
                isLanguage={false}
                id={10}
                text="Вопросы о Emerald"
                icon="/assets/testIcons/question.svg"
              />
              <Item
                isLanguage={false}
                id={10}
                text="Возможности Emerald"
                icon="/assets/testIcons/idea.svg"
              />
              <Item
                isLanguage={false}
                id={10}
                text="Задать вопрос"
                icon="/assets/testIcons/chats.svg"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
