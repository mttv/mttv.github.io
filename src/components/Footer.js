import React from 'react'
import { Link } from 'react-router-dom'

const date = new Date()
const year  = date.getFullYear()

const footer = () => {
    return(
        <div id="footer">
            <hr style={{margin: "50px 10% 10px 10%", borderTop: "1px solid rgba(0,0,0,.2)"}} />
            <footer>
                <div className="copyright">{'\u00A9 ' + year} MTTV. All rights reserved.</div>
                <div className="menu">
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/privacy">Privacy Policy</Link>
                </div>
            </footer>
        </div>
    )
}

export default footer