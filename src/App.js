import React, { Component } from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import $ from 'jquery'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './components/Home'
import Faq from './components/Faq'
import Demo from './components/Demo/MultiStream'
import Terms from './components/Terms'
import Privacy from './components/Privacy'
import Contacts from './components/Contacts'
import DownloadOptions from './components/DownloadOptions'
import './libs/libs.css'
import './index.css'
import './App.css'
import './components/Demo/Demo.css'
import './Media.css'

const api = require('twitch-api-v5')
api.clientID = 'lxtgfjpg12cxsvpy32vg5x7a1ie6mc'

class App extends Component {

  componentDidMount() {
    let w = $(window).scroll(() => {
      if (w.scrollTop() > 740) {
        $(".nav.home-nav").addClass("scrolled")
      } else {
        $(".nav.home-nav").removeClass("scrolled")
      }
    })
  }

  render() {
    return (
          <div className="container-fluid">
            <Nav />
            <Route path="/" exact component={props => <Home />} />
            <Route path="/faq" exact component={props => <Faq />} />
            <Route path="/contacts" exact component={props => <Contacts />} />
            <Route path= "/demo" exact component={props => <Demo api={api} />} />
            <Route path="/terms" exact component={props => <Terms />} />
            <Route path="/privacy" exact component={props => <Privacy />} />
            <DownloadOptions />
            <Footer />
          </div>
    )
  }
}

export default App
