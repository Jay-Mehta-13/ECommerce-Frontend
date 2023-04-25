import { SIGNUPUSER } from "../../const"

export let userreducer=(state={user:null},action)=>{
    switch (action.type) {
        case SIGNUPUSER:
            return {...state,user:action.payload}
    
        default:
            return {...state}
    }
}