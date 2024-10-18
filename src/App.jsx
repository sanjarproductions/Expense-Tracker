import "./App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./routes/home/Home"
import Dashboard from "./routes/dashboard/Dashboard"
import History from "./routes/history/History"
import Statistics from "./routes/statistics/Statistics"

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/history" element={<History />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </>
  )
}

export default App
