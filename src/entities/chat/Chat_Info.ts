import { Chat } from "../";

export type Chat_Info = {
	uuid: string,
	userId:number,
	chat: Chat,
	is_secured: boolean,
	is_notification:boolean
};