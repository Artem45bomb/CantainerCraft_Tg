import { User, Chat } from "../";

export type Chat_Info = {
	uuid: string,
	user: User,
	chat: Chat,
	is_secured: boolean,
	is_notification:boolean
};