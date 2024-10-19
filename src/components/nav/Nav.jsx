// import React from 'react'
import "./Nav.css"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Nav = () => {
    const { pathname } = useLocation();
    return pathname === "/" ? <></> : (
        <nav>
            <div className="container">
                <div className="flex">
                    <img className="logo" src="/favicon.svg" alt="" />
                    <div>
                        {
                            pathname === "/dashboard" ? (
                                <>
                                    <Link to="/statistics">Statistics</Link>
                                    <Link to="/history">History</Link>
                                    <Link to="#" style={{ opacity: 0.3 }}>Premium</Link>
                                </>

                            ) : (
                                <>
                                    <Link to="/dashboard">Dashboard</Link>
                                    <Link to="/statistics">Statistics</Link>
                                    <Link to="/history">History</Link>
                                    <Link to="#" style={{ opacity: 0.3 }}>Premium</Link>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
