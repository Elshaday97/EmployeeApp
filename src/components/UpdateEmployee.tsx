import React from 'react';
import { connect } from 'react-redux';
import {Dispatch} from "redux";
import {match} from "react-router-dom";
import * as actionCreators from '../store/actions/employeeActions';
import { IEmployee } from '../store/interfaces/interfaces';
import Button from './StyledComponents/Button';
import HeaderText from './StyledComponents/HeaderText';
import Input from './StyledComponents/Input';
import axios from "axios";
const baseURL = "http://localhost:8000/employee/"

interface DetailParams {
  id: string;
}

interface DetailProps {
  match?: match<DetailParams>

}

export interface updateEmployeeProps {
  onUpdate: (newEmployee: IEmployee, matchID: string) => void,
  //employees: []
}
 
const UpdateEmployee: React.FC<updateEmployeeProps & DetailProps> = (props) => {

  const [birthDate, setBirthDate] = React.useState(new Date());
  const [emp, setEmp] = React.useState({
    _id: "",
    firstName: "",
    lastName: "",
    birthDate,
    gender: "",
    salary: 0
  });
  const matchID = props.match?.params.id; //get the id from url 
  React.useEffect(() => {
    axios.get(baseURL + matchID)
    .then(res => setEmp(res.data))
    .catch(err => console.log("Error" + err));
  }, [])
  const onSubmit =( e: React.FormEvent) => {
    e.preventDefault();
    const newEmployee: IEmployee = {
      _id: props.match?.params.id,
      firstName: emp.firstName,
      lastName: emp.lastName,
      birthDate: emp.birthDate,
      gender: emp.gender,
      salary: emp.salary
  }
          props.onUpdate(newEmployee, emp._id);
        window.location.href = ('/');
      }
    return (
      <>
      <HeaderText>
        Update Employee Information
      </HeaderText>
      <form onSubmit={onSubmit}>
        <label>First Name:</label>
        <Input type="text" value={emp.firstName}  onChange={e => setEmp({...emp, firstName: e.target.value})} />
        <label>Last Name:</label>
        <Input type="text" value={emp.lastName}  onChange={e => setEmp({...emp, lastName: e.target.value}) } />
        <label>Date of Birth</label>
        <input type="date" />
        <br />
        <label>Gender:</label>
        <Input type="text" placeholder="M or F" value={emp.gender} onChange={e => setEmp({...emp, gender: e.target.value}) } />
        <label>Salary:</label>
        <Input type="number" value={ emp.salary}  onChange={e => setEmp({...emp, salary: +e.target.value})}/>
        <Button type="submit">Update</Button>
      </form>
      </>
      );
}

const mapStateToProps = (state: any) =>{
  return {
    employees: state.employees
  }
}


const mapDispatchToProps = (dispatch: Dispatch): updateEmployeeProps => {
  return {
    onUpdate: async(newEmployee: any, id:string) => dispatch(await actionCreators.updateEmployee(newEmployee, id))
  }
} 
 
export default connect(mapStateToProps, mapDispatchToProps)(UpdateEmployee);