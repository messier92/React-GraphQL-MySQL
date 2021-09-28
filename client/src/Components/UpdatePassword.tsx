import React, {useState} from 'react';
import {UPDATE_USER_PASSWORD} from '../Graphql/Mutation';
import {useMutation} from "@apollo/client";

function UpdatePassword() {
       // Setters
       const [username, setUserName] = useState("");
       const [oldPassword, setCurrentPassword] = useState("");
       const [newPassword, setNewPassword] = useState("");
       // updatePassword - the function that you want to call
       const [updatePassword, {error}] = useMutation(UPDATE_USER_PASSWORD);
   

    if (error) {
        return <h1> {error}</h1>
    }
    
    return (
        <div>
            <input type="text" placeholder="Username" onChange={(event)=>{setUserName(event.target.value);}}/>
            <input type="password" placeholder="Current Password" onChange={(event)=>{setCurrentPassword(event.target.value);}}/>
            <input type="password" placeholder="New Password" onChange={(event)=>{setNewPassword(event.target.value);}}/>
            <button onClick={()=>{updatePassword({variables: {username: username, oldPassword: oldPassword, newPassword: newPassword}})}}>UPDATE PASSWORD</button>

        </div>
    )
}

export default UpdatePassword;


