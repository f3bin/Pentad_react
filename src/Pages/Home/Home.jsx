import React from 'react'
import TopMovingBanner from '../../Components/TopMovingBanner/TopMovingBanner'
import MainNavbar from '../../Components/MainNavbar/MainNavbar'
import MainCarousel from '../../Components/MainCarousel/MainCarousel'
import ProductsPart from '../../Components/ProductsPart/ProductsPart'
import AboutCompany from '../../Components/AboutCompany/AboutCompany'
import './Home.css'
import Platform from '../../Components/Platform/Platform'
import MemberBroker from '../../Components/MemberBroker/MemberBroker'
import RecentVlogs from '../../Components/RecentVlogs/RecentVlogs'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div className='home-container'>
      <TopMovingBanner />
      <MainNavbar />
      <MainCarousel />
      <ProductsPart />
      <AboutCompany />
      <Platform />
      <MemberBroker />
      <RecentVlogs />
      <Footer />
    </div>
  )
}

export default Home
