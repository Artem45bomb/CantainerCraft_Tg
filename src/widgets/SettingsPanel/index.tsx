import Image from "next/image";

export default function () {
  return (
    <>
      <header className="w-104 bg-police-blue">
        <div className=" m-8">
          <div className=" flex justify-between pt-4">
            <div>
              <p className=" text-white text-2xl font-semibold">Настройки</p>
            </div>
            <div>
              <button>
                <Image
                  src={"/assets/testIcons/weather.svg"}
                  width={18}
                  height={18}
                  alt="3 dots"
                />
              </button>
              <button>X</button>
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
    </>
  );
}
