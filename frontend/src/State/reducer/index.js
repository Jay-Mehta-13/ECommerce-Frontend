import { combineReducers } from "redux"
import { productreducer } from "./productReducer"
import { userreducer } from "./userReducer"

const reduser=combineReducers({
    user:userreducer,
    products:productreducer
})

export default reduser