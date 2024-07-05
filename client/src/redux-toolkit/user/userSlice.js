import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const signUpUser = createAsyncThunk('auth/sign-up', async (userData, { rejectWithValue }) => {
    try {
        const res = await axios.post('/api/auth/sign-up', userData)
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false,
        error: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(signUpUser.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(signUpUser.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        })
        builder.addCase(signUpUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
    }
})
export default userSlice.reducer;


