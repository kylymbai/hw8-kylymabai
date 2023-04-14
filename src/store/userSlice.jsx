import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk(
    'getUsers',
    async function (userInfo, {dispatch, rejectWithValue}){
        const response = await fetch('http://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        return data
        console.log(data)
        
    }
)

const initialState = {
    user: []
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
    }, 
    extraReducers: {
        [getUsers.fulfilled]: (state, action) => {
            state.user = action.payload
        }
    }
})

export const {getUsersInfo} = userSlice.actions
export default userSlice.reducer 