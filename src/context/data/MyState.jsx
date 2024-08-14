import React, { useEffect, useState } from "react";
import myContext from "./myContext";

function MyState(props) {
    // const name = "Mudassir";
    
    const [user, setUser] = useState([]);

    const userData = async () => {
        const res = await fetch(`http://localhost:5000/api/auth/getuser`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
          }
        });
    
        let userData = await res.json();
        // console.log(userData);
        setUser(userData);
      }

    return (
        <myContext.Provider value={{user , setUser , userData}}>
            {props.children}
        </myContext.Provider>
    )
}

export default MyState;