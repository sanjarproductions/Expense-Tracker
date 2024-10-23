import "./Nav.css"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react";

// Icons
import { IoIosClose } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { IoStatsChartSharp } from "react-icons/io5";
import { MdHomeFilled } from "react-icons/md";

const Nav = () => {
    const { pathname } = useLocation();
    const [MobileMenuState, setMobileMenuState] = useState(false);

    const mobileMenu = () => {
        setMobileMenuState(!MobileMenuState)
    }

    useEffect(() => {
        setMobileMenuState(false)
    }, [pathname])

    return pathname === "/" ? <></> : (
        <nav>
            <div className="container">
                <div className="">
                    <div className="menu-desktop flex">
                        {
                            pathname === "/dashboard" ? (
                                <>
                                    <img className="logo" src="/favicon.svg" alt="" />
                                    <div className="desktop-links">
                                        <Link to="/statistics">Statistics</Link>
                                        <Link to="/history">History</Link>
                                        <Link to="#" style={{ opacity: 0.3, pointerEvents: 'none' }}>Premium <MdOutlineWorkspacePremium /> </Link>
                                    </div>
                                </>

                            ) : (
                                <>
                                    <Link to="/dashboard"><img className="logo" src="/favicon.svg" alt="" /></Link>

                                    <div className="desktop-links">
                                        <Link to="/statistics">Statistics</Link>
                                        <Link to="/history">History</Link>
                                        <Link to="#" style={{ opacity: 0.3, pointerEvents: 'none' }}>Premium <MdOutlineWorkspacePremium /> </Link>
                                    </div>
                                </>
                            )
                        }
                    </div>

                    <div className="menu-mobile">

                        <Link to="/dashboard"><img className="logo" src="/favicon.svg" alt="" /></Link>

                        <button onClick={mobileMenu} >
                            <IoMdMenu />
                        </button>
                    </div>


                    <div className={`something ${MobileMenuState ? `open` : ""}`}>
                        <button className="close-btn" onClick={mobileMenu}>
                            <IoIosClose />
                        </button>
                        <div className="mobile-links">
                            {
                                pathname === "/dashboard" ? (
                                    <>
                                        <Link to="/statistics"> <IoStatsChartSharp /> Statistics</Link>
                                        <Link to="/history"> <FaHistory /> History</Link>
                                        <Link to="#" style={{ opacity: 0.3, pointerEvents: 'none' }}> <MdOutlineWorkspacePremium /> Premium  </Link>
                                    </>

                                ) : (
                                    <>
                                        <Link to="/dashboard"> <MdHomeFilled /> Dashboard</Link>
                                        <Link to="/statistics"> <IoStatsChartSharp /> Statistics</Link>
                                        <Link to="/history"> <FaHistory /> History</Link>
                                        <Link to="#" style={{ opacity: 0.3, pointerEvents: 'none' }}> <MdOutlineWorkspacePremium /> Premium  </Link>
                                    </>
                                )
                            }
                        </div>
                    </div>


                </div>
            </div>
        </nav>
    )
}

export default Nav
