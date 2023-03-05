
import { User } from "./User";

export class Video {
	id!: number;
	titre!: string;
	imagecouverture!: string;
	url!: string;
	likeCount!: number;
	commentCount!: number;
	shareCount!: number;
	isTypeShare!: boolean;
	author!: User;
	sharedPost!: Video;
	
}
