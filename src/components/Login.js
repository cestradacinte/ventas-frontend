import React, { useState } from "react";
import axios from "axios";

function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await axios.post("http://localhost:5000/api/login", {
                username,
                password,
            });
            console.log(token);
        }
    }


}