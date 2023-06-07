import React from 'react'
import './Footer.css'
import fb from '../../images/fb-1.svg'
import twitter from '../../images/twitter-1.svg'
import yt from '../../images/youtube-1.svg'
import insta from '../../images/instagram-1.svg'

const Footer = () => {
  return (
    <div className="footer-container">
    <div className="footer-item-first-wrapper">
        <ul className="footer-item-first-items-container">
            <li className="footer-item-first-item"><img className="footer-main-image" src="./images/pentad-logo.jpeg"
                    alt="logo" /></li>
            <li className="footer-item-first-item">
                <p>33/2361 B4, 3rd Floor, Jacob’s<br />
                    Building, Geethanjali Junction,<br />
                    Vyttila, Kochi 682019, Kerala,<br />
                    India.</p>
            </li>
            <li className="footer-item-first-item">
                <ul className="footer-item-first-item-icons-container">
                    <li className="footer-item-first-item-icon  footer-social-icon"><img src={fb}
                            alt="fb" /></li>
                    <li className="footer-item-first-item-icon  footer-social-icon"><img src={twitter}
                            alt="twitter" /></li>
                    <li className="footer-item-first-item-icon  footer-social-icon"><img src={insta}
                            alt="insta" /></li>
                    <li className="footer-item-first-item-icon  footer-social-icon"><img src={yt}
                            alt="yt" /></li>
                </ul>
            </li>
        </ul>

        <ul className="footer-item-first-items-container">
            <li className="footer-item-first-item">
                <h3>Platforms</h3>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Pen</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Book</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Box</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Evoting</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Pen API Link</p>
            </li>
        </ul>

        <ul className="footer-item-first-items-container">
            <li className="footer-item-first-item">
                <h3>Quick Links</h3>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>About Us</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Blog</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Contact Us</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Branch Login</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Downloads</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>NRI Investment</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>FAQ</p>
            </li>
        </ul>

        <ul className="footer-item-first-items-container">
            <li className="footer-item-first-item">
                <h3>Legal</h3>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>AML Policy</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Terms and conditions</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Privacy Policy</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Policies & Procedures Of Pented<br />
                    Securities Private Limited</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>General Disclaimer</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Investor Grievances</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Regulator KYC Policies</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>Updation Provision</p>
            </li>
        </ul>

        <ul className="footer-item-first-items-container">
            <li className="footer-item-first-item footer-first-item-option">
                <h3>Useful Links</h3>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>BSE</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>NSE</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>CDSL</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>RBI</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>NSDL</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>SEBI</p>
            </li>
            <li className="footer-item-first-item footer-first-item-option">
                <p>MCX</p>
            </li>
        </ul>
    </div>
    <div className="footer-item-second-wrapper">
        <p className="footer-item-second-first-element"><b>Products:</b> Equity | Mutual Funds | Future & Option | Fixed
            Deposit | Bonds | Unlisted Shares |
            Exchange Traded Funds | NRI Investment </p>
        <hr />
        <p>Pentad Securities Private Ltd. SEBI Regn.No - INZ000168432, Mutual Fund ARN - 120781, CDSL Regn.No -
            IN-DP-378-2018 ,
            CIN – U67120KL2012PTC032847. Pentad Securities offers goal-based
            broking / non-broking services that aim to empower its clients through saving, investing, protecting,
            and transforming their money for their wealth creation via various financial services and produ
            <b>...Read More</b>
        </p>
        <hr />
        <ul className="footer-item-second-lastcontent">
            <li>
                <p>2023 © Pentad Securities Private Limited. All rights reserved</p>
            </li>
            <li>
                <p>Designed by Webandcrafts</p>
            </li>
        </ul>
    </div>
</div>
  )
}

export default Footer
