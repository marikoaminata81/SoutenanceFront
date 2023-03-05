import { User } from "./User";

export class Commentaire {
    idhistorique!: number;
    Datevente!: Date;
    nomproduit!: string;
    quantite!: number;
    prixunitaire!: number;
    montanttotal!: number;
    nomclient!: string;
    prenomclient!: string;
    numeroclient!: string;
	user!: User;
}


   
