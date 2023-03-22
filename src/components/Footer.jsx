import React from 'react'
import '../styles/Footer.module.css'

const Footer = () => {
    return (
        <div className="bg-[#333333] pb-[30px]">
            <div className='footer'>
                <img src='AIAA_Logo.png' className="w-[50px]" alt='logo' />
            </div>
            <p>
                © 2022, AIAA UTD.
            </p>
            <p>
                This website is not an official publication of UT Dallas and does not represent the views of the university or its officers. The University of Texas at Dallas is an Equal Opportunity/Affirmative Action University. Students with disabilities needing special assistance to attend events please call (972‑883‑2946). Texas Relay Operation: 1‑800‑RELAYTX.
            </p>
        </div>
    )
}

export default Footer;