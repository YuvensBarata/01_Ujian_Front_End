import React, { Component } from 'react';
import "../styles/welcome.css";

class Welcome extends Component {
  render() {
    return(
        <div className = "welcome-menu">
            <h2>Halo {this.props.name}</h2>
        </div>
    );
  }
}

export default Welcome;