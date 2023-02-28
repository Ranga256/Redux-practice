import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Rohit' },
    { id: '1', name: 'Mahesh' },
    { id: '2', name: 'Naresh' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state)=> state.users;

export default usersSlice.reducer;