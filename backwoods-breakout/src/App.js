import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components'; 
import {NavLink} from 'react-router-dom'; 

const Site = styled.div`
  width: 100%; 
  height: auto; 
  border: 1px solid black;
  font-family: 'Fjalla One', sans-serif;
  background: #262626;   
`

const NavBox = styled.div`
  width: 100%
  height: auto;
  background: #2d2b29; 
  padding: 20px 0; 
`
const NavBar = styled.section`
  width: 60%; 
  height: auto; 
  display: flex; 
  justify-content: space-evenly; 
`
const NavItem = styled(NavLink)`
  font-size: 20px; 
  text-decoration: none; 
  color: white; 
  &:hover{
    animation-name: spin;
    animation-duration: 500ms;
    animation-iteration-count: 1;
    animation-timing-function: linear;
  } 
  @keyframes spin { 
    from { 
        transform: rotate(0deg);
    } to { 
        transform: rotate(360deg); 
    }
}
`
const BannerBox = styled.div`
  width: 100%; 
  height: auto; 
`
const BannerImg = styled.img`
  max-width: 100%; 
  height: auto; 
  clip-path: polygon(0 0, 100% 0, 100% 79%, 0% 100%);
`
const BannerTextBox = styled.div`
  width: 100%; 
  height: auto; 
  display: flex; 
  justify-content: center; 
  font-size: 120px; 
  color: white; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
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
        <BannerBox>
          <BannerImg src="https://images.pexels.com/photos/296890/pexels-photo-296890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
          <BannerTextBox>
            BackWoods Breakout
          </BannerTextBox>
        </BannerBox>
      </Site>
    );
  }
}

export default App;
