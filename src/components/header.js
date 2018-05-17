import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Grid from 'react-css-grid'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import Navbar from './navbar'
import logo from '../img/logo.png'

const Header = () => {
  return (
    <div>
      <HeaderGrid >
        <Logo src={logo} alt='logo'/>
        <Social>
          <DonateBtn>
            <a href='https://www.eservicepayments.com/cgi-bin/Vanco_ver3.vps?appver3=LlvaBlCXmbvIkUuFAt-bgG4n1bx7EGDfXvacmoYbpOHZrUJlPQiCC6Aznn3HQnXMDok6z3A8wOdiKHYzjfh7oNnZWltx2hpQpEq9Hc9FikrVwg6DoI1HaYuhBdu6ZZZfOAP9FdQAJOc-0hY_z1RsTxirfa8OUqd_8wtT_bKFXIw5JFP5mKoFPm1O-u1W3fe0JQrfyRl2Gi87noGl1RDR5w==&ver=3'>
              Support Our Church
            </a>
          </DonateBtn>
          <a href='https://facebook.com/saintthomasaquinascookeville'>
            <FontAwesomeIcon icon={faFacebook} size="3x"/>
          </a>
      </Social>
      </HeaderGrid>
      <Navbar/>
    </div>
  );
};

export default Header;

const HeaderGrid = styled(Grid)`
grid-template-columns: 1fr 1fr 1fr;
background: #FDFCF8;
margin: 0 !important;`

const Logo = styled.img`
display: flex;
grid-column: 2 / 3;
justify-center: center;
margin: 0 auto;
max-width: 350px;`

const Social = styled.div `
display:flex;
margin-right: 10px;
position: absolute;`

const DonateBtn = styled.button `
background: #EF9F21;
height: 35px;
width: 200px;
border: none;
vertical-align: middle;
a {
  text-decoration: none;
  color: white;
}
`
