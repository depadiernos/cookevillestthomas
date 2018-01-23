import React, { Component } from 'react';
import styled from 'styled-components'

class Bulletin extends Component {
  render() {
    return (
      <BulletinContainer>
        <LeftArrow className='fa fa-arrow-left'/>
        <Squares>
          <div>
            <p>
              Week of
              <Hr/>
            </p>
            <span>25 JUN 2017</span>
          </div>
        </Squares>
        <Squares>
          <div>
            <p>
              Week of
              <Hr/>
            </p>
            <span>25 JUN 2017</span>
          </div>
        </Squares>
        <Squares>
          <div>
            <p>
              Week of
              <Hr/>
            </p>
            <span>25 JUN 2017</span>
          </div>
        </Squares>
        <RightArrow className='fa fa-arrow-right'/>
      </BulletinContainer>
    )
  }
}

export default Bulletin

const BulletinContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

const Squares = styled.div `
  border: 1px solid #dcdcdc;
  max-width: 100px;
  margin: 10px;
  padding: 5px;
  background-color: #dd4f17;
  color: white;
  text-align: center;
`
const Hr = styled.hr`
  border-top: solid 1px white;
`
const LeftArrow = styled.i`
`
const RightArrow = styled.i`
`