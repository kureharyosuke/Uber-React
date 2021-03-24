import { GraphQLSchema } from "graphql";
import { makeExecutableSchema } from "graphql-tools";
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import path from "path";

const allTypes: GraphQLSchema[] = fileLoader(
  path.join(__dirname, "./api/**/*.graphql")
  //./api/**/*.graphql => API안에 있는 모든 그래프큐엘 파일 가져옴
);
// GraphQLSchema[] = Array

const allResolvers: string[] = fileLoader(
  path.join(__dirname, "./api/**/*.resolvers.*")
  //"./api/**/*.resolvers.*" => resolvers.* 빌드되면 ts파일이 js파일로 변경되기때문에, 모든파일형식.*
);

const mergedTypes = mergeTypes(allTypes);
const mergedResolvers = mergeResolvers(allResolvers);

const schema = makeExecutableSchema({
  typeDefs: mergedTypes,
  resolvers: mergedResolvers,
});

export default schema;
