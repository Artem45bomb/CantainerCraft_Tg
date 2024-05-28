import { User } from ".."
import { Chat } from ".."

export type Folder = {
	id: number,
	chat:Chat,
	user: User
	name:string
}