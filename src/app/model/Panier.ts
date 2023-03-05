import { User } from "./User";
import { Produit } from "./Produit";

export class Panier {
	id!: number;
	quantite!: number;
	totalproduit!: number;
	etat!: boolean;
	user!: User;
    produits!:Produit;

}

