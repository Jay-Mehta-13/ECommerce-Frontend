import { GETPRODUCTS } from "../../const"

export let productreducer=(state={products:null},action)=>{
    switch (action.type) {
        case GETPRODUCTS:
            return {...state,products:action.payload}
    
        default:
            return {...state}
    }
}