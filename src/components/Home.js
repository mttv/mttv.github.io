import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

import LogoImg from '../images/logo.png'
import ClipsIcon from '../images/icon.svg'
import BttvImg from '../images/bttv.png'
import Slider_1 from '../images/screen.png'
import Slider_2 from '../images/screen_2.png'
import Slider_3 from '../images/screen_3.png'
import Slider_4 from '../images/screen_4.png'

export default class Home extends Component {

    componentDidMount() {
        $("#home-nav a").click((event) => {
            $("#home-nav a").removeClass("active")
            const id = $(event.target).attr("id")
            $("#" + id).addClass("active")
        })
    }

    render() {
        return(
            <div id="home-page">
                <div className="bg-image img-fluid">
                        <img className="logo" src={LogoImg} alt="" />
                    <p className="about-txt">MTTV - desktop app that allows you to watch your favourites Twitch streams with new features.</p>
                    <div className="options">
                        <button type="button" data-toggle="modal" data-target="#download-options" className="btn download">Download</button>
                        <Link to="/demo" className="btn demo">Live Demo</Link>
                    </div>
                </div>
                <ul id="home-nav" className="nav home-nav justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" href="#1" id="1-nav">What's in the box?</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#2" id="2-nav">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#3" id="3-nav">Releases schedule</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#4" id="4-nav">Get started</a>
                    </li>
                </ul>
                <div className="container">
                    <div id="1" className="heading">
                        What's in the box?
                        <hr />
                    </div>
                    <div className="card-deck">
                        <div className="card">
                            <i className="fas fa-rocket box-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title">Speed</h5>
                                <p className="card-text">Fast and smooth 60fps experience.</p>
                            </div>
                        </div>
                        <div className="card">
                            <i className="fas fa-shield-alt box-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title">Security</h5>
                                <p className="card-text">All your data is encrypted and stored locally on your desktop.</p>
                            </div>
                        </div>
                        <div className="card text-center">
                            <i className="fas fa-gift box-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title">Free</h5>
                                <p className="card-text">MTTV is fully free. No ads, no subscription fees.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-deck" style={{marginTop: "16px"}}>
                        <div className="card">
                            <i className="fas fa-search box-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title">Search</h5>
                                <p className="card-text">Look for your favourites games, streams and channels.</p>
                            </div>
                        </div>
                        <div className="card">
                            <i className="fas fa-gamepad box-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title">Games</h5>
                                <p className="card-text">Browse streams from thousands games.</p>
                            </div>
                        </div>
                        <div className="card">
                            <i className="fas fa-heart box-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title">Following</h5>
                                <p className="card-text">Follow your favourites channels and games.</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-deck" style={{marginTop: "16px"}}>
                        <div className="card">
                            <i className="fas fa-video box-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title">Videos</h5>
                                <p className="card-text">Watch past broadcasts and highlights.</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={ClipsIcon} className="box-icon img" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">Clips</h5>
                                <p className="card-text">Watch latest clips from past broadcasts.</p>
                            </div>
                        </div>
                        <div className="card">
                            <i className="fas fa-cogs box-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title">Customization</h5>
                                <p className="card-text">Customize appearance and other aspects of an app.</p>
                            </div>
                        </div>
                    </div>
                    <div id="2" className="heading">
                        Features
                        <hr />
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={Slider_1} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={Slider_2} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={Slider_3} alt="Third slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={Slider_4} alt="Fourth slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <ul className="list-group">
                                <li className="list-group-item" style={{marginTop: "0"}}>
                                    <h5>Multiple streams</h5>
                                    <i className="fas fa-window-restore feature-icon"></i>
                                    <p>Watch up to 4 streams at the same time. You can choose live channels easily with drag and drop menu.</p>
                                </li>
                                <li className="list-group-item">
                                    <h5>Window mode</h5>
                                    <i className="fas fa-window-maximize feature-icon"></i>
                                    <p>Watch stream in external window if you are not able to watch in app.</p>
                                </li>
                                <li className="list-group-item">
                                    <h5>BetterTTV</h5>
                                    <div className="feature-icon bttv">
                                        <img src={BttvImg} className="bttv" alt="" />
                                    </div>
                                    <p>Full support for BetterTTV and it's features.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="3" className="heading">
                        Releases schedule
                        <hr />
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Public Alpha - Winter 2019</th>
                                <th scope="col">Public Alpha - Summer 2019</th>
                                <th scope="col">Public Beta - Late 2019</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>First public launch with initial features</td>
                                <td>Adding full clips support</td>
                                <td>Adding notification system</td>
                            </tr>
                            <tr>
                                <td>Interface upgrades and bug fixes</td>
                                <td>Mac OSX release</td>
                                <td>coming soon...</td>
                            </tr>
                        </tbody>
                    </table>
                    <div id="4" className="heading">
                        Get started
                        <hr />
                    </div>
                </div>
                <div className="get-started">
                    <div className="bg" />
                    <div className="card-deck">
                        <div className="card">
                            <span className="badge badge-primary">1</span>
                            <i className="fas fa-cloud-download-alt box-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title">Download</h5>
                                <p className="card-text">Download the latest version from our website.</p>
                            </div>
                        </div>
                        <div className="card">
                            <span className="badge badge-primary">2</span>
                            <i className="fas fa-box-open box-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title">Install</h5>
                                <p className="card-text">Insall app on your PC and configure it.</p>
                            </div>
                        </div>
                        <div className="card">
                            <span className="badge badge-primary">3</span>
                            <i className="fab fa-twitch box-icon"></i>
                            <div className="card-body">
                                <h5 className="card-title">Log In</h5>
                                <p className="card-text">Log in with twitch for the best experience.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}