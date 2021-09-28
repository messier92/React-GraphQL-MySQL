import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import { schema } from './Schema'
import cors from 'cors';
import {createConnection} from "typeorm";
import {Users} from './Entities/Users'

// main starting point - run all asynchronously 
const main = async () => {

    // Connect to the MySQL Database via typeorm
    await createConnection({
        type: "mysql",
        database: "graphqlcrud",
        username: "P1340625",
        password: "password",
        logging: true, // log the SQL statements in the backend
        synchronize: false, // when this is set to true, it will go over all the entities and run an SQL statement to create an entity
        entities: [Users],
    });

    // set up express
    const app = express()
    // apply middleware to connect front-end and back-end
    app.use(cors())
    // parse the json from the Client to feed into GraphQL server
    app.use(express.json())
    
    // connect to graphql (schema is not yet constructed)
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))

    app.listen(3001, () => 
    console.log("Server running on port 3001..."));
};

main().catch((err) => {
    console.log(err);
});




