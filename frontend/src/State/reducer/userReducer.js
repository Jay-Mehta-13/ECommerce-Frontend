import { ISLOGGEDIN, LOGINUSER, SIGNUPUSER, VERIFYTOKEN } from "../../const"

export let userreducer=(state={user:null,isLoggedIn:null},action)=>{
    switch (action.type) {
        case SIGNUPUSER:
            return {...state,user:action.payload,isLoggedIn:true}
        case LOGINUSER:
            return {...state,user:action.payload,isLoggedIn:true}
        case ISLOGGEDIN:
            return {...state,isLoggedIn:action.payload}
        case VERIFYTOKEN:
            return {...state,user:action.payload,isLoggedIn:true}
    
        default:
            return {...state}
    }
}