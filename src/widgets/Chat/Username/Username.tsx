interface ITUserName {
  userName: string;
}

export default function Username({ userName }: ITUserName) {
  return (
    <p className=" text-7289D9 font-semibold text-xs select-none">{userName}</p>
  );
}
