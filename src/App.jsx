import "./App.css"
import { Routes, Route } from "react-router-dom"
import { FinanceProvider } from "./contexts/FinanceContext"
import Home from "./routes/home/Home"
import Dashboard from "./routes/dashboard/Dashboard"
import History from "./routes/history/History"
import Statistics from "./routes/statistics/Statistics"

// Components
import Nav from "./components/Nav/Nav"

const App = () => {

  return (
    <>
      <FinanceProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/statistics" element={<Statistics />} />
        </Routes>
      </FinanceProvider>
    </>
  )
}

export default App
