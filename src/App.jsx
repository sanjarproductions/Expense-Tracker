import './App.css'
import { useState } from 'react'
import Popup from "./components/popup/Popup"
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import GraphData from "./data/data.json"
// import SecondGraphData from "./data/fackedata.json"

import NavSettingsIcon from "./assets/settings.svg"
import NavNotificationsIcon from "./assets/notifications.svg"
import AddIcon from "./assets/AddIcon.svg"
import CashIcon from "./assets/CashIcon.svg"
import PremiumIcon from "./assets/PremiumSpeedIcon.svg"

import HomeIcon from "./assets/footericons/home.svg"
import MoreIcon from "./assets/footericons/more.svg"
import AnaliticsIcon from "./assets/footericons/analitics.svg"
import PlaningIcon from "./assets/footericons/planing.svg"


function App() {
  const [transactions, setTransactions] = useState([])
  const [balance, setBalance] = useState(0)
  const [isPopUpVisible, setPopUpVisible] = useState(false)

  const openPopUp = () => {
    setPopUpVisible(true)
  }

  const closePopUp = () => {
    setPopUpVisible(false)
  }




  return (
    <>
      <Popup isPopUpVisible={isPopUpVisible} closePopUp={closePopUp} />

      <div className="dashboard page">
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
                <p className='account-balance'>{balance}</p>
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

              <Line data={
                {
                  labels: GraphData.map((data) => data.label),
                  datasets: [{
                    label: "Money",
                    data: GraphData.map((data) => data.value),
                    backgroundColor: "#0a84fc",
                    borderColor: "#0a84fc",
                  },
                    // {
                    //   label:"somethingelse",
                    //   data: SecondGraphData.map((i) => i.value),
                    //   backgroundColor: "#ff0000",
                    //   borderColor: "#ff0000",
                    // }
                  ]
                }}></Line>

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
              <button onClick={openPopUp} className='action-popup'> <img src={AddIcon} alt="" /> </button>
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
