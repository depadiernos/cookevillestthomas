import React, { Component } from 'react';
import Card from './card';


class Prayers extends Component {
  render() {
    return (
      <Card header="Prayer List">
        <div>
          <p>
            Today
            <br/>
            Some parishioners
          </p>
          <span>Read more...</span>
        </div>
      </Card>
    )
  }
}

export default Prayers;