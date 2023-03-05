import { Role } from "./role";

export class User {
    id!: number;
    nom!: string;
    prenom!: string;
    username!: string;
    numero!: string;
    email!: string;
    intro!: string;
   password!: string;
   Adresse!: string;
    photo!: string;
    followerCount!: number;
    followingCount!: number;
    role!: Role;
} 

