export interface ICountOfUnreadMessage {
  countOfUnreadMessage: number;
}

export default function CountOfUnreadMessage({
  countOfUnreadMessage,
}: ICountOfUnreadMessage) {
  return (
    <div className=" rounded-3xl bg-45B8B1 inline-block px-2 py-1">
      <p className=" text-xs  text-30595F font-normal">
        {countOfUnreadMessage}
      </p>
    </div>
  );
}
