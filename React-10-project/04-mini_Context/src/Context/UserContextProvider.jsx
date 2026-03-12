import React, { createContext, useState } from "react";
export const UserContext = createContext();

// import UserContext from './userContext'

const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  console.log(props);

  return (
    <div>
      <UserContext.Provider value={[user,setUser]}>
        {props.children}
      </UserContext.Provider>
    </div>
  );
};

export default UserContextProvider;
