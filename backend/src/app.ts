import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
import helmet from "helmet";
import logger from "morgan";

class App {
  public app: GraphQLServer;
  constructor() {
    this.app = new GraphQLServer({});
    this.middlewares();
  }
  //constructor 함수는 App 클래스를 새로 시작할 때 마다 호출되는 함수
  private middlewares = (): void => {
    this.app.express.use(cors());
    this.app.express.use(logger("dev"));
    this.app.express.use(helmet());
  };
}

export default new App().app;
