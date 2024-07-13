import { FC, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  date: Date;
  scroll: boolean;
}

const MessageDate: FC<Props> = ({ date, scroll }) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsShow(true);
    const interval = setTimeout(() => {
      setIsShow(false);
    }, 750);

    return () => clearInterval(interval);
  }, [scroll]);

  return (
    <p
      className={`transition-all ${!isShow && "opacity-0"} rounded-full my-2 mx-2 px-3 py-2 bg-fff018 text-black text-sm inline-flex translate-x--1/2`}
    >
      {date.getDate()} {t("" + date.getMonth())}
    </p>
  );
};

export default MessageDate;
