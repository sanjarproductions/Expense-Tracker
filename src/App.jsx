import './App.css'
import { useState } from 'react'

import NavSettingsIcon from "./assets/settings.svg"
import NavNotificationsIcon from "./assets/notifications.svg"
import AddIcon from "./assets/AddIcon.svg"
import CashIcon from "./assets/CashIcon.svg"
import PremiumIcon from "./assets/PremiumSpeedIcon.svg"

import HomeIcon from "./assets/footericons/home.svg"
import MoreIcon from "./assets/footericons/more.svg"
import AnaliticsIcon from "./assets/footericons/analitics.svg"
import PlaningIcon from "./assets/footericons/planing.svg"

import Popup from "./components/popup/Popup"

function App() {

  const [PopUpVisible, setPopUpVisible] = useState(false)

  const handleClick = () => {
    setPopUpVisible(!PopUpVisible)
  }


  return (
    <>
      <div className="dashboard page">

        {
          PopUpVisible && (<Popup />)
        }

        <nav>
          <div className="container">
            <p>WalletpApp</p>
            <div className='nav-icons'>
              <img src={NavNotificationsIcon} alt="" />
              <img src={NavSettingsIcon} alt="" />
            </div>
          </div>
        </nav>
        <main>
          <div className="container">
            <section className='accounts-menu'>
              <div className="cashaccount card" >
                <img src={CashIcon} alt="" />
                <p className='account-title'>CASH</p>
                <p className='account-balance'>100 000.00</p>
                <p>USD</p>
              </div>
              <div className="addaccount card" >

                <img src={AddIcon} alt="" />
                <p>Add Account</p>
              </div>
            </section>
            <section className='premium'>
              <div className="flex">
                <img src={PremiumIcon} alt="" />
                <div className="premium-text">
                  <h2>Wallet for your business</h2>
                  <p>Wallet-like app for entrepreneurs and small business.</p>
                </div>
              </div>
              <button className='getpremium-btn'>Get Premium</button>
            </section>
            <section className='trend'>
              <h3>Balance Trend</h3>
            </section>
          </div>
        </main>
        <footer className='menu'>
          <div className="container">
            <div className='menu-wrapper'>
              <div className='menu__item'>
                <img src={HomeIcon} alt="" />
                <p>Home</p>
              </div>
              <div className='menu__item'>
                <img src={PlaningIcon} alt="" />
                <p>Planing</p>
              </div>

              <button onClick={handleClick} className='action-popup'> <img src={AddIcon} alt="" /> </button>


              <div className='menu__item'>
                <img src={AnaliticsIcon} alt="" />
                <p>Statistics</p>
              </div>
              <div className='menu__item'>
                <img src={MoreIcon} alt="" />
                <p>More</p>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </>


  )
}

export default App
