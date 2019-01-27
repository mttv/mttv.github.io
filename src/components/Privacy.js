import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'


export default class Privacy extends Component {
    
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
                    Privacy Policy
                    <hr />
                </div>
                <div className="privacy-container">
                    <h5><small>1.</small>Introduction</h5>
                    <p>We follow all legal requirements to protect your privacy. Our Privacy Policy is a legal statement that explains how we may collect information from you, how we may share your information, and how you can limit our sharing of your information. You will see terms in our Privacy Policy that are capitalized. These terms have meanings as described in the Definitions section below.</p>
                    <h5><small>2.</small>Definitions</h5>
                    <p>"Non Personal Information" is information that is not personally identifiable to you and that we automatically collect when you access our Service with a web browser. It may also include publicly available information that is shared between you and others.</p>
                    <p>"Personally Identifiable Information" is non-public information that is personally identifiable to you and obtained in order for us to provide you within our Service. Personally Identifiable Information may include information such as your name, address, phone number, email address, and other related information that you provide to us or that we obtain about you.</p>
                    <h5><small>3.</small>Privacy Principles</h5>
                    <p>MTTV has two fundamental principles when it comes to collecting and processing private data:</p>
                    <ul>
                        <li>We don't use your data to show you ads.</li>
                        <li>We only store the data that MTTV needs to function as a secure and feature-rich service.</li>
                    </ul>
                    <h5><small>4.</small>Terms of Service</h5>
                    <p>This Privacy Policy forms part of our Terms of Service, which describes the terms under which you use our Services and which are available <Link to="/terms">here.</Link> This Privacy Policy should therefore be read in conjunction with those terms.</p>
                    <h5><small>5.</small>Information we collect</h5>
                    <p>You control the amount and type of information you provide to us when using our Service.</p>
                    <p>As a visitor, you can browse our website to find out more about our Service. You are not required to provide us with any Personally Identifiable Information as a visitor.</p>
                    <p>As a user, you may be required to provide us with Personally Identifiable Information.</p>
                    <h5><small>6.</small>Computer information collected</h5>
                    <p>When you use our Service, we automatically collect certain computer information by the interaction of your personal computer or web browser with our Service. Such information is typically considered Non Personal Information. We collect the following:</p>
                    <ul>
                        <li>Cookies<br />Our Service uses "Cookies" to identify the areas of our Service that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to personalize the Content that you see on our Service. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our Service correctly or at all. We never place Personally Identifiable Information in Cookies.</li><br />
                        <li>Automatic Information<br />We automatically receive information from your web browser or personal computer. This information includes the name of the website from which you entered our Service, if any, as well as the name of the website to which you're headed when you leave our website. This information also includes the IP address of your computer/proxy server that you use to access the Internet, your Internet Service provider name, web browser type, type of device, and computer operating system. We use all of this information to analyze trends among our Users to help improve our Service.</li>
                    </ul>
                    <h5><small>7.</small>How we use your information</h5>
                    <p>We use the information we receive from you as follows:</p>
                    <ul>
                        <li>to customize our service to fit your needs</li>
                        <li>to provide customer support</li>
                        <li>to verify your identity and prevent fraudulent transactions</li>
                        <li>to contact you</li>
                    </ul>
                    <h5><small>8.</small>Sharing information with affiliates and other third parties</h5>
                    <p>We do not sell, rent, or otherwise provide your Personally Identifiable Information to third parties for marketing purposes. We may provide your Personally Identifiable Information to affiliates that provide services to us with regards to our Service (i.e. payment processors, fraud prevention services, etc.); such affiliates will only receive information necessary to provide the respective services and will be bound by confidentiality agreements limiting the use of such information.</p>
                    <h5><small>9.</small>Data aggregation</h5>
                    <p>We retain the right to collect and use any Non Personal Information collected from your use of our Service and aggregate such data for internal analytics that improve our Service and Service as well as for use or resale to others. At no time is your Personally Identifiable Information included in such data aggregations.</p>
                    <h5><small>10.</small>Legally required releases of information</h5>
                    <p>We may be legally required to disclose your Personally Identifiable Information, if such disclosure is (a) required by subpoena, law, or other legal process; (b) necessary to assist law enforcement officials or government enforcement agencies; (c) necessary to investigate violations of or otherwise enforce our Legal Terms; (d) necessary to protect us from legal action or claims from third parties including you and/or other Members; and/or (e) necessary to protect the legal rights, personal/real property, or personal safety of our users, employees, and affiliates.</p>
                    <h5><small>11.</small>Links to other services</h5>
                    <p>Our Service may contain links to other websites that are not under our direct control. These websites may have their own policies regarding privacy. We have no control of or responsibility for linked websites and provide these links solely for the convenience and information of our visitors. You access such linked Services at your own risk. These websites are not subject to this Privacy Policy. You should check the privacy policies, if any, of those individual websites to see how the operators of those third-party websites will utilize your personal information. In addition, these websites may contain a link to Services of our affiliates. The websites of our affiliates are not subject to this Privacy Policy, and you should check their individual privacy policies to see how the operators of such websites will utilize your personal information.</p>
                    <h5><small>12.</small>Privacy Policy updates</h5>
                    <p>We reserve the right to modify this Privacy Policy at any time. You should review this Privacy Policy frequently. If we make material changes to this policy, we may notify you on our Service, by a blog post, by email, or by any method we determine. The method we choose is at our sole discretion.</p>
                    <h5><small>13.</small>Contact information</h5>
                    <p>Questions about the Privacy Policy should be sent to us via our <Link to="/contacts">contact form</Link>.</p>
                </div>
            </div>
        )
    }
}