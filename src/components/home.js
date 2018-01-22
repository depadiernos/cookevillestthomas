import React, { Component } from 'react';
import styled from 'styled-components'
import Events from './events'
import Readings from './readings'
import Prayers from './prayers'

export default class Home extends Component {
  render() {
    return (
      <div>
        <CardContainer>
          <Events/>
          <Readings/>
          <Prayers/>
        </CardContainer>
      </div>
    )
  }
}

const CardContainer = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
max-width: 1000px;
margin: 0 auto;
`