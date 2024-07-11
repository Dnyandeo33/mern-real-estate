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

// signIn with google
export const googleSing = createAsyncThunk('auth/google/', async (userData, { rejectWithValue }) => {
    try {
        const res = await axios.post('/api/auth/google', userData)
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
})

// update user
export const updateUser = createAsyncThunk('update/userId', async (userData, { rejectWithValue }) => {
    try {
        const res = await axios.put(`/api/user/update/${userData.id}`, userData)
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

// delete user
export const deleteUser = createAsyncThunk('delete/userId', async (userId, { rejectWithValue }) => {
    try {
        const res = await axios.delete(`/api/user/delete/${userId}`)
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message)
    }
})

const userSlice = createSlice({
    name: 'user',
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
            state.error = null
        })
        builder.addCase(signInUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // googleSignIn currentUser
        builder.addCase(googleSing.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(googleSing.fulfilled, (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null
        })
        builder.addCase(googleSing.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // update user
        builder.addCase(updateUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null
        })
        builder.addCase(updateUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        // delete user
        builder.addCase(deleteUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(deleteUser.fulfilled, (state) => {
            state.loading = false;
            state.error = null
            state.currentUser = null
        })
        builder.addCase(deleteUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})
export default userSlice.reducer;


