import { User } from "./User";

export class Commentaire {
    id!: number;
    contenue!: string;
    likeCount!: number;
    dateCreated!: string;
    dateLastModified!: string;
	author!: User;
}
