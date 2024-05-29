import { Chat, Message, MessageResource } from "@/entities";
import { PropsHeader } from "@/widgets/Chat/Header/Header";
import { ICountOfUnreadMessage } from "@/widgets/Chat/CountOfUnreadMessage/CountOfUnreadMessage";

export const chatsTEST: Chat[] = [
  {
    uuid: "43589jj-ll",
    name: "74tp",
    type: "channel",
    srcImage: "/assets/png/images1.jpg",
    messageResource: [],
    users: [],
    messages: [
      {
        uuid: "fjfuajlljii",
        type: "text",
        userName: "",
        text: "Hi",
        date: "1234",
        srcContent: [],
        userId: 1,
        reactions: [],
      },
    ],
  },
  {
    uuid: "4358op9jj-ll",
    name: "73tp",
    type: "group",
    srcImage: "/assets/png/images2.png",
    users: [],
    messageResource: [],
    messages: [
      {
        uuid: "uineo9",
        type: "photo",
        userName: "",
        text: "Hi",
        srcContent: [
          { uuid: "749jjjf", srcContent: "/assets/png/images1.jpg" },
        ],
        date: "1234",
        userId: 1,
        reactions: [],
      },
    ],
  },
  {
    uuid: "43589jj-ll",
    name: "74tp",
    type: "private",
    srcImage: "/assets/png/images1.jpg",
    users: [],
    messageResource: [],
    messages: [
      {
        uuid: "fkeuk",
        type: "text",
        text: "",
        srcContent: [],
        date: "1234",
        userName: "j",
        userId: 1,
        reactions: [],
      },
    ],
  },
  {
    uuid: "43589jj-ll",
    name: "74tp",
    type: "private",
    srcImage: "/assets/png/images1.jpg",
    users: [],
    messageResource: [],
    messages: [],
  },
];

export const securedChatsTEST = new Set<string>();

export const MessageTest: Message = {
  uuid: "asdf",
  text: "lasdfahsdfhasdhf asdf ahsdf asdf hjasd fhasdfhasd khjakjsdf",
  date: "04 Dec 2006 01:11:00",
  userId: 5,
  userName: "asdf",
  type: "text",
  reactions: [],
  srcContent: [],
};

export const ChatInfoTest: PropsHeader = {
  logoSrc: "/assets/testIcons/logo.jpg",
  chatName: "Temik Krutoi",
  countOfMembers: 123,
  countOfOnlineMembers: 23,
};

export const countUnreadMessagesTest: ICountOfUnreadMessage = {
  countOfUnreadMessage: 34,
};

export const msgTest: Message[] = [
  {
    uuid: "asdf",
    text: "lasdfahsdfhasdhf asdf ahsdf asdf hjasd fhasdfhasd khjakjsdf",
    date: "04 Dec 2006 01:11:00",
    userId: 5,
    userName: "asdf",
    type: "text",
    emotions: [],
    srcContent: [],
  },
  {
    uuid: "asdf",
    text: "Temik krutoi",
    date: "04 Dec 2006 01:12:00",
    userId: 6,
    userName: "fdfa",
    type: "text",
    emotions: [],
    srcContent: [],
  },
];

securedChatsTEST.add("43589jj-ll");
