import './index.scss'
import logo from '../../../assets/img/dumble.png'
import React from 'react';
import {Container, Row, Col} from 'reactstrap'

const Footer = () => {
  const year = new Date().getFullYear()
  return <footer className="footer"
  data-aos="fade-up"
  data-aos-duration="1500"
  >
    <section>
      <div className="footer__wrapper">
      <Container>
      <Row className='inner__footer'>
           <Col lg="4" md="6">
            <div className="footer__box">
            <div className="logo">
                  <div className="logo__img">
                    <img src={logo} alt="" />
                  </div>
                  <h2>FitBody</h2>
            </div>
            <p>
             elit. Eos aut, dolor aspernatur optio, reiciendis non culpa eum asperiores accusantium rem ea pariatur nemo itaque vel quis tempore, ipsa quidem obcaecati.
            </p>
            </div>
            </Col> 
        
        <Col md="2" lg="3">
        <div className="footer__box">
          <h4 className="footer__title">Company</h4>
          <ul className="footer__links">
            <li><a href="#">Our program</a></li>
            <li><a href="#">Our plan</a></li>
            <li><a href="#">Become a member</a></li>
          </ul>
        </div>
        </Col>
        <Col md="2" lg="3">
        <div className="footer__box">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        </Col>
        
        <Col md="2" lg="3">
        <div className="footer__box">
          <h4 className="footer__title">Quick Links</h4>
          <ul className="footer__links">
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        </Col>
        
      </Row>
      
    </Container>
 
      
      
    </div>
    <p className="text-center">Copyright &#169; {year}. Developed by Dison. All rights reserved </p>
    </section>
  </footer>
}

export default Footer;
