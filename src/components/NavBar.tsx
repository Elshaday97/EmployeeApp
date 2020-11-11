import * as React from 'react';
import {Link} from "react-router-dom";
import Navigation from './StyledComponents/Navigation';
export const NavBar: React.FC<{}> = () => {
    return (
    <>
        <Navigation>
            <ul>
            <li>
            <Link to="/"><h3>Employee Web App</h3></Link>
            </li>
                <li>
                <Link to="/">Employee List</Link>
                </li>
                <li>
                <Link to="/create-employee">Create Employee</Link>
                </li>
              
            </ul>
           
           
        </Navigation>
    </>
    );
} 