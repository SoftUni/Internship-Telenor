import React, { Component } from 'react'

import CardFront from './CardFront'
import CardBack from './CardBack'

export default class Card extends Component {
  render () {
    return (
      <div className="col-md-4 col-sm-6">
        <div className="card-container">
          <div className="card">
            <CardFront />
            <CardBack />
          </div>
        </div>
      </div>
    )
  }
}