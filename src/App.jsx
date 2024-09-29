import './App.css'
import NavSettingsIcon from "./assets/settings.svg"
import NavNotificationsIcon from "./assets/notifications.svg"
import AddIcon from "./assets/AddIcon.svg"
import CashIcon from "./assets/CashIcon.svg"

function App() {

  return (
    <>
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
                <p className='account-balance'>10.00</p>
                <p>USD</p>
              </div>
              <div className="addaccount card" >

                <img src={AddIcon} alt="" />
                <p>Add Account</p>
              </div>
            </section>
            <section className='premium'>
              
            </section>
            <section></section>
          </div>
        </main>
        <footer>
          <div className="container">
            <div>
              <div>
                <img src="" alt="" />
                <p>Home</p>
              </div>
              <div>
                <img src="" alt="" />
                <p>Planing</p>
              </div>
              <img src={AddIcon} alt="" />
              <div>
                <img src="" alt="" />
                <p>Statistics</p>
              </div>
              <div>
                <img src="" alt="" />
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
