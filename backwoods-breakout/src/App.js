import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'; 
import {NavLink} from 'react-router-dom'; 

const Site = styled.div`
  width: 100%; 
  height: auto; 
  border: 1px solid black;
  font-family: 'Ranga', cursive;
`

const NavBox = styled.div`
  width: 100%
  height: auto;
  border: 1px solid red;
  background: #2d2b29; 
`
const NavBar = styled.section`
  width: 60%; 
  height: auto; 
  display: flex; 
  justify-content: space-evenly; 
`
const NavItem = styled(NavLink)`
  font-size: 25px; 
  text-decoration: none; 
  color: white;  
`

class App extends Component {
  render() {
    return (
      <Site>
        <NavBox>
          <NavBar>
            <NavItem to="/">
              HOME
            </NavItem>
            <NavItem to="/">
              PRICING
            </NavItem>
            <NavItem to="/">
              RESERVATIONS
            </NavItem>
            <NavItem to="/">
              ROOMS
            </NavItem>
            <NavItem to="/">
              LOCATION
            </NavItem>
          </NavBar>
        </NavBox>
      </Site>
    );
  }
}

export default App;
