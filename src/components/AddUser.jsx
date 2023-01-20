import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "./UsersSlice";
// use uuid to generate unique id
import { v4 as uuidv4 } from "uuid";

const AddUser = () => {
  const [newUser, setNewUser] = useState({
    email: "",
    name: "",
    username: "",
    website: "",
  });
// set dispatch
const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUsers({id:uuidv4(), ...newUser}))
  };

  return (
    <div>
      <h2>Add a User</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          value={newUser.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          value={newUser.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="username">Username:</label>
        <input
          name="username"
          type="text"
          value={newUser.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="website">Website:</label>
        <input
          name="website"
          type="text"
          value={newUser.website}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Add new User</button>
      </form>
    </div>
  );
};

export default AddUser;
