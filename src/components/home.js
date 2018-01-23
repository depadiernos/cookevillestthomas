import React, { Component } from 'react';
import styled from 'styled-components'
import Events from './events'
import Readings from './readings'
import Prayers from './prayers'
import Bulletin from './bulletin'

export default class Home extends Component {
  render() {
    return (
      <div>
        <NewsContainer>
          Latest Events, Announcements or Prayer Petition
        </NewsContainer>
        <CardContainer>
          <Events/>
          <Readings/>
          <Prayers/>
        </CardContainer>
        <Bulletin/>
        <InfoContainer>

        </InfoContainer>
      </div>
    )
  }
}

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1000px;
  margin: 0 auto;
  grid-gap: 10px;
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    justify-items: center;
    div {
      width: 80%;
    }
}
`

const NewsContainer = styled.div`
  width: calc(100% - 20px);
  height: 200px;
  border: 1px solid;
  margin: 10px auto;
`

const InfoContainer = styled.div`
  width: calc(100% - 20px);
  height: 200px;
  border: 1px solid;
  margin: 10px auto;
`