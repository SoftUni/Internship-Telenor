import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class CardBack extends Component {
  render () {
    return (
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
              In the project since 2011
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
    )
  }
}