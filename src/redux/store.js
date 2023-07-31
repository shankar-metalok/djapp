import {createStore} from 'redux'
import { combineReducers } from 'redux'
import Addcart from './addcart'

const store = createStore(
    combineReducers({
        addcart:Addcart
    })
)

export default store