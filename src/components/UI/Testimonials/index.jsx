
import { Container, Row, Col} from 'reactstrap';
import './index.scss'
import {Swiper, SwiperSlide} from 'swiper/react'

import {EffectCards} from "swiper/modules"
import 'swiper/css'
import "swiper/css/effect-cards"

// import avatar01 from '../../../assets/img/avatar01.png'
// import avatar02 from '../../../assets/img/avatar02.png'


const Testimonials = ({testimony_data}) => {

  return <section> 
  <Container className='test__wrapper'>
  {testimony_data.length>0?<Row className='sliders'>

  <Col md="9" lg="12">
  <h2 
  className="section_title" 
  id="testimonials" 
  data-aos="zoom-in"
  data-aos-duration="2000"
  >Testimonials</h2>

  </Col>
  <Col lg="9" md="9">
    <Swiper
     effect={"cards"}
     grabCursor={true}
     modules={[EffectCards]}
     className="mySwiper"
  >
    {
      testimony_data?.map(item=>(
        <SwiperSlide key={item.id}>
        <div className="slide__item">
          <div className="slide__img-01">
            <img src={item.imgUrl} alt="" />
          </div>
          <h4>{item.name}</h4>
          <p>
          {item.description}
          </p>
        </div>
      </SwiperSlide>
      ))
    }   
    </Swiper>
    </Col>
    </Row>: null}
  </Container>
  </section>
}

export default Testimonials;
