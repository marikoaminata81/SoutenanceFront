import { Commentaire } from "./commentaire";

export class CommentResponse {
	likedByAuthUser!: boolean;
	commentaire!: Commentaire;
}
