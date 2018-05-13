import React, { Component } from 'react';
import styled from 'styled-components'

const Bulletin = () => {
    return (
      <div>
      <BulletinHeader>Weekly Bulletin</BulletinHeader>
      <BulletinContainer>
        <LeftArrow className='fa fa-arrow-left'/>
        <Squares>
          <div>
            <p>
              Week of
            </p>
            <Hr/>
            <span>25 JUN 2017</span>
          </div>
        </Squares>
        <Squares>
          <div>
            <p>
              Week of
            </p>
            <Hr/>
            <span>25 JUN 2017</span>
          </div>
        </Squares>
        <Squares>
          <div>
            <p>
              Week of
            </p>
            <Hr/>
            <span>25 JUN 2017</span>
          </div>
        </Squares>
        <RightArrow className='fa fa-arrow-right'/>
      </BulletinContainer>
      <CalendarSelector> <i className='fa fa-calendar'/> Select Bulletin from calendar</CalendarSelector>
      </div>
    )
}

export default Bulletin

const BulletinHeader = styled.div`
  color: #262161;
  text-transform: uppercase;
  text-align: center;
  font-size: 2rem;
  padding: 3rem 0 1rem;
`

const BulletinContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  margin-top: 1rem;
`

const Squares = styled.div `
  border: 1px solid #dcdcdc;
  max-width: 100px;
  padding: 20px 10px 30px;
  background-color: #dd4f17;
  color: white;
  text-align: center;
`
const Hr = styled.hr`
  border-top: solid 1px white;
`
const LeftArrow = styled.i`
  color: #dd4f17;
  font-size: 3rem;
  justify-self: end;

`
const RightArrow = styled.i`
  color: #dd4f17;
  font-size: 3rem;
  justify-self: start;
`
const CalendarSelector = styled.div`
  color: #dd4f17;
  text-align: center;
  font-size: 1.5rem;
  padding: 1rem;
`
