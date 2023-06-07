import React from 'react'
import './ProductsPart.css'
import EquityIcon from '../../images/equity-icon.svg'
import MutualFundsIcon from '../../images/mutual-funds-icon.svg'
import FutureAndOptionIcon from '../../images/future-and-option-icon.svg'
import FixedDepositIcon from '../../images/fixed-deposit-icon.svg'
import BondsIcon from '../../images/bonds-icon.svg'
import UnlistedSharesIcon from '../../images/ulisted_shares-icon.svg'
import ExchangeTradeIcon from '../../images/exchange-traded-funds-icon.svg'
import BrokerageImage from '../../images/Brokerage.png'

const ProductsPart = () => {
  return (
<div className="products-main-wrapper">
    <h2>Choose From Our Products</h2>
    <ul className="product-carousel-items">
        <li className="product-carousel-item">
            <button>
                <img className="product-carousel-item-icon" src={EquityIcon} alt="equity" />
                Equity
            </button>
        </li>
        <li className="product-carousel-item">
            <button>
                <img className="product-carousel-item-icon" src={MutualFundsIcon} alt="mutual-funds"/>
                Mutual Funds
            </button>
        </li>
        <li className="product-carousel-item">
            <button>
                <img className="product-carousel-item-icon" src={FutureAndOptionIcon}
                    alt="future and option" />
                Future & Option
            </button>
        </li>
        <li className="product-carousel-item">
            <button>
                <img className="product-carousel-item-icon" src={FixedDepositIcon}
                    alt="fixed-deposit-icon" />
                Fixed Deposit
            </button>
        </li>
        <li className="product-carousel-item">
            <button>
                <img className="product-carousel-item-icon" src={BondsIcon} alt="bonds" />
                Bonds
            </button>
        </li>
        <li className="product-carousel-item">
            <button>
                <img className="product-carousel-item-icon" src={UnlistedSharesIcon}
                    alt="Unlisted shares" />
                Unlisted Shares
            </button>
        </li>
        <li className="product-carousel-item">
            <button>
                <img className="product-carousel-item-icon" src={ExchangeTradeIcon} alt="exchnge" />
                Exchange Traded Funds
            </button>
        </li>
    </ul>
    {/* Product section content wrapper  */}
    <div class="product-content-wrapper">
        <div class="product-content-image-section">
            <img class="product-content-image" src={BrokerageImage} alt="brokerage" />
        </div>
        <div class="product-content-text-section">
            <h1>20<sub>₹</sub></h1>
            <h3>Lowest F&O Brokerage</h3>
            <button>Know more</button>
        </div>
    </div>
</div>
  )
}

export default ProductsPart
