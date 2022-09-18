import axios from "axios";
import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        // const name = user?.user?.displayName;
        if (email) {
            const url = `http://localhost:5000/users/${email}`;
            axios.put(url, { email: email })
                .then(data => {
                    const accessToken = data.data.token;
                    console.log("data inside", accessToken);
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken)
                });
        }
    }, [user]);
    return [user]
}

export default useToken;