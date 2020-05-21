import Telegraf, { Context, Markup } from "telegraf";
import { TelegrafContext } from "telegraf/typings/context";
import { MyContext } from "../../extensions";
import { Player } from "./Player";
import { User } from "telegraf/typings/telegram-types";
import util from 'util'
export  function StartGame(ctx: MyContext,bot: Telegraf<TelegrafContext>)
{
    var Timenow = new Date(Date.now()).getSeconds();
    bot.telegram.sendMessage(ctx.chat.id,"Starting Game!\nPlayers Join now pls");
    while(new Date(Date.now()).getSeconds() - Timenow < 10);
    ctx.reply("Starting Game! First Round!");
    ctx.session.test = "yas";
}
const delay = util.promisify(setTimeout);
export class DiceGame
{
    players: Array<Player>;
    maxRounds: number;
    currentRound: number;
    currentPlayer: Player;

    constructor()
    {
        this.players = new Array<Player>();
        this.maxRounds = 3;
        this.currentRound = 0;
    }

    addPlayer(user: User) : boolean
    {
        if(this.players.find(player => player.id == user.id) != undefined) return false;
        this.players.push(new Player(user));    
        return true;   
    }

    startRound(ctx: TelegrafContext)   
    {
        this.currentRound+=1;
        ctx.reply(`Starting round ${this.currentRound}!`);
        for(var i = 0; i < this.players.length; i++) this.players[i].hadTurn = false;
        this.currentPlayer =  this.players[0];
       
         ctx.reply(`${this.currentPlayer.first_name} turn\nPlease throw a dart or roll a dice!`);
    } 

     update(ctx: MyContext)
    {
        
            if(ctx.message.dice && ctx.from.id == this.currentPlayer.id)
            {
                this.currentPlayer.score += ctx.message.dice.value;
                this.currentPlayer.hadTurn = true;
                
                delay(5000).then( () =>{
                    ctx.reply(`${this.currentPlayer.first_name} Scored a ${ctx.message.dice.value}!\nTheir Current score is: ${this.currentPlayer.score}`);
                
                    if(!this.players.find(player => player.hadTurn == false))
                    {
                        var list:string = "";
                        var sortedList = this.players.sort((a,b) => (a.score > b.score)?1:-1);

                        for(var i = 0; i < sortedList.length; i++)
                        {
                            list += `${sortedList[i].first_name}: ${sortedList[i].score} points\n`
                        }
                        
                        delay(1000).then(()=>{
                            ctx.reply(`The Current round Ended!\nThe current scores are:\n\n${list}`);
                        
                            if(this.currentRound == this.maxRounds)
                            {
                                delay(1000).then( () =>
                            
                                ctx.replyWithMarkdown(`The Game has Ended!\nthe Winner is!\n\n<b>${sortedList[0].first_name}!\n\n Do you want to start another round?`,
                                Markup.inlineKeyboard([Markup.callbackButton("Yes","DICE_YES"), Markup.callbackButton("No","DICE_NO")]).extra())
                                );

                             
                                
                                

                            }
                            else
                            {
                                delay(1000).then( () => this.startRound(ctx));
                            }
                    });
                    }
                    else
                    {
                        this.currentPlayer =  this.players.find(player => player.hadTurn == false);
                    
                        delay(1000).then(() => ctx.reply(`${this.currentPlayer.first_name} turn\nPlease throw a dart or roll a dice!`));
                    }
            });
        }
        
    
    }

    listPlayers():string
    {
        var list:string = "";
        for(var i = 0; i < this.players.length; i++)
        {
            list +=  this.players[i].username + "\n";
        }
        return list;
    }
    
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  