import { TelegrafContext } from "telegraf/typings/context";
import { Player} from "./Game/Dice/Player"
import { DiceGame } from "./Game/Dice/DiceGame";

export interface MySession
{
    game: DiceGame;
    startedGame: boolean;
    isInGame: boolean;
    test: string;
}

export interface MyContext extends TelegrafContext {
    session: MySession
}