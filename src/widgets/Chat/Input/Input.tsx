import Image from "next/image";
import { ChangeEvent, ClipboardEvent, useState } from "react";

export default function Input() {
  const [rows, setRows] = useState<number>(1);

  const updateRows = (value: string) => {
    const lines = value.split("\n").length;

    // Устанавливаем высоту textarea в соответствии с количеством строк
    if (lines <= 10) setRows(lines);
    else setRows(10);
  };

  const handlerChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    updateRows(e.target.value);
  };

  const handlerPaste = (e: ClipboardEvent<HTMLTextAreaElement>) => {
    updateRows(e.currentTarget.value);
  };

  return (
    <footer>
      <div className="px-11">
        <div
          style={{ maxHeight: 1000 }}
          className={`${rows > 1 ? "items-start" : "items-center"} border border-desaturated-cyan w-full rounded-lg min-h-12 mb-3.5 bg-30595F flex justify-between px-4`}
        >
          <div
            className={`${rows > 1 && "pt-3"} flex w-full ${rows > 1 ? "items-start" : "items-center"}`}
          >
            <button className=" mr-5">
              <Image
                width={20}
                height={20}
                src={"/assets/testicons/files.svg"}
                alt="files"
              />
              {/* <img src="/assets/testicons/files.svg" alt="files" /> */}
            </button>
            <div className={`w-full ${rows == 1 && "max-h-6"}`}>
              <textarea
                rows={rows}
                onPaste={handlerPaste}
                onChange={handlerChange}
                style={{
                  resize: "none",
                  backgroundColor: "rgba(255,255,255,0)",
                }}
                placeholder="Write a message..."
                className="text-base scroller-input text-white w-full"
              />
            </div>
          </div>
          <div className={`flex gap-7 ${rows > 1 && "pt-3"}`}>
            <button>
              <Image
                width={20}
                height={20}
                src={"/assets/testicons/emoji.svg"}
                alt="emoji"
              />
            </button>
            <button>
              <Image
                width={14}
                height={20}
                src={"/assets/testicons/audio.svg"}
                alt="audio"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
