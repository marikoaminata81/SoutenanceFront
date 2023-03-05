import { Commentaire } from "./commentaire";
import { Video } from "./video";
import { User } from "./User";

export class Notification {
	id!: number;
	type!: string;
	receiver!: User;
	sender!: User;
	owningPost!: Video;
	owningComment!: Commentaire;
	isSeen!: boolean;
	isRead!: boolean;
	dateCreated!: string;
	dateUpdated!: string;
	dateLastModified!: string;
}