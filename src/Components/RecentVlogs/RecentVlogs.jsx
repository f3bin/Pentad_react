import React from 'react'
import './RecentVlogs.css'
import StockMarket from '../../images/stock-market-investments.jpg'
import Insurance from '../../images/Insurance-As-An-Investment-1.jpeg.webp'
import SIP from '../../images/What-is-SIP-1.jpeg.webp'

const RecentVlogs = () => {
  return (

<div className="recent-vlogs-container">
    <h2>Recent Vlogs</h2>
    <div className="recent-vlogs-items-wrapper">
        <div className="recent-vlog-item">
            <img src={StockMarket} alt="stock-market" />
            <p>May 25,2023</p>
            <h3>How to do stock market investments?</h3>
            <p>How to do stock market ...</p>
        </div>
        <div className="recent-vlog-item">
            <img src={Insurance} alt="insurance" />
            <p>June 6,2022</p>
            <h3>Insurance as an Investment</h3>
            <p>Insurance is never an investment...</p>
        </div>
        <div className="recent-vlog-item">
            <img src={SIP} alt="sip" />
            <p>June 6,2022</p>
            <h3>What is SIP/Systamatic Investment Plan?</h3>
            <p>SIP or Systamatic Investment Plan is ...</p>
        </div>
    </div>
    <button className="recent-vlog-button">View All Blogs</button>
</div>
  )
}

export default RecentVlogs
