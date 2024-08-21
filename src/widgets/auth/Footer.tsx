import LogoIcon from "@assets/icon/Logo-icon.svg";

export default function Footer() {
  return (
    <div className="border-t-2 border-gray-500 bg-DDE5FF flex w-full h-24 fixed bottom-0 left-0 right-0 z-auto">
      <div className=" w-1/2 flex justify-start items-center relative">
        <LogoIcon className="ml-27 mt-1 mr-3 w-20 h-20" />
        <span className="text-xl-4 pt-4 text-1E2E66 ">LinkNet</span>
      </div>
      <div className="w-1/2 flex items-center justify-end">
        <span className="pr-32 text-lg">Contact/ Bug report</span>
      </div>
    </div>
  );
}
