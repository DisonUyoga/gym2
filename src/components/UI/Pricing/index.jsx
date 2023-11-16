import { Container, Row, Col } from 'reactstrap';
import './index.scss'

import React, {useEffect, useState} from 'react';

const Pricing = ({schedule_data}) => {

  const [regular, setRegular]=useState([])
  const [premium, setPremium]=useState([])
  const [standard, setStandard]=useState([])

  useEffect(()=>{
    const filteredRegular=schedule_data?.filter(item=>item?.member==="Regular")
    const filteredPremium=schedule_data?.filter(item=>item?.member==="Premium")
    const filteredStandard=schedule_data?.filter(item=>item?.member==="Standard")
    setRegular(filteredRegular)
    setPremium(filteredPremium)
    setStandard(filteredStandard)
  },[schedule_data])

  console.log("regular",regular)
  return <section>
  <Container>
  <Row>
  <Col lg="12" mb="12">
    <div className="pricing__top" id="pricing-plan">
      <h2 className="section__title">
        Gym <span className="highlights">Pricing</span> Plan
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque voluptatibus quisquam <br/>, assumenda nesciunt temporibus explicabo?
      </p>
    </div>
    </Col>
    </Row>
    <Row className="pricing__wrapper">
      <Col lg="3" md="9">
        {regular.length>0?<div className="pricing__item"
        data-aos="fade-up"
          data-aos-duration="1000"
        >

          <div className="pricing__card-top">
            <h2 className="section__title">{regular.length>0? `${regular[0].member} Member`: "Loading..."}</h2>
            <h2 className="pricing">{regular.length>0? `Ksh. ${regular[0].price}`: "Loading..."}<span> duration: {regular.length>0? regular[0].period: "Loading..."}</span></h2>
          </div>
          <div className="services">
            <ul>
            {
              
              regular.length>0? regular?.map(item=>
                <li key={item.id}><span><i className="ri-checkbox-blank-circle-fill"></i></span>{item.service_item}</li>
              ):<h4>Loading...</h4>
            }
             
            </ul>
            <div className="join__btn">
            <button className="register__btn">Join Now</button>
            </div>
            
          </div>
        </div>:null}
        </Col>
        <Col lg="4" md="9">
       {premium.length>0? <div className="pricing__item pricing__item-02"
        data-aos="fade-up"
          data-aos-duration="1500"
        >
          <div className="pricing__card-top">
            <h2 className="section__title">{premium.length>0? `${premium[0].member} Member`: "Loading..."} </h2>
            <h2 className="pricing">{premium.length>0? `Ksh. ${premium[0].price}`: "Loading..."}<span> duration: {premium.length>0? premium[0].period: "Loading..."}</span></h2>
          </div>
          <div className="services">
            <ul>
            {
              
              premium.length>0? premium?.map(item=>
                <li key={item.id}><span><i className="ri-checkbox-blank-circle-fill"></i></span>{item.service_item}</li>
              ):<h4>Loading...</h4>
            }
            </ul>

            <div className="join__btn">
            <button className="register__btn">Join Now</button>
            </div>
          </div>
        </div>:null}
        </Col>

        <Col md="9" lg="3">
        {standard.length>0?<div className="pricing__item"
        data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="pricing__card-top">
            <h2 className="section__title">{standard.length>0? `${standard[0].member} Member`: "Loading..."}</h2>
            <h2 className="pricing">{standard.length>0? `Ksh. ${standard[0].price}`: "Loading..."} <span> duration: {standard.length>0? standard[0].period: "Loading..."}</span></h2>
          </div>
          <div className="services">
            <ul>
            {
              
              standard.length>0? standard?.map(item=>
                <li key={item.id}><span><i className="ri-checkbox-blank-circle-fill"></i></span>{item.service_item}</li>
              ):<h4>Loading...</h4>
            }
            </ul>

            <div className="join__btn">
            <button className="register__btn">Join Now</button>
            </div>
          
          </div>
        </div>:null}
        </Col>
    
    </Row>
  </Container>
  </section>
}

export default Pricing;

