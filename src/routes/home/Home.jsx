// import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="flex">
                        <img className="logo" src="/favicon.svg" alt="" />
                        <div>
                            <Link to="/dashboard">Dashboard</Link>
                            {/* <Link to="/history">History</Link> */}
                            {/* <Link to="#" style={{ opacity: 0.3 }}>Premium</Link> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Home
