import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'http://localhost:4000/graphql'
})
const GET_DATA = gql`
query Getdata{
    users{


        
        id 
       Firstname
        lastName
      }
}
`;
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const { data } = await client.query({ query: GET_DATA });
    return data.users;
});
export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'suceeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message
            });
    }
});

export const selectUsers = (state) => state.user.users;
export default userSlice.reducer;