export const GET_EMPLOYEES = 'GET_EMPLOYEES';
export const CREATE_EMPLOYEE = 'CREATE_EMPLOYEE';
export const UPDATE_EMPLOYEES = 'UPDATE_EMPLOYEES';
export const DELETE_EMPLOYEES = 'DELETE_EMPLOYEES';

interface GetAction {
    type: typeof GET_EMPLOYEES,
    payload: any
}
interface CreateAction {
    type: typeof CREATE_EMPLOYEE,
    payload: any
}
interface UpdateAction {
    type: typeof UPDATE_EMPLOYEES,
    payload: any
}
interface DeleteAction {
    type: typeof DELETE_EMPLOYEES,
    payload: any
}

export type CounterActionTypes = GetAction | CreateAction | UpdateAction | DeleteAction;