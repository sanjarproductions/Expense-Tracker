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
                            <Link to="/dashboard">Get Stared</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Home
