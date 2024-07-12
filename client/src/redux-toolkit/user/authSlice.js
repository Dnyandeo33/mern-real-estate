import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';



const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default authSlice.reducer;

