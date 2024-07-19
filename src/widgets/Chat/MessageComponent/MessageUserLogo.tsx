import { FC } from "react";
import UserLogo from "@/widgets/Chat/Userlogo/UserLogo";

interface Props {
  isShow: boolean;
  srcImageProfile: string;
}

export const MessageUserLogo: FC<Props> = ({ isShow, srcImageProfile }) => {
  return (
    <div style={{ width: 45, height: 45 }} className={"rounded-full"}>
      {isShow && (
        <UserLogo srcImage={srcImageProfile || "/assets/testIcons/logo.jpg"} />
      )}
    </div>
  );
};
