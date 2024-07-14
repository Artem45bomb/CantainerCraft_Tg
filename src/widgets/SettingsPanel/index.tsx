import Image from "next/image";
import { Slider } from "@material-tailwind/react";

export default function () {
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
      <div className=" h-3 bg-msu-green w-104"></div>
      <main className="w-104 bg-1b5155 ">
        <div className=" mx-8">
          <ul>
            <li>
              <button className="flex py-3">
                <Image
                  src={"/assets/testIcons/account.svg"}
                  width={18}
                  height={18}
                  alt="account"
                />
                <p className=" ml-3 text-white text-base font-semibold ">
                  Мой аккаунт
                </p>
              </button>
            </li>
            <li>
              <button className="flex py-3">
                <Image
                  src={"/assets/testIcons/lock.svg"}
                  width={18}
                  height={18}
                  alt="account"
                />
                <p className=" ml-3 text-white text-base font-semibold ">
                  Конфиденциальность
                </p>
              </button>
            </li>
            <li>
              <button className="flex py-3">
                <Image
                  src={"/assets/testIcons/ring.svg"}
                  width={18}
                  height={18}
                  alt="account"
                />
                <p className=" ml-3 text-white text-base font-semibold ">
                  Уведомления и звуки
                </p>
              </button>
            </li>
            <li>
              <button className="flex py-3">
                <Image
                  src={"/assets/testIcons/message.svg"}
                  width={18}
                  height={18}
                  alt="account"
                />
                <p className=" ml-3 text-white text-base font-semibold ">
                  Настройка чатов
                </p>
              </button>
            </li>
            <li>
              <button className="flex py-3">
                <Image
                  src={"/assets/testIcons/folder.svg"}
                  width={18}
                  height={18}
                  alt="account"
                />
                <p className=" ml-3 text-white text-base font-semibold ">
                  Папки с чатами
                </p>
              </button>
            </li>
            <li>
              <button className="flex py-3">
                <Image
                  src={"/assets/testIcons/gears.svg"}
                  width={18}
                  height={18}
                  alt="account"
                />
                <p className=" ml-3 text-white text-base font-semibold ">
                  Продвинутые настройки
                </p>
              </button>
            </li>
            <li>
              <button className="flex py-3">
                <Image
                  src={"/assets/testIcons/volume.svg"}
                  width={18}
                  height={18}
                  alt="account"
                />
                <p className=" ml-3 text-white text-base font-semibold ">
                  Звуки и камера
                </p>
              </button>
            </li>
            <li>
              <button className="flex py-3">
                <Image
                  src={"/assets/testIcons/battery.svg"}
                  width={18}
                  height={18}
                  alt="account"
                />
                <p className=" ml-3 text-white text-base font-semibold ">
                  Заряд батареи и анимация
                </p>
              </button>
            </li>
            <li>
              <button className="flex justify-between py-3 w-90">
                <div className="flex ">
                  <Image
                    src={"/assets/testIcons/language.svg"}
                    width={18}
                    height={18}
                    alt="account"
                  />
                  <p className=" ml-3 text-white text-base font-semibold ">
                    Язык
                  </p>
                </div>
                <p className=" text-base text-#9FDAD6 font-semibold opacity-55">
                  Русский
                </p>
              </button>
            </li>
            <li>
              <button className="flex py-3">
                <Image
                  src={"/assets/testIcons/weather.svg"}
                  width={18}
                  height={18}
                  alt="account"
                />
                <p className=" ml-3 text-white text-base font-semibold ">
                  Погода
                </p>
              </button>
            </li>
          </ul>
        </div>
      </main>
      <div className=" h-3 bg-msu-green w-104"></div>
      <div className="w-104 bg-1b5155 ">
        <div className="mx-8">
          <div className="flex justify-between py-3 w-90">
            <div className="flex ">
              <Image
                src={"/assets/testIcons/language.svg"}
                width={18}
                height={18}
                alt="account"
              />
              <p className=" ml-3 text-white text-base font-semibold ">
                Масштаб по умолчанию
              </p>
            </div>
            <input type="checkbox" />
          </div>
          <input
            type="range"
            id="volume"
            min="0"
            max="11"
            value="7"
            step="1"
            className=" w-86"
          />
          {/* <Slider defaultValue={100}/> */}
        </div>
      </div>
      <div></div>
      <div className=" h-3 bg-msu-green w-104"></div>
    </>
  );
}
