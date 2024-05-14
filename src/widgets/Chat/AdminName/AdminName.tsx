interface IAdminName {
  adminName: string;
}

export default function AdminName({ adminName }: IAdminName) {
  return (
    <p className=" text-xs font-normal text-A1AAB3 select-none">{adminName}</p>
  );
}
