import { combineReducers } from "redux"
import { userreducer } from "./userReducer"

const reduser=combineReducers({
    user:userreducer
})

export default reduser