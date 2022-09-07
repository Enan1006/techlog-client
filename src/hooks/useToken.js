import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        // const name = user?.user?.displayName;
        if (user) {
            const url = `http://localhost:5000/users/${email}`;
            axios.put(url, { email: email })
                .then(data => {
                    console.log("data inside", data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken)
                });
        }
    }, [user]);
    return [user]
}

export default useToken;