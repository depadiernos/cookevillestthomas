import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
  return (
    <Menu>
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
    </Menu>
  )
}

const NavLink = styled(Link)`
  font-size: 1em;
  text-decoration: none;
  padding: 10px;
  :hover {
    background-color: #262161;
    color: white;
  }
`
