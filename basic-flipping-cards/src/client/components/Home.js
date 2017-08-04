import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/cards.css'

import Card from './sub-components/Card'

export default class Home extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <h1 className="title">
            Testing react static build run
          </h1>
          <div className="col-sm-10 col-sm-offset-1">
            <Card />
            <div className="col-md-4 col-sm-6">
              <div className="card-container">
                <div className="card">
                  <div className="front">
                    <div className="cover">
                      <img src="https://ct-freebies.herokuapp.com/images/rotating_card_thumb.png" />
                    </div>
                    <div className="user">
                      <img className="img-circle" src="https://ct-freebies.herokuapp.com/images/rotating_card_profile2.png" />
                    </div>
                    <div className="content">
                      <div className="main">
                        <h3 className="name">
                          Andrew Mike
                        </h3>
                        <p className="profession">
                          Web Developer
                        </p>
                        <h5>
                          <i className="fa fa-map-marker fa-fw text-muted"></i>Bucharest, Romania
                        </h5>
                        <h5>
                          <i className="fa fa-building-o fa-fw text-muted"></i>Creative Tim Inc.
                        </h5>
                        <h5>
                          <i className="fa fa-envelope-o fa-fw text-muted"></i>mike@creative-tim.com
                        </h5>
                      </div>
                      <div className="footer">
                        <div className="rating">
                          <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="back">
                    <div className="header">
                      <h5 className="motto">
                        "To be or not to be, this is my awesome motto!"
                      </h5>
                    </div>
                    <div className="content">
                      <div className="main">
                        <h4 className="text-center">
                          Experince
                        </h4>
                        <p>
                          Mike was working with our team since 2012.
                        </p>
                        <h4 className="text-center">
                          Areas of Expertise
                        </h4>
                        <p>
                          Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...
                        </p>
                      </div>
                    </div>
                    <div className="footer">
                      <div className="social-links text-center">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/create">Create</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card-container">
                <div className="card">
                  <div className="front">
                    <div className="cover">
                      <img src="https://ct-freebies.herokuapp.com/images/rotating_card_thumb3.png" />
                    </div>
                    <div className="user">
                      <img className="img-circle" src="https://ct-freebies.herokuapp.com/images/rotating_card_profile.png" />
                    </div>
                    <div className="content">
                      <div className="main">
                        <h3 className="name">
                          Inna Corman
                        </h3>
                        <p className="profession">
                          Product Manager
                        </p>
                        <h5>
                          <i className="fa fa-map-marker fa-fw text-muted"></i>Paris, France
                        </h5>
                        <h5>
                          <i className="fa fa-building-o fa-fw text-muted"></i>Creative Tim Inc.
                        </h5>
                        <h5>
                          <i className="fa fa-envelope-o fa-fw text-muted"></i>inna@creative-tim.com
                        </h5>
                      </div>
                      <div className="footer">
                        <div className="rating">
                          <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="back">
                    <div className="header">
                      <h5 className="motto">
                        "To be or not to be, this is my awesome motto!"
                      </h5>
                    </div>
                    <div className="content">
                      <div className="main">
                        <h4 className="text-center">
                          Experince
                        </h4>
                        <p>
                          Inna was working with our team since 2012.
                        </p>
                        <h4 className="text-center">
                          Areas of Expertise
                        </h4>
                        <p>
                          Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...
                        </p>
                      </div>
                    </div>
                    <div className="footer">
                      <div className="social-links text-center">
                        <Link to="/home">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/create">Create</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}