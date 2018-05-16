import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
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
  )
}

export default Navbar

const Nav = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  li {
    padding: 0.5em;
    a {
      color: #EF9F21;
    }
  }
`

const NavLink = styled(Link)`
  font-size: 1em;
  text-decoration: none;
  padding: 10px;
  :hover {
    background-color: #262161;
    color: white;
  }
`
