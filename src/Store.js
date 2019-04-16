import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import QuizReducer from "./reducers/QuizReducer";


export default createStore(
    combineReducers({
        //app: AppReducer,
        quiz: QuizReducer
    }),

    //thunk middleware for async actions, not used in this web app currently, reserved for future.
    applyMiddleware(thunk)
)
