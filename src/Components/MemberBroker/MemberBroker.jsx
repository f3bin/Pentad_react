import React from 'react'
import './MemberBroker.css'
import NSE from '../../images/NSE-Logo-1.svg'
import MSX from '../../images/MCX-logo.svg'
import CDSL from '../../images/CDSL-Logo-1.svg'
import BSE from '../../images/bselogo-1.svg'

const MemberBroker = () => {
  return (
    <div className="member-broker-wrapper">
      <h1>Member Broker</h1>
      <div className="member-broker-carousel-wrapper">
        <div className="member-broker-carousel-track">
          <div className="member-broker-carousel-item"><img src={NSE} alt="nse" /></div>
          <div className="member-broker-carousel-item"><img src={MSX} alt="msx" /></div>
          <div className="member-broker-carousel-item"><img src={CDSL} alt="cdsl" /></div>
          <div className="member-broker-carousel-item"><img src={BSE} alt="bse" /></div>
          <div className="member-broker-carousel-item"><img src={NSE} alt="nse" /></div>
          <div className="member-broker-carousel-item"><img src={MSX} alt="msx" /></div>
        </div>
      </div>
    </div>
  )
}

export default MemberBroker
