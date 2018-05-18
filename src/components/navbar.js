import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <Nav>
      <li>
        <Link to='/' exact activeClassName={activeClassName}>
          Home
        </Link>
      </li>
      <li>
        <Link to='/about' activeClassName={activeClassName}>
          About Our Church
        </Link>
      </li>
      <li>
        <Link to='/community' activeClassName={activeClassName}>
          Join Our Community
        </Link>
      </li>
      <li>
        <Link to='/news' activeClassName={activeClassName}>
          Bulletin & Events
        </Link>
      </li>
      <li>
        <Link to='/growth' activeClassName={activeClassName}>
          Spiritual Growth
        </Link>
      </li>
      <li>
        <Link to='/contact' activeClassName={activeClassName}>
          Contact Us
        </Link>
      </li>
    </Nav>
  )
}

export default Navbar

const activeClassName = 'nav-item-active'

const Nav = styled('ul')`
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

const Link = styled(NavLink).attrs({
   activeClassName
 })`
  font-size: 1em;
  text-decoration: none;
  padding: 10px;
  &.${activeClassName} {
  background-color: #262161;
  color: white;
  }
  :hover {
    background-color: #262161;
    color: white;
  }
`
