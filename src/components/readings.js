import React, { Component } from 'react';
import moment from 'moment';
import Card from './card';


class Readings extends Component {
  render() {
    return (
      <Card header="Today's Readings">
        <div>
          <p>
            Today
            <br/>
            Some readings
          </p>
          <span>Read more...</span>
        </div>
      </Card>
    )
  }
}

export default Readings;