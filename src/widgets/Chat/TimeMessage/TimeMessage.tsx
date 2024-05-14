interface ITimeMessage {
  hours: number;
  minutes: number;
}

export default function TimeMessage({ hours, minutes }: ITimeMessage) {
  return (
    <p className=" text-xs font-light text-end select-none">
      {hours}:{minutes}
    </p>
  );
}
