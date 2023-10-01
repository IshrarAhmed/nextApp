import { createSlice,PayloadAction } from '@reduxjs/toolkit'
interface userdata {
    firstName:String
    lastName:String
    email:any 
    password:any 
    confirmPassword:any 
    phoneNumber:number
    address:any
}
interface userDataState {
 userRegistration:userdata|null,
 isloggedIn: boolean;
}
  const initialState:userDataState={
    userRegistration :null,
    isloggedIn: false
  }
  export const userSlice = createSlice({
    name:"userData",
    initialState,
    reducers:{AddUserData:(state,action:PayloadAction<userdata>)=>{
       state. userRegistration= action.payload
    },
    userLogged: (state) => {
        state.isloggedIn = true; 
      },}
  })
export const { AddUserData,userLogged} = userSlice.actions
 
export default userSlice.reducer