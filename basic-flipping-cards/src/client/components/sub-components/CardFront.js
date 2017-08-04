import React, { Component } from 'react'

export default class CardFront extends Component {
  render () {
    return (
      <div className="front">
        <div className="cover">
          <img src="https://ct-freebies.herokuapp.com/images/rotating_card_thumb2.png" />
        </div>
        <div className="user">
          <img className="img-circle" src="https://ct-freebies.herokuapp.com/images/rotating_card_profile3.png" />
        </div>
        <div className="content">
          <div className="main">
            <h3 className="name">
              John Marvel
            </h3>
            <p className="profession">
              CEO
            </p>
            <h5>
              <i className="fa fa-map-marker fa-fw text-muted"></i>Paris, France
            </h5>
            <h5>
              <i className="fa fa-building-o fa-fw text-muted"></i>Creative Tim Inc.
            </h5>
            <h5>
              <i className="fa fa-envelope-o fa-fw text-muted"></i>john@creative-tim.com
            </h5>
          </div>
          <div className="footer">
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}