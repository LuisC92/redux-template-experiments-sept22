// import React, { createContext, useEffect } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { getUsers } from "../components/Users/UsersSlice";

// export const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//   // set dispatch
//   const dispatch = useDispatch();

//   useEffect(() => {
//     // optional: use axios to fetch
//     axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
//       // trigger dispatch with getUsers action
//       dispatch(getUsers(response.data));
//     });
//   }, []);

//   return (
//     <UserContext.Provider
//       value={{
//         /* pass values of reducer*/
//       }}
//     >
//       {children}
//     </UserContext.Provider>
//   );
// };
