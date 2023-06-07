import React from 'react'
import './MainCarousel.css'
import InvestEquity from '../../images/Invest-in-Equity01.png.webp';
import TradeFuture from '../../images/Trade-in-Future-Options.png.webp';
import IntradeyTrades from '../../images/Intraday-Trades.png.webp';
import MutualFunds from '../../images/Invest-in-mutual-Funds.png.webp'
import FixedDesposit from '../../images/Fixed-Deposit.png.webp'


const MainCarousel = () => {
    return (
        <div className="main-carousel-wrapper">
            <div className="carousel-container-1">
                <div className="carousel-item">
                    <div className="carousel-item-textarea">
                        <h1>Invest in Equity</h1>
                        <p>Invest in equity from mobile and web <br />
                            applications for INR 0 brokerage
                        </p>
                        <button>Open Demat Account</button>
                        <h2>0<sub>₹</sub></h2>
                        <p>Equity Delivery</p>
                    </div>
                    <div className="carousel-item-image">
                        <img src={InvestEquity} alt="equity" />
                    </div>
                </div>
            </div>
            <div className="carousel-container-2">
                <div className="carousel-item">
                    <div className="carousel-item-textarea">
                        <h1>Trade in Future <br /> & Options</h1>
                        <p>Flat ₹20 per Order for F&O trades with <br />
                            advanced web portal and app
                        </p>
                        <button>Open Demat Account</button>
                        <h2>20<sub>₹</sub></h2>
                        <p>Futures and Options</p>
                    </div>
                    <div className="carousel-item-image">
                        <img src={TradeFuture} alt="trade in future" />
                    </div>
                </div>
            </div>
            <div className="carousel-container-3">
                <div className="carousel-item">
                    <div className="carousel-item-textarea">
                        <h1>Intradey<br />Trades</h1>
                        <p>Flat ₹20 per Order for Intradey trades with<br />
                            advanced web portals and app
                        </p>
                        <button>Open Demat Account</button>
                        <h2>20<sub>₹</sub></h2>
                        <p>Intradey</p>
                    </div>
                    <div className="carousel-item-image">
                        <img src={IntradeyTrades} alt="intraday trades" />
                    </div>
                </div>
            </div>
            <div className="carousel-container-4">
                <div className="carousel-item">
                    <div className="carousel-item-textarea">
                        <h1>Invest in <br />Mutual Fund</h1>
                        <p>Invest in 2500+ mutual fund schemes in India
                        </p>
                        <button>Open an Account</button>
                    </div>
                    <div className="carousel-item-image">
                        <img src={MutualFunds} alt="Mutual funds" />
                    </div>
                </div>
            </div>
            <div className="carousel-container-5">
                <div className="carousel-item">
                    <div className="carousel-item-textarea">
                        <h1>Fixed Deposits</h1>
                        <p>Earn better returns than bank interest at <br />
                            Corporate FDs, Peer to Peer Lending
                        </p>
                        <button>Request a Call Back</button>
                    </div>
                    <div className="carousel-item-image">
                        <img src={FixedDesposit} alt="fixed deposits" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainCarousel
