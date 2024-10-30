import "./Prices.css"

const Prices = () => {
    return (
        <>
            <section className="pricing">
                <div className="container">
                    <div className="pricing-text">
                        <p>Pricing</p>
                        <h3>Stop feeling guilty for spending</h3>
                        <i>100% for first 5 customers</i>
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
        </>
    )
}

export default Prices
