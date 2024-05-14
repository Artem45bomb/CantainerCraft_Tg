interface ICountOfMembers {
  countOfMembers: number;
}

export default function Members({ countOfMembers }: ICountOfMembers) {
  return <span>{countOfMembers} members,</span>;
}
