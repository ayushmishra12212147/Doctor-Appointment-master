import React from 'react';
import './InfoPage.css';
import { FaClock, FaHeadset,FaHouseUser  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const InfoPage = () => {
    return (
        <section className="why-us mt-5 mt-md-0">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Why Choose Us?</h3>
                            <p>
                            Choose us for unparalleled medical expertise, compassionate care, and a commitment 
                            to your well-being. With state-of-the-art facilities, a dedicated team of skilled professionals, 
                            and a legacy of excellence in healthcare, 
                            we are your trusted partner on the journey to optimal health and recovery.</p>
                            <div className="text-center">
                                <Link href="/" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHouseUser className="icon"/>
                                        <h4>Appointment</h4>
                                        <small className='text-secondary'>24 Hours Service</small>
                                        <p>Book your appointments effortlessly with our user-friendly online scheduling system. Experience convenience and peace of mind as you secure your consultation with just a few clicks</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHeadset className="icon"/>
                                        <h4>Emegency Cases</h4>
                                        <h6 className='text-secondary'>+91 9555040155</h6>
                                        <p>Emergency Support: For urgent medical needs, contact us directly through our emergency hotline or book an urgent appointment online for immediate assistance</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaClock className="icon"/>
                                        <h4>Working Hours</h4>
                                        <small className='text-secondary'>Timing schedule</small>
                                        <ul className='list-group list-group-flush'>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Sun - Wed : </p> <p>8:00 - 17: 00</p></li>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Thus - Fri : </p> <p>9:00 - 17: 00</p></li>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Sat - Sun : </p> <p>10:00 - 17: 00</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default InfoPage