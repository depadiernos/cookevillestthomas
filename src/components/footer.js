import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FootContainer>
      <CenterP>
        <strong>St. Thomas Aquinas Catholic Church</strong><br/>
        421 North Washington Avenue, Cookeville, TN 38501<br/>
      </CenterP>
      <CenterP>
        Phone: 931-526-2575<br/>
        Fax: 931-526-5869<br/>
        Email: stthomasaquinas@citlink.net
      </CenterP>
    </FootContainer>
  );
}

export default Footer;

const FootContainer = styled.div`
  background-color: #262161;
  padding: 10px 0;
  color: white;
`
const CenterP = styled.p `
  text-align: center;
`