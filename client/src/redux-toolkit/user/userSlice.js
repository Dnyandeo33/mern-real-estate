import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// signUp curruentUser
export const signUpUser = createAsyncThunk('auth/sign-up', async (userData, { rejectWithValue }) => {
    try {
        const res = await axios.post('/api/auth/sign-up', userData)
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// signIn curruentUser
export const signInUser = createAsyncThunk('auth/sign-in', async (userData, { rejectWithValue }) => {
    try {
        const res = await axios.post('/api/auth/sign-in', userData)
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

const userSlice = createSlice({
    name: 'currentUser',
    initialState: {
        currentUser: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUpUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        })
        builder.addCase(signUpUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // signIn currentUser
        builder.addCase(signInUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(signInUser.fulfilled, (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        })
        builder.addCase(signInUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})
export default userSlice.reducer;


