import { MessageResource } from "@/entities";
import Image from "next/image";

interface Props {
  messageDoc: MessageResource[];
  srcImgDoc: string;
}

export default function MessageDocuments({ messageDoc, srcImgDoc }: Props) {
  return (
    <div>
      <Image width={45} height={45} src={srcImgDoc} alt="imgDoc" />
      <div>
        <div>
          <p>{messageDoc[0].text}</p>
        </div>
        <div>
          <p>1.7 MB</p>
        </div>
      </div>
    </div>
  );
}
