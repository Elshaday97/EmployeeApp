import React from 'react';
import { connect } from "react-redux";
import {Dispatch} from "redux";
import {Link} from "react-router-dom";
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import * as actionCreators from '../store/actions/employeeActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from './StyledComponents/Button';
import HeaderText from './StyledComponents/HeaderText';
import { AppState } from '../store/store';
import { IAction, IEmployee } from '../store/interfaces/interfaces';

//material ui styles
const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }),
)(TableRow);


const useStyles = makeStyles({
  table: {
    margin: "10% auto",
    width: "90%"
  },
});

export interface EmployeeListProps {
    onGet: () => void,
    onDelete: () => void,
   // employees: [],
}
 
const EmployeeList: React.FC<EmployeeListProps | any> = ({onGet, onDelete, employees}) => {
    const classes = useStyles();
    React.useEffect(()=> {
      onGet();
    }, [])
    return ( 
        <>
        <HeaderText>
        Showing Employee Data
        </HeaderText>
        <TableContainer >
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Employee Name</StyledTableCell>
            <StyledTableCell align="center">Date of Birth</StyledTableCell>
            <StyledTableCell align="center">Gender</StyledTableCell>
            <StyledTableCell align="center">Salary</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee: IEmployee) =>(
            <StyledTableRow key={employee._id}>
            <StyledTableCell align="center">
              {employee.firstName + " " + employee.lastName}
            </StyledTableCell>
          <StyledTableCell align="center">{employee.birthDate}</StyledTableCell>
          <StyledTableCell align="center">{employee.gender}</StyledTableCell>
          <StyledTableCell align="center">${employee.salary}</StyledTableCell>
            <StyledTableCell align="center"><Link to={"/update/"+employee._id}><Button>Edit</Button></Link>  </StyledTableCell>
            <StyledTableCell align="center"> <Button onClick={() => onDelete(employee._id) }>Delete</Button></StyledTableCell>
            </StyledTableRow>

          ))}
        </TableBody>
            </Table>
    </TableContainer>
        </>
     );
}
const mapStateToProps = (state: AppState) =>{
  return {
    employees: state.employees
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onDelete: async (id:string) => dispatch(await actionCreators.deleteEmployee(id)),
    onGet: async() => dispatch (await actionCreators.getEmployeeData()) 
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);