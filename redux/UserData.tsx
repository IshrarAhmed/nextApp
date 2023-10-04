import { createSlice,PayloadAction } from '@reduxjs/toolkit'
// import { string } from 'yup'
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
 profileImage:string
}
  const initialState:userDataState={
    userRegistration :null,
    isloggedIn: false,
    profileImage:""
  }
  export const userSlice = createSlice({
    name:"userData",
    initialState,
    reducers:{AddUserData:(state,action:PayloadAction<userdata>)=>{
       state. userRegistration= action.payload
    },
    userLogged: (state) => {
        state.isloggedIn = true; 
      },
      imageAdd:(state,action:PayloadAction<string>)=>{
        state.profileImage= action.payload
    
      },
      userLogout:(state)=>{
        state.isloggedIn= false
      }
    }
  })
export const { AddUserData,userLogged,imageAdd,userLogout} = userSlice.actions
 
export default userSlice.reducer