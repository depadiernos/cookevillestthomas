import React, { Component } from 'react';
import Card from './card';


class Events extends Component {
  render() {
    return (
      <Card header='Upcoming Events'>
        <div>
          <p>
            Today
            <br/>
            Some event
          </p>
          <span>Read more...</span>
        </div>
      </Card>
    )
  }
}

export default Events