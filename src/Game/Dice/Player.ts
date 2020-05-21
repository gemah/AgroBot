
import { User } from "telegraf/typings/telegram-types";

export class Player
{
    id: number;
    username: string;
    first_name: string;
    score: number;
    hadTurn: boolean;

    constructor(user: User){
        this.id = user.id;
        this.first_name = user.first_name;
        this.username = user.username;
        this.score = 0;
        this.hadTurn = false;
    }
}