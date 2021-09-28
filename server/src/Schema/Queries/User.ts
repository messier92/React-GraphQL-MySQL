import {UserType} from '../TypeDefs/User';
import { GraphQLList } from 'graphql';
import { resolve } from 'path/posix';
import {Users} from '../../Entities/Users'
// this is a query returning all the users
export const GET_ALL_USERS = {
    // define the type to return (a list of userTyp)
    type: new GraphQLList(UserType),
    // pass a resolver to do things to the data
    resolve() {
        return Users.find();
    }
}

