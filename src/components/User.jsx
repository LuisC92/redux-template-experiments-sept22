import React from "react";
import { useDispatch } from "react-redux";
import { deleteUsers } from "./UsersSlice";

function User({ users }) {
const dispatch = useDispatch();

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p>
          <p>Username: {user.username}</p>
          <p>Website: {user.website}</p>
          <button
            onClick={()=>dispatch(deleteUsers(user.id))}
          >
            Delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default User;
