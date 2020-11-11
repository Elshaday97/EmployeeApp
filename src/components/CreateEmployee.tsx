import React from 'react';
import { connect } from 'react-redux';
import {Dispatch} from "redux";
import * as actionCreators from '../store/actions/employeeActions';
import { IEmployee } from '../store/interfaces/interfaces';
import Button from './StyledComponents/Button';
import HeaderText from './StyledComponents/HeaderText';
import Input from './StyledComponents/Input';
import DatePicker from "react-datepicker";

export interface createEmployeeProps {
    onCreate: (newEmployee: IEmployee) => void,
   // employees: [],
}
 
const CreateEmployee: React.FC<createEmployeeProps | any> = ({onCreate, employees}) => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [birthDate, setBirthDate] = React.useState(new Date());
  const [gender, setGender] = React.useState("");
  const [salary, setSalary] = React.useState(Number);

 
  const onSubmit =( e: React.FormEvent) => {
    e.preventDefault();
          const newEmployee: IEmployee = {
            _id: employees._id,
            firstName,
            lastName,
            birthDate,
            gender,
            salary
    
          };  
        console.log(newEmployee)
        onCreate(newEmployee);
        window.location.href = ('/');
     }
    return (
        <>
        <HeaderText>
          Create New Employee
        </HeaderText>
        <form onSubmit={onSubmit}>
          <label>First Name:</label>
          <Input type="text" value={firstName}  onChange={e => setFirstName(e.target.value)} />
          <label>Last Name:</label>
          <Input type="text" value={lastName}  onChange={e => setLastName(e.target.value) } />
          <label>Date of Birth</label>
          <DatePicker selected={birthDate}  onChange={(date: any) => setBirthDate(date)} />
          <label>Gender:</label>
          <Input type="text" value={gender} onChange={e => setGender(e.target.value)} />
          <label>Salary:</label>
          <Input type="text" value={salary}  onChange={e => setSalary(+e.target.value)}/>
          <Button type="submit">Create</Button>
        </form>
        </>
      );
}

const mapStateToProps = (state: any) =>{
  return {
    employees: state.employees
  }
}


const mapDispatchToProps = (dispatch: Dispatch): createEmployeeProps => {
  return {
    onCreate: async(newEmployee: any) => dispatch(await actionCreators.createEmployee(newEmployee))
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee) ;