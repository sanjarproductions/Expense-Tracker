import "./App.css"
import { Routes, Route } from "react-router-dom"
import { FinanceProvider } from "./context/FinanceContext"
import Home from "./routes/home/Home"
import Dashboard from "./routes/dashboard/Dashboard"
import History from "./routes/history/History"
import Statistics from "./routes/statistics/Statistics"

import Privacy from "./routes/legal/Privacy"
import Terms from "./routes/legal/Terms"

// Components
import Nav from "./components/nav/Nav"

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

          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </FinanceProvider>
    </>
  )
}

export default App
