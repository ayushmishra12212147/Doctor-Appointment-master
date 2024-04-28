import React from 'react'
import SubHeader from '../Shared/SubHeader'
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header'
import img from '../../images/features/baby.png';

import f1 from '../../images/features/feature-01.jpg'
import f2 from '../../images/features/feature-02.jpg'
import f3 from '../../images/features/feature-03.jpg'
import f4 from '../../images/features/feature-05.jpg'
import f5 from '../../images/features/feature-06.jpg'


import { Link } from 'react-router-dom'
import doctorBg from '../../images/img/doctors-bg.jpg';

const Service = () => {
  const weArePleaseStyle = {
    backgroundColor: "antiquewhite",
    height: "60vh",
    background: `url(${doctorBg}) no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    padding: "10px",
    position: "relative",
    marginTop: 200,
    marginBottom: 100
  }
  return (
    <>
      <Header />
      <SubHeader title="Service" subtitle="We provide all services for better and natural treatment." />

      <div className="container" style={{ marginTop: 200, marginBottom: 100 }}>
        <div className="row">
          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
                <div className="card shadow border-0 mb-5">
                  <img src={img} alt="" className=" flex img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Child care</h4>
                    <p className="mb-4">Experience compassionate and specialized pediatric care at our Child Care Center, where our dedicated team is committed to  development of your little ones.</p>
                  </div>
                </div>
              </div>
            ))
          }

          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
                <div className="card shadow border-0 mb-5">
                  <img src={f1} alt="" className=" flex img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">General Ward</h4>
                    <p className="mb-4">Providing compassionate and comprehensive care for patients with a wide range of medical conditions in our General Ward.</p>
                  </div>
                </div>
              </div>
            ))
          }

          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
                <div className="card shadow border-0 mb-5">
                  <img src={f2} alt="" className=" flex img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Heart Center</h4>
                    <p className="mb-4">Experience exceptional heart care and support at our Heart Center, where our specialized team is dedicated to your cardiovascular health and well-being.</p>
                  </div>
                </div>
              </div>
            ))
          }


          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
                <div className="card shadow border-0 mb-5">
                  <img src={f3} alt="" className=" flex img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Intensive Care Unit (ICU)</h4>
                    <p className="mb-4">Experience specialized care in our Intensive Care Unit, where round-the-clock monitoring and advanced medical support are provided for critically ill patients</p>
                  </div>
                </div>
              </div>
            ))
          }


          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
                <div className="card shadow border-0 mb-5">
                  <img src={f4} alt="" className=" flex img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Surgical Services</h4>
                    <p className="mb-4">Offering a range of surgical procedures performed by skilled surgeons using advanced techniques and technologies.</p>
                  </div>
                </div>
              </div>
            ))
          }


          {
            Array(1).fill(null).map((_item, id) => (
              <div className="col-lg-4 col-md-6 col-sm-6" key={id}>
                <div className="card shadow border-0 mb-5">
                  <img src={f5} alt="" className=" flex img-fluid" style={{ maxHeight: '17rem', objectFit: 'cover' }} />
                  <div className="p-2">
                    <h4 className="mt-4 mb-2">Medical Store</h4>
                    <p className="mb-4">Conveniently located onsite, our Medical Store offers a wide range of pharmaceutical products, ensuring easy access to medications.</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>



      </div>

      <section style={weArePleaseStyle}>
        <div className="container" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}>
          <div className="row">
            <div className="col-lg-7">
              <div className="d-flex align-items-center">
                <div className='mb-4 section-title text-center'>
                  <h2 className='text-uppercase'>We are pleased to offer you the</h2>
                  <p className='form-text'>Contact us for free to get our help</p>
                  <Link to={'/doctors'} className="btn-get-started scrollto">Get Started</Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}

export default Service