import React, { useState } from 'react'
import './MyAccount.css'
import MyAccountAccordianForm from './MyAccountAccordianForm'

const MyAccountAccordian = ({ number, title, activeAccordion, setActiveAccordion, onClickNavigate }) => {
    const isActive = activeAccordion === number;

    const handleDisplayAccordian = () => {
        setActiveAccordion(isActive ? null : number); // Close if same, else open new
    };
    return (
        <div>
            <div className="accordion-item my-4">
                <h2 className="accordion-header">
                    <button style={isActive ? {color:"#ff6e04"}:{color:""}} className="accordion-button" onClick={handleDisplayAccordian} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {number}. {title.toUpperCase()}
                    </button>
                </h2>
                <div className={`accordion-collapse collapse ${isActive ? "show" : ""}`} data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <MyAccountAccordianForm number={number} onClickNavigate={onClickNavigate}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyAccountAccordian
