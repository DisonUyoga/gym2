import './index.scss'
import { Container, Row, Col } from 'reactstrap';
import trainerimg from '../../../assets/img/trainer.png'
import {Link} from 'react-router-dom'


const Start = () => {
  return <section >
    <Container  id="classes">
      <Row>
      <Col lg="6" mb="9">
      <div className="start__img">
        <img src={trainerimg} alt=""
          data-aos="fade-left"
          data-aos-duration="1500"
        />
      </div>
      </Col>
      <Col lg="6" md="9">
      <div className="start__content"
      data-aos="zoom-in"
          data-aos-duration="1500"
      >
        <h2 className="section__title">
            Ready to make a <span className="highlights">Change</span>?
        </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores officia ut reprehenderit soluta ipsum dolorum aliquid eveniet aspernatur nobis minus.
        </p>
        <Link to="/classes" className="register__btn">Get Started</Link>
      </div>
      </Col>
      </Row>
    </Container>
  </section>
}

export default Start;
