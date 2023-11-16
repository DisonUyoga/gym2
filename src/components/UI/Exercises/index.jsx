import './index.scss'
import {Container, Row, Col} from 'reactstrap'
import lunges from '../../../assets/img/lunges.png'
import yoga from '../../../assets/img/yoga-pose.png'
import extended from '../../../assets/img/extended.png'

const Exercises = ({exercise_data}) => {
  return <section>
    <Container className="exercise__container" id="schedule">
    <Row>
    <Col md="12" lg="12">
      <div className="exercise__top">
        <h2>Exercise <span className="highlights">Benefits</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur <br/>adipisicing elit. Eius dignissimos esse ea nulla id sunt!
        </p>
      </div>
      </Col>
      <Col lg="12" mb="12" className="exercise__wrapper">

      {
        exercise_data?.map(item=>(
          <div key={item.id} className="exercise__item"
          data-aos="zoom-in"
          data-aos-duration="1500"
          >
          <span className="exercise__icon"
          
          >
            <img src={item.imgUrl} alt="" />
          </span>
          <div className="exercise__content">
            <h4>{item.title}</h4>
            <p>
             {item.benefit}
            </p>
          </div>
         </div>
        ))
      }
        
      </Col>
      </Row>
    </Container>
  </section>
}

export default Exercises;
