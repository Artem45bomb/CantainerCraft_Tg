interface ICountOfOnlineMembers {
  countOfOnlineMembers: number;
}

export default function OnlineMembers({
  countOfOnlineMembers,
}: ICountOfOnlineMembers) {
  return <span> {countOfOnlineMembers} online</span>;
}
