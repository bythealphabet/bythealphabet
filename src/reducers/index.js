import {combineReducers} from "redux"
import articleReducer from './articleReducer'
import authReducer from './authReducer'
import {reducer} from 'redux-form'


export default combineReducers({articles: articleReducer, form: reducer, auth: authReducer})