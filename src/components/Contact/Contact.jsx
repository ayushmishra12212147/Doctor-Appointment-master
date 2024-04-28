import React, { useEffect } from 'react'
import Footer from '../Shared/Footer/Footer'
import { useForm } from 'react-hook-form';
import { FaLocationArrow, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Header from '../Shared/Header/Header';
import './index.css';
import SubHeader from '../Shared/SubHeader';
import { useContactMutation } from '../../redux/api/contactApi';
import { message } from 'antd';

const Contact = () => {
    const [contact, {isLoading, isError, error, isSuccess}]= useContactMutation();
    const { register, handleSubmit, reset } = useForm({});
    const onSubmit = (data) => {
        contact(data);
        reset();
    };
    
    useEffect(() => {
        if(isSuccess){
            message.success("Successfully Message Send !");
        }
        if(isError && error){
            message.error(error?.data?.message);
        }
    }, [isSuccess, isError, error])
    return (
        <>
            <Header />
            <SubHeader title="Contact us" subtitle="Contact us for your queries details and colabs." />
            <section id="contact" className="contact mt-5 mb-5">
                <div className="container" style={{ marginTop: 80, marginBottom: 120 }}>
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="info rounded p-3" style={{ background: '#f8f9fa' }}>
                                <div className="d-flex mb-2 gap-2">
                                    <FaLocationArrow className='icon' />
                                    <div>
                                        <h4>Location:</h4>
                                        <p>Uni Hospital Lovely Professional University</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-2 gap-2">
                                    <FaEnvelope className='icon' />
                                    <div>
                                        <h4>Email:</h4>
                                        <p>ayushkumar.12212147@lpu.in</p>
                                    </div>
                                </div>

                                <div className="d-flex mb-2 gap-2">
                                    <FaPhoneAlt className='icon' />
                                    <div>
                                        <h4>Call:</h4>
                                        <p>+91 9555040155</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-8">
                            <div className="mb-5 p-2 rounded" style={{ background: '#f8f9fa' }}>
                                <form className="row form-row" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="col-md-6">
                                        <div className="form-group mb-2 card-label">
                                            <label>First Name</label>
                                            <input required {...register("firstName")} className="form-control" placeholder='First Name'/>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group mb-2 card-label">
                                            <label>Last Name</label>
                                            <input required {...register("lastName")} className="form-control" placeholder='Last Name'/>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group mb-2 card-label">
                                            <label>Email</label>
                                            <input required {...register("email")} type='email' className="form-control" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group mb-2 card-label">
                                            <label>Subject</label>
                                            <input required {...register("subject")} className="form-control" placeholder="Enter your subject"/>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label className='form-label'>Message</label>
                                            <textarea required {...register("text")} className="form-control mb-3" cols="30" rows="10" placeholder="enter your message"/>
                                        </div>
                                    </div>

                                    <div className="text-center mt-3 mb-5">
                                        <button disabled={isLoading} type='submit' className="appointment-btn">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="container">
                        {/* eslint-disable-next-line */}
                        <iframe style={{ border: 0, width: "100%", height: "350px" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89409.24265554058!2d75.58090729532174!3d31.274500672791252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5f5e9c489cf3%3A0x4049a5409d53c300!2sLovely%20Professional%20University!5e0!3m2!1sen!2sin!4v1714325416422!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Contact