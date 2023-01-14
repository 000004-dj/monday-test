import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

let rootReducer = combineReducers({
    counterReducer: counterReducer
})


export const store: any  = createStore(rootReducer)

// store.subscribe(()=>{})

export type AppStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store

