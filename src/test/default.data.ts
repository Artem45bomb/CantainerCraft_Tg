import { Chat, Message } from "@/entities";

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
    messageResource: [
    ],
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

securedChatsTEST.add("43589jj-ll");
