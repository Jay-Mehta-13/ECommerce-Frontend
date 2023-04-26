import { ADDTOCARRT, CLEARCART, REMOVEFROMCART, REMOVEITEM } from "../../const"

export let cartreducer=(state={cart:{},subtotal:0},action)=>{
    switch (action.type) {
        case ADDTOCARRT:
            if (action.payload._id in state.cart) {
                state.cart[action.payload._id].qty=state.cart[action.payload._id].qty+1;
                state.subtotal+=parseInt(state.cart[action.payload._id].productPrice)
            } else {
                state.cart[action.payload._id]=action.payload
                state.cart[action.payload._id].qty=1
                state.subtotal+=parseInt(action.payload.productPrice)
            }
            return {...state}
        case REMOVEFROMCART:
            if (action.payload._id in state.cart) {
                state.cart[action.payload._id].qty=state.cart[action.payload._id].qty-1
                state.subtotal-=parseInt(state.cart[action.payload._id].productPrice)
            }
            if(state.cart[action.payload._id].qty<=0){
                delete state.cart[action.payload._id]
            }
            return {...state}
        case REMOVEITEM:
        if (action.payload._id in state.cart) {
            state.subtotal-=parseInt(state.cart[action.payload._id].productPrice)*parseInt(state.cart[action.payload._id].qty)
            delete state.cart[action.payload._id]
        }
            return {...state}
        case CLEARCART:
            return {...state,cart:{},subtotal:0}
    
        default:
            return {...state}
    }
}