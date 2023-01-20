import { configureStore } from '@reduxjs/toolkit';
import usersSlice from "../components/UsersSlice"

export const store = configureStore(
    {
        reducer: {
          users: usersSlice,
        },
        devTools: process.env.REACT_APP_PRODUCTION === 'production' ? true : false
    }
);