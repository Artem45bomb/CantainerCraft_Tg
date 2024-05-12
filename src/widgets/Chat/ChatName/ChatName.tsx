interface IChatName {
  chatName: string;
}

export default function ChatName({ chatName }: IChatName) {
  return (
    <div className="text-white font-semibold text-base pb-0.5">{chatName}</div>
  );
}
