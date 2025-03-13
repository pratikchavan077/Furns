import React, { useState } from 'react'
import welcome1 from '../../assets/welcome.webp'
import leader1 from '../../assets/leader1.webp'
import leader2 from '../../assets/leader2.webp'
import leader3 from '../../assets/leader3.webp'
import leader4 from '../../assets/leader4.webp'
import './AboutUs.css'
import { Link } from 'react-router-dom'
import BreadCrump from '../BreadCrump/BreadCrump'
const teamMembers = [
    { id: 1, name: "Ms. Veronica", role: "Web Designer", img: leader1 },
    { id: 2, name: "Missa Santos", role: "Web Designer", img: leader2 },
    { id: 3, name: "Missa Santos", role: "CEO Founder", img: leader3 },
    { id: 4, name: "Lisa Antonia", role: "CEO Founder", img: leader4 }
];
const AboutUs = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    return (
        <>
            <BreadCrump location="ABOUT" content="ABOUT US" />
            <div className="container">
                <div className="AboutUsWelcomeSection d-flex justify-content-between align-items-center">
                    <div className="imageSecion">
                        <img src={welcome1} alt="" />
                    </div>
                    <div className="textSecion">
                        <h2>Welcome To Furns</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quaerat voluptatum ad? Tenetur non blanditiis aliquid a natus quae, minus et sunt ab sint impedit at inventore quisquam quia provident illum necessitatibus nostrum voluptas.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit corrupti vitae rerum! Delectus praesentium cum laboriosam consequuntur sequi dolorum animi.</p>
                    </div>
                </div>

            </div>
            <div className="functionalitySection my-5" style={{ backgroundColor: "#e9e9e9" }}>
                <div className="container py-5">
                    <div className="functionalityContent d-flex justify-content-between align-items-center">
                        <div className="textSecion">

                            <h2>Functionality meets perfection</h2>
                            <p>In today’s day and age, one cannot underestimate the importance of design, the art of creating striking visuals to move and captivate your audience. And as the world becomes more and more digitized with each passing second, the importance of graphic design has been rocketed to the top.</p>
                        </div>
                        <div className="progressBar">
                            <div className="progBar">
                                <span>UI/UX</span>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ width: "70%" }}></div>
                                </div>
                            </div>
                            <div className="progBar">
                                <span>Design</span>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ width: "80%" }}></div>
                                </div>
                            </div>
                            <div className="progBar">
                                <span>Ideas</span>
                                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar" style={{ width: "95%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="teamSection">
                <div className="container d-flex justify-content-between align-items-center">
                    {teamMembers.map((member) => (
                        <div
                            key={member.id}
                            className="card teamMember"
                            onMouseEnter={() => setHoveredCard(member.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <img src={member.img} className="card-img-top" alt={member.name} />
                            <div className="card-body">
                                <h5>{member.name}</h5>
                                <div className="role-container">
                                    <p className={`card-text ${hoveredCard === member.id ? "hidden-text" : ""}`}>
                                        {member.role}
                                    </p>

                                    <div className={`socialMedia ${hoveredCard === member.id ? "show" : ""}`}>
                                        <i className="fa-brands fa-facebook-f px-2"></i>
                                        <i className="fa-brands fa-instagram px-2"></i>
                                        <i className="fa-brands fa-linkedin-in px-2"></i>
                                        <i className="fa-brands fa-twitter px-2"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default AboutUs