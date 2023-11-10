import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import { ApolloServer,gql } from "apollo-server"
import { users ,sports} from "./fakedb.mjs"
const typeDefs=gql`
type Query{
  users:[User]
  sports:[sport]
}
type User{
    id:ID!
    Firstname:String
    lastName:String
    email:String 
}
type sport{
    id:ID!
    playing:String
}

`
const resolvers={
Query:{
    users:()=> users,
    sports:()=>sports
}
}

const server=new ApolloServer({typeDefs,resolvers,
plugins:[
    ApolloServerPluginLandingPageGraphQLPlayground()
]
})
server.listen().then(({url})=>{
    console.log(`server is started ${url}`);
    console.log(users)
})