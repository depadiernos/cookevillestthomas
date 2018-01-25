import React, {Component} from 'react'
import styled from 'styled-components'

export default class Card extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
      <SquareCard>
        <Header>
          {this.props.header}
        </Header>
        <Dashes/>
        <div>
          {this.props.children}
        </div>
      </SquareCard>
    )
  }
}

const SquareCard = styled.div `
  border: 1px solid #dcdcdc;
  max-width: 300px;
  margin: 10px;
  padding: 5px;
  background-color: #f8f9fe;
  h3 {
    color: #262161;
  }
  div {
    color: gray;
  }
`
const Header = styled.h3`
  text-transform: uppercase;
  text-align: center;
`
const Dashes = styled.hr`
  border-top: dashed 1px #dcdcdc;
`
