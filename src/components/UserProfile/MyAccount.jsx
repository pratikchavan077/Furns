import React, { useState } from 'react'
import BreadCrump from '../BreadCrump/BreadCrump'
import MyAccountAccordian from './MyAccountAccordian'
import { useNavigate } from 'react-router-dom'


const MyAccount = () => {
  const navigate = useNavigate()
  const onClickNavigate = () => {
    navigate('/wishlist')
  }
  const [activeAccordion, setActiveAccordion] = useState(null);
  return (
    <div className="myAccount">
      <BreadCrump content="MY ACCOUNT" location="ACCOUNT" />
      <div className="container">
        <div className="accordion" id="accordionExample">
          <MyAccountAccordian number={1} title="Edit Your Account Information" activeAccordion={activeAccordion} setActiveAccordion={setActiveAccordion}/>
          <MyAccountAccordian number={2} title="Change Your Password" activeAccordion={activeAccordion} setActiveAccordion={setActiveAccordion}/>
          <MyAccountAccordian number={3} title="Modify Your Address Book Entries" activeAccordion={activeAccordion} setActiveAccordion={setActiveAccordion}/>
          <MyAccountAccordian number={4} title="Modify Your WishList" activeAccordion={activeAccordion} setActiveAccordion={setActiveAccordion} onClickNavigate={onClickNavigate}/>
        </div>
      </div>
    </div>
  )
}

export default MyAccount