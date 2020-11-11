import {createStore } from 'redux';
import employeeReducer from "./reducer/employeeReducer";
export type AppState = ReturnType<typeof employeeReducer> 
export const configureStore = () => {
    const store = createStore(employeeReducer);
    return store;
}

