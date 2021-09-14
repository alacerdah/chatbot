import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ChatBot } from "../models/chatbot.model";
import  *  as  data  from  '../../../backend/data.json';


@Injectable()
export class ListService {
    listChatBot: ChatBot[] = [];
    constructor(
        private http: HttpClient
    ) {}

    getItems(): ChatBot[] {
      const list = data as any;
      this.listChatBot = list.default;
      return this.listChatBot;
    }

    getByName(name): ChatBot {
      let item = this.listChatBot.find(o => o.shortName === name);
      return item;
    }

    addItem(item: ChatBot): string {
      let fountItem = this.listChatBot.find((i) => i.name === item.name)
      if (fountItem) {
          return 'Item existente';
      } else {
        this.listChatBot.push(item);
        return 'Item adicionado';
      }
  }
}
