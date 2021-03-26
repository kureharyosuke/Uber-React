export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHello(name: String!): SayHelloResponse!\n  sayYun: String!\n}\n\ntype SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHello: SayHelloResponse;
  sayYun: string;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}
