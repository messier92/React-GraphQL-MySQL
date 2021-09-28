import {gql} from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($name: String!, $username: String!, $password: String!) {
        createUser(name: $name, username: $username, password: $password) {
            id
            name
            username
        }
    }
`;

// mutation deleteUser name must match with the name in server/src/schema.index.ts
export const DELETE_USER = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            successful
            message
        }
    }
`;

// mutation deleteUser name must match with the name in server/src/schema.index.ts
export const UPDATE_USER_PASSWORD = gql`
    mutation updatePassword($username: String!, $oldPassword: String!, $newPassword: String!) {
        updatePassword(username: $username, oldPassword: $oldPassword, newPassword: $newPassword) {
            successful
            message
        }
    }
`;



