import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default class Faq extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        $("#main-nav").css({"background": "rgba(100, 65, 164, 0.85)"})
    }

    componentWillUnmount() {
        $("#main-nav").removeAttr("style")
    }

    render() {
        return(
            <div className="container" style={{paddingTop: "50px"}}>
                <div className="heading">
                    MTTV Faq
                    <hr />
                </div>
                <div className="list-group list-group-flush">
                    <h3>General</h3>
                    <a href="#what-it-is" value="#what-it-is" className="list-group-item">What is MTTV?</a>
                    <a href="#for-whom" value="#for-whom" className="list-group-item">Who is it for?</a>
                    <a href="#twitch-difference" value="#twitch-difference" className="list-group-item">How is it different from Twitch?</a>
                    <a href="#device-available" value="#device-available" className="list-group-item">Is it available on my device?</a>
                </div>
                <div className="answers-container">
                    <h5 id="what-it-is">Q: What is MTTV?</h5>
                    <p>MTTV is a desktop app that allows you to watch your favourites Twitch streams with new features like multi stream, window mode and betterTTV. We are trying to transfer all main Twitch features like chatting, following, subscriptions, videos, clips and many others to deliver the best experience from our application.</p>
                    <h5 id="for-whom">Q: Who is it for?</h5>
                    <p>MTTV is for everyone who wants fast and reliable native experience with more simple and intuitive user interface. We are open for our present and future community what means that you can be involved into our application life.</p>
                    <h5 id="twitch-difference">Q: How is it different from <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer">Twitch?</a></h5>
                    <p>Despite the fact that we are using similar technologies like Twitch in the end we are quite different from them. Starting from user interface and ending with application functionality. On top of that, MTTV is free and we hope it will stay free — no ads, no subscription fees. Also our projects are open source, and we welcome other developers to create their own apps.</p>
                    <h5 id="device-available">Q: Is it available on my device?</h5>
                    <p>For now our application is available only on <b>Windows 7 and later.</b> Later it also will be available on <b>OSX.</b> Also there is a little <Link to="/demo">demo</Link> of application on our website</p>
                </div>
            </div>
        )
    }
}