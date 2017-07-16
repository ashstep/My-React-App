import React, {Component} from 'react'
import '../App.css'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return(
      <div>
        <div class="page-header row">this is the nav bar</div>
        <Link to="/projects" className="col-md-4">Projects</Link>
        <Link to="/contact" className="col-md-4">Contact Me!</Link>
        <Link to="/home" className="col-md-4">Home</Link>
      </div>
    );
  }
}
