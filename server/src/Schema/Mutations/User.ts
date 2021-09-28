import {UserType} from '../TypeDefs/User';
import {MessageType} from '../TypeDefs/Messages';
import { GraphQLID, GraphQLList, GraphQLString } from 'graphql';
import { resolve } from 'path/posix';
import {Users} from "../../Entities/Users"

export const CREATE_USER = {
    type: UserType, 
    args: {
        name: {type:GraphQLString},
        username: {type:GraphQLString},
        password: {type:GraphQLString},
    },
    // make resolve async
    async resolve(parent: any, args: any) {
        // grab the name, username and password from args
        const {name, username, password} = args;
        // insert it into the Users table 
        await Users.insert({name, username, password});
        return args;
    },
}

export const UPDATE_PASSWORD = {
    type: MessageType, 
    args: {
         username: { type: GraphQLString},
         oldPassword: { type: GraphQLString},
         newPassword: { type: GraphQLString}
    },
    async resolve(parent: any, args: any) {
        const {username, oldPassword, newPassword} = args
        // wait for the user information first before proceeding on to the downstream commands
        const user = await Users.findOne({username: username})
        if (!user) {
            throw new Error("Username doesn't exist");
        }
        // get the password of the user (if it exists)
        const userPassword = user?.password
        if (oldPassword == userPassword) {
            await Users.update({username: username}, {password: newPassword}); 
        return {
            successful: true, message: "Password updated!"
        }}
        else {
            throw new Error("Passwords do not match");
        }},  
};

export const DELETE_USER = {
    type: MessageType, 
    args: {
         id: { type: GraphQLID },
    },
    async resolve(parent: any, args: any) {
        const id = args.id
        await Users.delete({id:id})
        return { successful: true, message: "Delete user " + args.id + " successful!"}
    },
};



