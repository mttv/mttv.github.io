import React, { Component } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'
import withReactContent from 'sweetalert2-react-content'
import $ from 'jquery'

export default class Contacts extends Component {

    state = {
        subject: {
            input: "",
            valid: false
        },
        email: {
            input: "",
            valid: false
        },
        message: {
            input: "",
            valid: false
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
        $("#main-nav").css({"background": "rgba(100, 65, 164, 0.85)"})
    }

    componentWillUnmount() {
        $("#main-nav").removeAttr("style")
    }

    inputHandler = (event) => {
        this.setState({
            [event.target.id]: {
                ...this.state[event.target.id],
                input: event.target.value
            }
        })
        setTimeout(() => {
            this.formHandler()
        }, 500)
    }

    formHandler = () => {
        const { subject, email, message } = this.state
        const emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
        if (subject.input.length >= 5) {
            this.setState({
                subject: {
                    ...this.state.subject,
                    valid: true
                }
            })
            $("#subj-err").removeAttr("style")
        } else {
            this.setState({
                subject: {
                    ...this.state.subject,
                    valid: false
                }
            })
            $("#subj-err").css({"display": "block"})
        }
        if (emailFilter.test(email.input)) {
            this.setState({
                email: {
                    ...this.state.email,
                    valid: true
                }
            })
            $("#email-err").removeAttr("style")
        } else {
            this.setState({
                email: {
                    ...this.state.email,
                    valid: false
                }
            })
            $("#email-err").css({"display": "block"})
        }
        if (message.input.length >= 20) {
            this.setState({
                message: {
                    ...this.state.message,
                    valid: true
                }
            })
            $("#msg-err").removeAttr("style")
        } else {
            this.setState({
                message: {
                    ...this.state.message,
                    valid: false
                }
            })
            $("#msg-err").css({"display": "block"})
        }
    }

    sendHandler = () => {
        const { subject, email, message } = this.state
        this.formHandler()
        if (subject.valid && email.valid && message.valid) {
            //http://localhost/mttv-website/php/
            //https://mttv-web-app.herokuapp.com/
            const serverUrl = "https://mttv-web-app.herokuapp.com/"
            const params = {
                subject: subject.input,
                email: email.input,
                message: message.input
            }

            const data = new FormData()
            data.append("content", JSON.stringify(params))
            fetch(serverUrl + "send-mail", {
                method: "POST",
                body: data
            }).then(r => r.json())
                .then(r => {
                    console.log(r)
                    const SuccessAlert = withReactContent(Swal)
                    SuccessAlert.fire({
                        type: "success",
                        title: 'Thanks for your message!',
                        text: 'We will reply to your message as soon as we can.',
                        showCancelButton: false
                    })
                }).catch(e => {
                    console.log(e)
                    const ErrorAlert = withReactContent(Swal)
                    ErrorAlert.fire({
                        type: "error",
                        title: "Oops!An error occurred while sending the message.",
                        text: 'Please try again later',
                        showCancelButton: false
                    })
                })

        }
    }

    render() {
        return(
            <div className="container" style={{paddingTop: "50px"}}>
                <div className="heading">
                    Contacts
                    <hr />
                </div>
                <div className="contact-form">
                    <div className="form-group">
                        <label htmlFor="subject">Subject of the message</label>
                        <input type="text" className="form-control" id="subject" value={this.state.subject.input} onChange={this.inputHandler} />
                        <div className="invalid-feedback" id="subj-err">Please specify the subject of the message.</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Contact email</label>
                        <input type="email" className="form-control" id="email" value={this.state.email.input} onChange={this.inputHandler} />
                        <div className="invalid-feedback" id="email-err">Email is not valid.</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Your message</label>
                        <textarea className="form-control" id="message" rows="3" cols="3"  style={{resize: "none"}} value={this.state.message.input} onChange={this.inputHandler} />
                        <div className="invalid-feedback" id="msg-err">Please enter your message.</div>
                    </div>
                    <button className="btn btn-primary btn-send" onClick={this.sendHandler}>Send</button>
                </div>
            </div>
        )
    }

}