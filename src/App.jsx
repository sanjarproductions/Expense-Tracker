import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/Home"
import History from "./routes/history/History"
import Statistics from "./routes/statistics/Statistics"

const App = () => {

  return (
    <>
      <nav>
        <div className="container">
          <div className="flex">
            <img className="logo" src="/favicon.svg" alt="" />
            <div>
              <a href="/statistics">Statistics</a>
              <a href="/history">History</a>
              <a href="#" style={{ opacity: 0.3 }}>Premium</a>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </>
  )
}

export default App
