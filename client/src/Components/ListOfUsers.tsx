import React from "react";
import {GET_ALL_USERS} from '../Graphql/Queries';
import {useQuery, useMutation } from '@apollo/client';
import {DELETE_USER} from '../Graphql/Mutation';

// A component to return a list of users
function ListOfUsers() {
    // get the data
    const {data} = useQuery(GET_ALL_USERS);
    const [deleteUser, {error}] = useMutation(DELETE_USER);

    // if the data has arrived, get the properties inside the data (via getAllUsers)
    // map them accordingly and create a div displaying the user.name and user.username
    return (
        <div>
            {data && 
             (data.getAllUsers.map((user: any)=> {
                return (
                    <div>
                        {user.name} / {user.username} 
                    <button onClick={() => {deleteUser({variables: {id: user.id}});
                    }}
                    >
                        {""}Delete User{""}
                    </button>        
                   </div>
                );
            }))
        }
        </div>
        )
};

export default ListOfUsers;


