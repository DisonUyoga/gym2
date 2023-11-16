import { createSlice } from '@reduxjs/toolkit'

const initialState = {
token: null,
IsAuthenticated:false
}

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    authentication(state, action){
      const {token}= action.payload
      if(token){
        state.IsAuthenticated=true
        state.token=token
      }
    }
  }
});

export const Authenticate=state=>state.auth.IsAuthenticated
export const {authentication} = AuthSlice.actions

export default AuthSlice.reducer