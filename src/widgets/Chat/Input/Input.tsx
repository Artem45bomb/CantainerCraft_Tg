import Image from "next/image";

export default function Input() {
  return (
    <footer>
      <div className="px-11">
        <div className="border border-desaturated-cyan w-full rounded-lg h-13 mb-3.5 bg-30595F flex justify-between items-center px-4">
          <div className="flex">
            <div className=" mr-5">
              <Image
                width={20}
                height={20}
                src={"/assets/testicons/files.svg"}
                alt="files"
              />
              {/* <img src="/assets/testicons/files.svg" alt="files" /> */}
            </div>
            <input
              type="text"
              placeholder="Write a message..."
              className="text-base text-white"
            />
            {/* <div className=" text-base text-8A8A8A">Write a message...</div> */}
          </div>
          <div className="flex">
            <div>
              <Image
                width={20}
                height={20}
                src={"/assets/testicons/emoji.svg"}
                alt="emoji"
              />
            </div>
            <div className=" ml-7">
              <Image
                width={14}
                height={20}
                src={"/assets/testicons/audio.svg"}
                alt="audio"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
