import { randomUUID } from "crypto"
import { Crime } from "./crime.model"


export class Criminoso {
   public id: string
   public crimes: Crime[]

    constructor(public nome: string, public endereco: string,  public idade?: number, crimes?: Crime){
        this.id = randomUUID()

       this.crimes = []
      
       if(crimes){
        this.crimes.push(crimes)

       }
      


    }
}