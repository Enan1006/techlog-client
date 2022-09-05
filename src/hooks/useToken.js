import { useEffect, useState } from "react"

const useToken = user => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        // const name = user?.user?.displayName;
        const currentUser = { email: email };
        if (user) {
            const url = `http://localhost:5000/users/${email}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "Content- type": "application/json"
                },
                body: JSON.stringify(currentUser)
            })
                .then(Res => Res.json())
                .then(data => {
                    console.log(data)
                    // setToken(data)
                })
        }
    }, [user]);
    return [user]
}

export default useToken;