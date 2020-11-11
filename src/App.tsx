import React from 'react';
import {Route} from 'react-router-dom';
import {ThemeProvider} from "styled-components"
import './App.css';
import { NavBar } from './components/NavBar';
import Wrapper from './components/StyledComponents/Wrapper';
import CreateEmployee from "./components/CreateEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import EmployeeList from "./components/EmployeeList";
const theme = {
  font: 'Open sans'
}

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <NavBar />
      <Wrapper>
      <Route path="/create-employee" component={CreateEmployee} />
      <Route path="/update/:id" render={ (props) => (<UpdateEmployee {...props} />)}/>
      <Route exact path="/" component={EmployeeList} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
