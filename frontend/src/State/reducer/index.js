import { combineReducers } from "redux"
import { cartreducer } from "./cartReducer"
import { productreducer } from "./productReducer"
import { userreducer } from "./userReducer"

const reduser=combineReducers({
    user:userreducer,
    products:productreducer,
    cart:cartreducer
})

export default reduser