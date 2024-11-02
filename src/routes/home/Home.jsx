// import React from 'react'
import "./Home.css"
import { Link } from "react-router-dom"

import HeroImage from "../../assets/home/hero-img.svg"
import FinancialCrisis from "../../assets/home/financial-crisis.jpeg"

const Home = () => {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="flex">
                        <div className="flex logo-wrapper">
                            <img className="logo" src="/favicon.svg" alt="" />
                            <p>Expensely</p>
                        </div>
                        <div>
                            <Link to="/dashboard" style={{ pointerEvents: "none", opacity: 0.5 }}>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="home-main">

                <section className="hero">
                    <div className="container">
                        <div className="flex">
                            <div className="hero-text">
                                <h1>Track Your Money <br /> <i>Differently</i></h1>
                                <p>Enjoy guilt-free spending and effortless saving with a
                                    friendly, flexible method for managing your finances.</p>
                                <Link to="/dashboard" className="getstarted">Get Started</Link>
                            </div>
                            <div className="hero-img-wrapper">
                                <img src={HeroImage} alt="" />
                                <div className="blur"></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="howto-use">
                    <div className="container">
                        <div className="flex">
                            <img src={FinancialCrisis} alt="" />
                            <div className="howto-use-text">
                                <h2>Money doesn’t have to be <i>messy</i></h2>
                                <p>Stop wondering where all of your hard-earned dollars go. Expensely will help you grow your savings and teach you to love how you
                                    spend your money.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="video-tutorial">
                    <div className="container">
                        <p style={{ textAlign: "center", paddingBottom: 20 + "px", fontStyle: "italic", }}>How to use Expensely in 2 Min : </p>
                        <div style={{
                            borderRadius: "10px",
                            position: "relative",
                            width: "100%",
                            maxWidth: "1050px", // New max width
                            margin: "auto",
                            overflow: "hidden",
                            paddingTop: "57%" // 16:9 aspect ratio
                        }}>
                            <iframe
                                style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover"
                                }}
                                src="https://www.youtube.com/embed/GbgQO6Omgsw"
                                title="YouTube Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div>
                </section>


                <section className="pricing">
                    <div className="container">
                        <div className="pricing-text">
                            <p>Pricing</p>
                            <h3>Stop feeling guilty for spending</h3>
                            <i>100% discount for first 5 customers</i>
                        </div>
                        <div className="flex">
                            <div className="card subscription">
                                <strong>Start</strong>
                                <p>$5/ <span>month</span> </p>

                                <ul>
                                    <li>Customizable categories</li>
                                    <li>Lifetime updates</li>
                                    <li>Full expense history</li>
                                    <li>Cross-platform (iOS, Android, web)</li>
                                    <li>Tracking Insights</li>
                                </ul>
                                <button className="pay-btn"> Pay</button>
                            </div>
                            <div className="card onetime">
                                <strong>Advanced</strong>
                                <p>$20 - <span>one time</span> </p>

                                <ul>
                                    <li>Customizable categories</li>
                                    <li>Lifetime updates</li>
                                    <li>Full expense history</li>
                                    <li>Cross-platform (iOS, Android, web)</li>
                                    <li>Tracking Insights</li>
                                </ul>
                                <button className="pay-btn"> Pay</button>
                            </div>
                        </div>
                    </div>
                </section>


            </main>

            <footer>
                <div className="container">
                    <div className="flex">
                        <ul>
                            <li>Social</li>
                            <li><a href="https://www.youtube.com/@sanjarcoding/" target="_blank">YouTube</a></li>
                            <li><a href="https://x.com/sanjarprod" target="_blank">X / Twitter</a></li>
                            <li><a href="https://www.linkedin.com/in/sanjarkamaliddinov/" target="_blank">LinkedIn</a></li>
                        </ul>
                        <ul>
                            <li>Legal</li>
                            <li><Link to={"/privacy"}>Privacy Policy</Link></li>
                            <li><Link to={"/terms"}>Terms & Conditions</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Home
