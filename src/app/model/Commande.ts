import { User } from "./User";

export class Commande{
     idcommande!:number;
      datecommande!: Date;
      codecommande!: string;
      quantitecommande!: number;
     montanttotal!: number;
    status!: string;
    user!:User;
}