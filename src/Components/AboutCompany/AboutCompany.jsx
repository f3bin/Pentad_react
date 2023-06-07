import React from 'react'
import './AboutCompany.css'
import GoalBasedIcon from '../../images/Goal-Based-Investing.icon.svg'
import CustomizedInvestingIcon from '../../images/customized-investing-icon.svg'
import CustomizedPlanningIcon from '../../images/Customized-Planning-And-Execution-icon.svg'
import TimelyReviewIcon from '../../images/Timely-Review-icon.svg'

const AboutCompany = () => {
  return (
<div className="about-main-container">
    <div className="about-section-1">
        <h3>Why Pentad?</h3>
        <p>Financial Product Distribution and Brokerage service at<br />
            affordable and support</p>
        <button>Know More About Us</button>
        <ul className="about-section-1-prices">
            <li className="about-section-1-prices-item">
                <h1>0<sub>₹</sub></h1>
                <p>Equity Delivery &<br />
                    Thematic Investments</p>
            </li>
            <li className="about-section-1-prices-item">
                <h1>20<sub>₹</sub></h1>
                <p>Intraday, Futures <br />
                    And options</p>
            </li>
        </ul>
    </div>
    <div className="about-section-2">
        <div className="about-section-2-features">
            <ul className="about-section-2-features-item">
                <li><img src={GoalBasedIcon} alt="goal-based" /></li>
                <li>
                    <h3>Goal Based Investing</h3>
                    <p>Identify the current situation and invest as per your<br />goals.</p>
                </li>
            </ul>

            <ul className="about-section-2-features-item">
                <li><img src={CustomizedInvestingIcon} alt="customized" /></li>
                <li>
                    <h3>Customized Investing</h3>
                    <p>Invest based on an individual's risk profile and<b5r />requirements.
                    </p>
                </li>
            </ul>

            <ul className="about-section-2-features-item">
                <li><img src={CustomizedPlanningIcon} alt="Planning-and-execution" />
                </li>
                <li>
                    <h3>Customized Planning and Execution</h3>
                    <p>Based on individual needs, prompt support is provided
                    </p>
                </li>
            </ul>

            <ul className="about-section-2-features-item">
                <li><img src={TimelyReviewIcon} alt="goal-based" /></li>
                <li>
                    <h3>Timely Review</h3>
                    <p>Based on changing financial requirements, timely support is delivered</p>
                </li>
            </ul>
        </div>
    </div>
</div>

  )
}

export default AboutCompany
