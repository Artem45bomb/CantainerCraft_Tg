import { Chat, Message, User } from "@/entities";
import { PropsHeader } from "@/widgets/Chat/Header/Header";
import { ICountOfUnreadMessage } from "@/widgets/Chat/CountOfUnreadMessage/CountOfUnreadMessage";
import { UserChat } from "@/features/store/chat";

export const chatsTEST: Chat[] = [
  {
    uuid: "23589jj-ll",
    name: "74tp",
    type: "channel",
    srcImage: "/assets/png/images1.jpg",
    users: [],
    messages: [
      {
        uuid: "fjfuajlljii",
        type: "text",
        text: "Hi",
        date: "1234",
        srcContent: [],
        userId: 1,
        emotions: [],
      },
    ],
  },
  {
    uuid: "4388op9jj-ll",
    name: "73tp",
    type: "group",
    srcImage: "/assets/png/images2.png",
    users: [],
    messages: [
      {
        uuid: "uineo9",
        type: "photo",
        text: "Hi",
        srcContent: [
          { uuid: "749jjjf", srcContent: "/assets/png/images1.jpg" },
        ],
        date: "1234",
        userId: 1,
        emotions: [],
      },
    ],
  },
  {
    uuid: "48589jj-ll",
    name: "74tp",
    type: "private",
    srcImage: "/assets/png/images1.jpg",
    users: [],
    messages: [
      {
        uuid: "fkeuk",
        type: "text",
        text: "",
        srcContent: [],
        date: "1234",
        userId: 1,
        emotions: [],
      },
    ],
  },
  {
    uuid: "43509jj-ll",
    name: "74tp",
    type: "private",
    srcImage: "/assets/png/images1.jpg",
    users: [],
    messages: [],
  },
];

export const securedChatsTEST = new Set<string>();

export const MessageTest: Message = {
  uuid: "asdf",
  text: "lasdfahsdfhasdhf asdf ahsdf asdf hjasd fhasdfhasd khjakjsdf",
  date: "04 Dec 2006 01:11:00",
  userId: 5,
  type: "text",
  emotions: [],
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
    text: "Temik krutoi",
    date: "04 Dec 2006 01:12:00",
    userId: 5,
    type: "text",
    emotions: [],
    srcContent: [],
  },
  {
    uuid: "asdf",
    text: "Temik krutoijjjjfajlflajfaljflalffjflflajf",
    date: "05 Dec 2006 00:13:00",
    userId: 5,
    type: "text",
    emotions: [],
    srcContent: [],
  },
];

securedChatsTEST.add("43589jj-ll");

export const userTest: User = {
  email: "",
  id: 3,
  name: "Nikite",
  password: "",
  roles: [],
  srcImageProfile: "/assets/png/Ellipse 18.png",
  subscriptions: [],
  userOnline: undefined,
};

export const userChatTest: UserChat[] = [
  {
    id: 5,
    name: "Artem",
    userOnline: {
      is_online: false,
    },
    srcImageProfile: "",
    roles: [],
    subscriptions: [],
  },
];
