import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users?id=1')
        return response.data
    }
)

const initialState = {
username: '',
status: 'idle'
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
        state.username = action.payload[0].username
        state.status = 'fulfilled'
    })
    builder.addCase(fetchUser.pending, (state) => {
        state.status = 'pending'
    })
  }
});

export const {} = userSlice.actions

export default userSlice.reducer