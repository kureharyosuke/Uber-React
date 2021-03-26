export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHello: Greeting!\n  sayYun: String!\n}\n\ntype Greeting {\n  text: String!\n  error: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHello: Greeting;
  sayYun: string;
}

export interface Greeting {
  text: string;
  error: boolean;
}
