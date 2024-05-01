export default function Header() {
  return (
    <header className=" flex justify-between items-center border border-b border-fff005 h-5,19 px-11">
      <a href="#" className="flex">
        <div className=" w-50p h-50p bg-white rounded-full mr-2.5">
          {/* <img src="../../../public/assets/testIcons/logo.jpg" alt="logo of chat" /> */}
        </div>
        <div className=" ">
          <div className="text-white font-semibold text-base text-white">
            Design Review Chat
          </div>
          <div className="">5 members, 3 online</div>
        </div>
      </a>
      <nav>
        <button>f</button>
        <button>f</button>
        <button>f</button>
      </nav>
    </header>
  );
}
