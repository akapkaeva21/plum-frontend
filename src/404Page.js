import React, { useState, useEffect } from "react";
import axios from "axios";

const Page = () => {

    const [users, setUsers] = React.useState([]);

    useEffect(() => {
        loadUsers()
    },[]);

    const loadUsers=async ()=>{
        const result = await axios.get("http://localhost:8082/users");
        console.log(result);
    }


    return (
        <div>
            <h1>Data from Spring Boot:</h1>
            <ul>
                {users.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Page;
