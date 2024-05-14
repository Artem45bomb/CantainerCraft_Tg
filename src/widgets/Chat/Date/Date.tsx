interface IDate {
  date: string;
}

export default function Date({ date }: IDate) {
  return (
    <p className="rounded-full px-3 py-2 bg-fff018 text-black text-sm inline-flex">
      {date}
    </p>
  );
}
