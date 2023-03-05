import { Produit } from "./Produit";

export class Categorie{
    id!: number;
	nom!: string;
	imagecouverture!: string;
	produitList!: Produit;
}
