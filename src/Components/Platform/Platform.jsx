import React from 'react'
import PenForSite from '../../images/Pen_for-site-platform1.webp'
import PenIcon from '../../images/Pen-icon-platform1.svg'
import BoxForSite from '../../images/Box_for-site-platform2.webp'
import BoxIcon from '../../images/Box-icon-platform2.svg'
import QrIcon from '../../images/qrcode-pen.webp'
import PlayStoreIcon from '../../images/google-play-1.svg'
import AppStoreIcon from '../../images/app-store-1.svg'
import './Platform.css'

const Platform = () => {
  return (
<div className="platform-main-container">
    <h1>Our Platforms</h1>
    <p>Pentad Securities operates through various platforms for the ease of our<br />
        customers and to provide a pleasant investment experience.</p>
    <div className="platform-content-container">
        <div className="platform-content-item">
            <img src={PenForSite} alt="pen-for-site" />
            <ul className="platform-content-item-logo-wrapper">
                <li><img src={PenIcon} alt="pen-logo" /></li>
                <li>
                    <h3 className="platform-content-item-logo-text">PEN</h3>
                </li>
            </ul>
            <h2>Trading and Investment for Equity, ETFS,<br />
                and Derivatives Products</h2>
            <div className="platform-content-item-option-wrapper">
                <ul className="platform-content-item-option1">
                    <li><img src={QrIcon} alt="qr-code"/></li>
                    <li><img src={PlayStoreIcon} alt="google-play" /></li>
                    <li><img src={AppStoreIcon} alt="app-store" /></li>
                </ul>
                <div className="platform-content-item-option2">
                    <button>Know More</button>
                </div>
            </div>
        </div>
        <div className="platform-content-item">
            <img src={BoxForSite} alt="box-for-site" />
            <ul className="platform-content-item-logo-wrapper">
                <li><img src={BoxIcon} alt="box-logo" /></li>
                <li>
                    <h3 className="platform-content-item-logo-text">BOX</h3>
                </li>
            </ul>
            <h2>Platform and Dashboard to Observe Your<br /> Fund’s Performance.</h2>
            <div className="platform-content-item-option-wrapper">
                <ul class="platform-content-item-option1">
                    <li><img src={PlayStoreIcon} alt="google-play" /></li>
                    <li><img src={AppStoreIcon} alt="app-store" /></li>
                </ul>
                <div class="platform-content-item-option2">
                    <button>Know More</button>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Platform
