import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import $ from 'jquery'

export default class Terms extends Component {

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
                    Terms of Service
                    <hr />
                </div>
                <div className="terms-container">
                    <h5><small>1.</small>Introduction</h5>
                    <p>PLEASE READ THESE TERMS OF SERVICE CAREFULLY. By visiting our site and/or using our service, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service”, “Terms”), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.</p>
                    <p>Please read these Terms of Service carefully before accessing or using our website. By accessing or using any part of the site, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services. If these Terms of Service are considered an offer, acceptance is expressly limited to these Terms of Service.</p>
                    <p>Any new features or tools which are added to the service shall also be subject to the Terms of Service. You can review the most current version of the Terms of Service at any time on this page. We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes. Your continued use of or access to the website following the posting of any changes constitutes acceptance of those changes.</p>           
                    <h5><small>2.</small>User terms</h5>
                    <p>Our services are not available to persons under the age of 13. If you are between the ages of 13 and 18 (or between 13 and the age of legal majority in your jurisdiction of residence), you may only use our services under the supervision of a parent or legal guardian who agrees to be bound by these Terms of Service.</p>
                    <p>BY DOWNLOADING, INSTALLING, OR OTHERWISE USING MTTV SERVICES, YOU REPRESENT THAT YOU ARE AT LEAST 13 YEARS OF AGE, THAT YOUR PARENT OR LEGAL GUARDIAN AGREES TO BE BOUND BY THESE TERMS OF SERVICE IF YOU ARE BETWEEN 13 AND THE AGE OF LEGAL MAJORITY IN YOUR JURISDICTION OF RESIDENCE, AND THAT YOU HAVE NOT BEEN PREVIOUSLY REMOVED FROM OR PROHIBITED FROM RECEIVING MTTV SERVICES.</p>
                    <p>You may not use our service for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).</p>
                    <p>You must not transmit any worms or viruses or any code of a destructive nature.</p>
                    <p>A breach or violation of any of the Terms will result in an immediate termination of your Services.</p>
                    <h5><small>3.</small>Privacy Policy</h5>
                    <p>Your privacy is important, so please see our <Link to="/privacy">Privacy Policy</Link> for information relating to how we collect, use, and disclose your personal information.</p>
                    <h5><small>4.</small>Conditions</h5>
                    <p>We reserve the right to refuse service to anyone for any reason at any time.</p>
                    <p>You understand that your content, may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices.</p>
                    <p>The headings used in this agreement are included for convenience only and will not limit or otherwise affect these Terms.</p>
                    <h5><small>5.</small>Accuracy, completeness, and timeleness of information</h5>
                    <p>We are not responsible if information made available on this site is not accurate, complete, or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.</p>
                    <p>This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only. We reserve the right to modify the contents of this site at any time, but we have no obligation to update any information on our site. You agree that it is your responsibility to monitor changes to our site.</p>
                    <h5><small>6.</small>Modifications to the service and prices</h5>
                    <p>Prices and/or fees for our Service are subject to change without notice.</p>
                    <p>We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.</p>
                    <p>We shall not be liable to you or to any third-party for any modification, price change, suspension, or discontinuance of the Service.</p>
                    <h5><small>7.</small>Optional tools</h5>
                    <p>We may provide you with access to third-party tools over which we neither monitor nor have any control nor input.</p>
                    <p>You acknowledge and agree that we provide access to such tools ”as is” and “as available” without any warranties, representations or conditions of any kind and without any endorsement. We shall have no liability whatsoever arising from or relating to your use of optional third-party tools.</p>
                    <p>Any use by you of optional tools offered through the site is entirely at your own risk and discretion and you should ensure that you are familiar with and approve of the terms on which tools are provided by the relevant third-party provider(s).</p>
                    <p>We may also, in the future, offer new services and/or features through the website (including, the release of new tools and resources). Such new features and/or services shall also be subject to these Terms of Service.</p>
                    <h5><small>8.</small>Third-party links</h5>
                    <p>Certain content and services available via our Service may include materials from third-parties.</p>
                    <p>Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites, or for any other materials, products, or services of third-parties.</p>
                    <p>We are not liable for any harm or damages related to the purchase or use of goods, services, resources, content, or any other transactions made in connection with any third-party websites. Please review carefully the third-party's policies and practices and make sure you understand them before you engage in any transaction. Complaints, claims, concerns, or questions regarding third-party products should be directed to the third-party.</p>
                    <h5><small>9.</small>Errors, Inaccuracies and Omissions</h5>
                    <p>Occasionally there may be information on our site or in the Service that contains typographical errors, inaccuracies or omissions that may relate to descriptions, pricing, promotions, offers, and availability. We reserve the right to correct any errors, inaccuracies or omissions, and to change or update information or cancel orders if any information in the Service or on any related website is inaccurate at any time without prior notice (including after you have submitted your order).</p>
                    <p>We undertake no obligation to update, amend or clarify information in the Service or on any related website, including without limitation, pricing information, except as required by law. No specified update or refresh date applied in the Service or on any related website, should be taken to indicate that all information in the Service or on any related website has been modified or updated.</p>
                    <h5><small>10.</small>Prohibited uses</h5>
                    <p>In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</p>
                    <h5><small>11.</small>Disclaimer of warranties</h5>
                    <p>We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.</p>
                    <p>We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.</p>
                    <p>You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.</p>
                    <p>You expressly agree that your use of, or inability to use, the service is at your sole risk. The service and all products and services delivered to you through the service are (except as expressly stated by us) provided 'as is' and 'as available' for your use, without any representation, warranties or conditions of any kind, either express or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.</p>
                    <h5><small>12.</small>Severability</h5>
                    <p>In the event that any provision of these Terms of Service is determined to be unlawful, void or unenforceable, such provision shall nonetheless be enforceable to the fullest extent permitted by applicable law, and the unenforceable portion shall be deemed to be severed from these Terms of Service, such determination shall not affect the validity and enforceability of any other remaining provisions.</p>
                    <h5><small>13.</small>Termination</h5>
                    <p>The obligations and liabilities of the parties incurred prior to the termination date shall survive the termination of this agreement for all purposes</p>
                    <p>These Terms of Service are effective unless and until terminated by either you or us. You may terminate these Terms of Service at any time by notifying us that you no longer wish to use our Services, or when you cease using our site.</p>
                    <p>If in our sole judgment you fail, or we suspect that you have failed, to comply with any term or provision of these Terms of Service, we also may terminate this agreement at any time without notice and you will remain liable for all amounts due up to and including the date of termination; and/or accordingly may deny you access to our Services (or any part thereof).</p>
                    <h5><small>14.</small>Changes to terms of service</h5>
                    <p>You can review the most current version of the Terms of Service at any time at this page.</p>
                    <p>We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes. Your continued use of or access to our website or the Service following the posting of any changes to these Terms of Service constitutes acceptance of those changes.</p>
                    <h5><small>15.</small>Contact information</h5>
                    <p>Questions about the Terms of Service should be sent to us via our <Link to="/contacts">contact form</Link>.</p>
                </div>
            </div>
        )
    }
}