import React, {useState} from "react";
import {CREATE_USER} from "../Graphql/Mutation";
import {ApolloClient, InMemoryCache, ApolloProvider, useMutation} from "@apollo/client";

// A component to create a user 
function CreateUser() {
    // Setters
    const [name, setName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // createUser - the function that you want to call
    const [createUser, {error}] = useMutation(CREATE_USER);

    return (
        <div className="createUser">
        <input type="text" placeholder="name" 
        onChange={(event)=>{setName(event.target.value)}}/>
        <input type="text" placeholder="username"
        onChange={(event)=>{setUserName(event.target.value)}}/>
        <input type="text" placeholder="password"
        onChange={(event)=>{setPassword(event.target.value)}}/>
        <button onClick={()=>{createUser({variables: {name:name, username: userName, password: password}})}}>Create User</button>
      </div>
    )
}

// Write the setters at the top of the function, e.g. const [name, setName]
// the first argument belongs to the button, the second argument belongs to the input
// this ties the input and the button together

export default CreateUser;
