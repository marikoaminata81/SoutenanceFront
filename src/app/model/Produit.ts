import { User } from "./User";
import { Categorie } from "./Categorie";

export class Produit {
	id!: number;
	nom!: string;
	reference!: string;
	imagecouverture!: string;
	description!: string;
	prix!: number;
	etat!: boolean;
	categorie!:Categorie;
	author!: User;
}

