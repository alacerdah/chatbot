import { MessageChat } from "./message.model";
import { User } from "./user.model";

export class Analytics {
  constructor(
      public message: MessageChat,
      public user: User
  ) {
  }
}
