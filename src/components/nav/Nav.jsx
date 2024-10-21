// import React from 'react'
import "./Nav.css"
// import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

//{ transactions, Currency }
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
                                    {/* <Link to={{ pathname: "/history", state: { transactions, Currency } }}>History</Link> */}
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

// Nav.propTypes = {
//     transactions: PropTypes.array.isRequired,
//     Currency: PropTypes.string.isRequired
// }

export default Nav
