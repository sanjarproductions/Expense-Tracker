// import React from 'react'
import "./Popup.css"

const Popup = ({ isPopUpVisible, closePopUp }) => {
    return (
        <div className={`popup ${isPopUpVisible ? "active" : ""}`}>
            <div className='popup-nav'>
                <button className='cancel-btn'>Cancel</button>
                <strong>Add Record</strong>
                <button onClick={closePopUp} className='save-btn'>Save</button>
            </div>
            {/* <div className="category">
                <select name="type" id="">
                    <option value="Expense" id="">Expense</option>
                    <option value="Income" id="">Income</option>
                    <option value="Transfer" id="">Transfer</option>
                </select>
            </div>
            <div className="details">
                <select name="type" id="">
                    <option value="">Cash</option>
                    <option value="" id="">Bank Account</option>
                </select>
            </div> */}
        </div>
    )
}

export default Popup
