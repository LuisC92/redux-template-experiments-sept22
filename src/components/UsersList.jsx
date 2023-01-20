import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./UsersSlice";
import User from "./User";

const UsersList = () => {
  // get users state from redux store - users.users
  const users = useSelector((state) => state.users.users);

    // set dispatch
    const dispatch = useDispatch();

    useEffect(() => {
      // optional: use axios to fetch
      axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
        // trigger dispatch with getUsers action
        dispatch(getUsers(response.data));
      });
    }, [dispatch]);
  // console.log(users);
  return (
    <div>
      <h1>User List</h1>
      <hr/> 
      <User users={users} />
    </div>
  );
};

export default UsersList;
