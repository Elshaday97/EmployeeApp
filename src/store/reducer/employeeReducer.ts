import * as actionTypes from "../actions/actionTypes";
import { IAction, IState} from "../interfaces/interfaces";

const initialState: IState = {
    employees: []
}

const employeeReducer = (state = initialState, action: IAction) => {
        switch(action.type) {
            case actionTypes.GET_EMPLOYEES:
                console.log(action.payload)
                return {...state, employees: action.payload};
            case actionTypes.CREATE_EMPLOYEE: 
                return {...state, employees: state.employees.concat(action.payload)}
            case actionTypes.DELETE_EMPLOYEES:
                return {...state, employees: state.employees.filter(employee => employee._id !== action.payload )}    
                case actionTypes.UPDATE_EMPLOYEES:
                    return {...state, employees: state.employees.map(
                        (employee) => employee.birthDate === action.payload.birthDate ? {...employee, firstName: action.payload.firstName, lastName: action.payload.lastName, birthDate: action.payload.birthDate, gender: action.payload.gender, salary: action.payload.salary} : employee) }        
            default:
                return state

        }
}


export default employeeReducer;