import React, {Component} from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Grid from 'react-css-grid'
import 'font-awesome/css/font-awesome.min.css';
import logo from '../img/logo.png'

const Header = () => {
  return (
    <div className='header'>
      <HeaderGrid >
        <Logo src={logo} alt='logo'/>
        <Social>
            <DonateBtn>
              <a
              href='https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=LlvaBlCXmbvIkUuFAt-bgG4n1bx7EGDfXvacmoYbpOHZrUJlPQiCC6Aznn3HQnXMDok6z3A8wOdiKHYzjfh7oNnZWltx2hpQpEq9Hc9FikrVwg6DoI1HaYuhBdu6ZZZfOAP9FdQAJOc-0hY_z1RsTxirfa8OUqd_8wtT_bKFXIw5JFP5mKoFPm1O-u1W3fe0JQrfyRl2Gi87noGl1RDR5w==&ver=3'>
                Support Our Church
              </a>
            </DonateBtn>
            <FacebookBtn>
              <a href='https://facebook.com/saintthomasaquinascookeville'>
                <i className='fa fa-facebook' aria-hidden='true'></i>
              </a>
            </FacebookBtn>
        </Social>
      </HeaderGrid>
      <Nav>
        <li>
          <NavLink to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>
            About Our Church
          </NavLink>
        </li>
        <li>
          <NavLink to='/community'>
            Join Our Community
          </NavLink>
        </li>
        <li>
          <NavLink to='/events'>
            Bulletin & Events
          </NavLink>
        </li>
        <li>
          <NavLink to='/growth'>
            Spiritual Growth
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact'>
            Contact Us
          </NavLink>
        </li>
      </Nav>
    </div>
  );
};

export default Header;

const HeaderGrid = styled(Grid)`
background: #FDFCF8;
margin: 0 !important;`

const Logo = styled.img`
display: flex;
justify-center: center;
margin: 0 auto;
max-width: 350px;`

const Nav = styled.ul `
display: flex;
justify-content: center;
list-style-type: none;
li {
  padding: 0.5em;
  a {
    color: #EF9F21;          
  }
}`

const NavLink = styled(Link)`
font-size: 1em;`

const Social = styled.div `
display:flex;
margin-right: 10px;
position: absolute;`

const DonateBtn = styled.button `
background: #EF9F21;
height: 35px;
width: 200px;
border: none;
a {
  text-decoration: none;
  color: white;
}
`
const FacebookBtn = styled.button `
height: 35px;
width: 35px;
background-color: #3b5998;
border: none;
i {
  color: white;
}
`