// import React from 'react'
import "./Popup.css"

const Popup = ({ isPopUpVisible, closePopUp }) => {
    return (
        <div className={`popup ${isPopUpVisible ? "active" : ""}`}>
            <div className='popup-nav'>
                <button onClick={closePopUp} className='cancel-btn'>Cancel</button>
                <strong>Add Record</strong>
                <button className='save-btn'>Save</button>

            </div>
        </div>
    )
}

export default Popup
