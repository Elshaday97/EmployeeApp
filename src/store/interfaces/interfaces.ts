export interface IState{
    employees: Array <IEmployee>
}
export interface IAction {
    type: string,
    payload: any
}
export interface IEmployee {
    _id?: string,
    firstName: string,
    lastName: string,
    birthDate: Date,
    gender: string,
    salary: number
}