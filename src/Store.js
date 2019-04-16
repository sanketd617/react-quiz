import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import AppReducer from "./reducers/AppReducer";
import QuizReducer from "./reducers/QuizReducer";

export default createStore(
    combineReducers({
        app: AppReducer,
        quiz: QuizReducer
    }),
    applyMiddleware(thunk)
)
