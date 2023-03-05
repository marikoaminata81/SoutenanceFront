import { User } from "./User";

export class UserResponse {
    user!: User;
    followedByAuthUser!: boolean;
}