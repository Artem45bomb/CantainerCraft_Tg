import { Chat, Message } from "@/entities";

export const chatsTEST: Chat[] = [
  {
    uuid: "43589jj-ll",
    name: "74tp",
    type: "channel",
    srcImage: "/assets/png/images1.jpg",
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
    messages: [
      {
        uuid: "uineo9",
        type: "photo",
        userName: "",
        text: "Hi",
        srcContent: ["/assets/png/images1.jpg"],
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
    messages: [
      {
        uuid: "fkeuk",
        type: "document",
        srcContent: "",
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
    messages: [
      {
        uuid: "fkekpppk",
        type: "video",
        date: "1234",
        srcContent: "",
        userId: 1,
        reactions: [],
      },
    ],
  },
];

export const securedChatsTEST = new Set<string>();

securedChatsTEST.add("43589jj-ll");
