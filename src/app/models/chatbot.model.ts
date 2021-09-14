import { Analytics } from "./analytics.model";

export class ChatBot {
  constructor(
      public analytics?: Analytics,
      public created?: string,
      public culture?: string,
      public description?: string,
      public image?: string,
      public name?: string,
      public plan?: string,
      public shortName?: string,
      public template?: string,
      public updated?: string
  ) {
  }
}
