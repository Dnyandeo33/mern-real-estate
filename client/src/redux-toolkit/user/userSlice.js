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

export const googleSing = createAsyncThunk('auth/google/', async (userData, { rejectWithValue }) => {
    try {
        const res = await axios.post('/api/auth/google', userData)
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

export const updateUser = createAsyncThunk('update/userId', async (userData, { rejectWithValue }) => {
    try {
        const res = await axios.put(`/api/user/update/${userData.id}`, userData)
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const userSlice = createSlice({
    name: 'currentUser',
    initialState: {
        currentUser: null,
        success: false,
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
            state.error = null
            state.success = true;
        })
        builder.addCase(signUpUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        })
        // signIn currentUser
        builder.addCase(signInUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(signInUser.fulfilled, (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null
            state.success = true;
        })
        builder.addCase(signInUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        })
        // googleSignIn currentUser
        builder.addCase(googleSing.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(googleSing.fulfilled, (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null
            state.success = true;
        })
        builder.addCase(googleSing.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        })
        // update user
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null
            state.success = true
            state.currentUser = action.payload;
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.success = false;
        })
    }
})
export default userSlice.reducer;


