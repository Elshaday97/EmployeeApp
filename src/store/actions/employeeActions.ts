//import { IEmployee } from "../interfaces/interfaces";
import * as actionTypes from "./actionTypes";
import axios from "axios";
//const baseURL = "http://localhost:8000/employee"
const herokuURL = "https://employee-redux-backend.herokuapp.com/employee"
export const getEmployeeData = async() => {
    let payload:any = []
    await axios.get(herokuURL)
    .then(res => payload=res.data)
    .catch(err => console.log("Error" + err));
    return {
        type: actionTypes.GET_EMPLOYEES,
        payload: payload
    }
}
export const createEmployee = async(newEmployee: any) => {
   await axios.post(herokuURL + "/add", newEmployee)
    .catch(err => console.log('Error' + err))
    return {
        type: actionTypes.CREATE_EMPLOYEE,
        payload: newEmployee
    }
}
export const deleteEmployee = async(id: string) => {
   await axios.delete(herokuURL + '/' + id)
          .catch(err => console.log('Error' + err))
    return {
        type: actionTypes.DELETE_EMPLOYEES,
        payload: id
    }
}

export const updateEmployee = async (newEmployee:any, id:string) => {
    await axios.put(herokuURL + '/update/' + id, newEmployee)
          .catch(err => console.log('Error' + err))
    return {
        type: actionTypes.UPDATE_EMPLOYEES,
        payload: newEmployee
    }

}