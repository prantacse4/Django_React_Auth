import React, {useState} from 'react'
import axios from 'axios'
const Hello = () => {
    const [message, setmessage] = useState("")
    
    const getmessage = async() =>{
        try {
            const response = await axios.get('/hello/');
            const message = response.data.hello;
            setmessage(message);
            return message;
        }catch(error){
            console.log("Error: ", JSON.stringify(error, null, 4));
            throw error;
        }
    }
    getmessage();
    return (
        <div>
             <div>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Hello
