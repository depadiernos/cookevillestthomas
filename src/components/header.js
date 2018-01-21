import React, {Component} from 'react';
import styled from 'styled-components';
import Grid from 'react-css-grid'
import logo from '../img/logo.png'

export default class Header extends Component {
  render() {
    return (
      <div>
        <HeaderGrid >
          <SearchDiv/>
          <Logo/>
          <Social>
            <a href='https://facebook.com/saintthomasaquinascookeville'>
              <FacebookBtn/>
            </a>
            <a
              href='https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=LlvaBlCXmbvIkUuFAt-bgG4n1bx7EGDfXvacmoYbpOHZrUJlPQiCC6Aznn3HQnXMDok6z3A8wOdiKHYzjfh7oNnZWltx2hpQpEq9Hc9FikrVwg6DoI1HaYuhBdu6ZZZfOAP9FdQAJOc-0hY_z1RsTxirfa8OUqd_8wtT_bKFXIw5JFP5mKoFPm1O-u1W3fe0JQrfyRl2Gi87noGl1RDR5w==&ver=3'>
              <DonateBtn>Support Our Church</DonateBtn>
            </a>
          </Social>
        </HeaderGrid>
        <Nav>
          <li>
            <NavLink href="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="/about">
              About Our Church
            </NavLink>
          </li>
          <li>
            <NavLink href="/community">
              Join Our Community
            </NavLink>
          </li>
          <li>
            <NavLink href="/events">
              Bulletin & Events
            </NavLink>
          </li>
          <li>
            <NavLink href="/growth">
              Spiritual Growth
            </NavLink>
          </li>
          <li>
            <NavLink href="/contact">
              Contact Us
            </NavLink>
          </li>
        </Nav>
      </div>
    );
  }
};

const HeaderGrid = styled(Grid)`
background: #FDFCF8;
margin: 0 !important;`

const Logo = styled
  .img
  .attrs({src: logo, alt: "logo"})`
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

const NavLink = styled.a`
font-size: 1em;`

const Social = styled.div `
float: right;
margin-right: 10px;`

const DonateBtn = styled.button `
background: #EF9F21 !important;
color: white !important;
font-size: 17px;`

const FacebookBtn = styled.button `
height: 35px;`

const SearchDiv = styled.input `
max-width: 300px;
height: 35px;
button { 
    background: #EF9F21 !important;
}`