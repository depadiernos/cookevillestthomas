import React, { Component } from 'react'
import Map from 'google-map-react'

const Here = ({text}) => <div>{text}</div>

class Location extends Component {
  render() {
    return (
      <Map
        bootstrapURLKeys={{}}
        defaultCenter={{lat:36.169, lng: -85.5001775}}
        defaultZoom={15}
      >
        <Here
          lat={36.1690}
          lng={-85.498198}
          text={'Saint Thomas Aquinas'}
        />
      </Map>
    )
  }
}

export default Location