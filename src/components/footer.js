import React, {Component} from 'react'
import styled from 'styled-components'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <CenterP>
          <strong>St. Thomas Aquinas Catholic Church</strong><br/>
          421 North Washington Avenue, Cookeville, TN 38501<br/>
        </CenterP>
        <CenterP>
          Phone: 931-526-2575<br/>
          Fax: 931-526-5869<br/>
          Email:stthomasaquinas@citlink.net
        </CenterP>
      </div>
    );
  }
}

const CenterP = styled.p `
    text-align: center;
    color:;
`