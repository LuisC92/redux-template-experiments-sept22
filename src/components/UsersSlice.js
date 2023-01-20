import { createSlice } from "@reduxjs/toolkit";

export const UsersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "good",
    error: "bad"
  },
  reducers: {
    getUsers: {
        reducer(state, action){
          return { ...state, users: action.payload };
        }
    },
    addUsers: {
      reducer(state, action){
        return { ...state, users: [...state.users, action.payload] }
        //! exemple using axios on reducer
        // axios.post("/database", action.payload).then(resp => {
        //   return { ...state, users: [...state.users, resp] }
        // })
      }
    },
    deleteUsers:{
      reducer(state, action){
        return {...state, users: state.users.filter(user => user.id !== action.payload) };
      }
    }
  },
});

export const {getUsers, addUsers, deleteUsers} = UsersSlice.actions;

export default UsersSlice.reducer;
