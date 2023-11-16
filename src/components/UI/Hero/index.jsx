
import './index.scss'
import heroimg from '../../../assets/img/gym-02.png'
import dumbleIcon from '../../../assets/img/dumble.png'
import Exercises from '../Exercises'
import Start from '../Start'
import Pricing from '../Pricing'
import Footer from '../Footer'
import Testimonials from '../Testimonials'
import { useSelector , useDispatch} from 'react-redux'
import {
   getScheduleStatus,
   getScheduleError, 
   ScheduleData,
   selectAllSchedule

  } from '../../../features/slices/pricingSlice'

import { 
  getExerciseError,
  getExerciseStatus,
  exerciseData,
  selectAllExercise
} from '../../../features/slices/exerciseSlice'
import {useEffect} from 'react'

import { 
  getClassError,
  getClassStatus,
  classData,
  selectAllClass
 } from '../../../features/slices/classSlice'
 import {
  getTestimonyError,
  getTestimonyStatus,
  testimonyData,
  selectAllTestimony
 } from '../../../features/slices/testimonialsSlice'
 import Spinner from "../../Spinner"

import {Container, Row, Col} from 'reactstrap'

const Hero = () => {

  const schedule_status=useSelector(getScheduleStatus)
  const schedule_error=useSelector(getScheduleError)
  const schedule_data=useSelector(selectAllSchedule)

  const exercise_status=useSelector(getExerciseStatus)
  const exercise_error=useSelector(getExerciseError)
  const exercise_data=useSelector(selectAllExercise)

  const class_status=useSelector(getClassStatus)
  const class_error=useSelector(getClassError)
  const class_data=useSelector(selectAllClass)

  const testimony_status=useSelector(getTestimonyStatus)
  const testimony_error=useSelector(getTestimonyError)
  const testimony_data=useSelector(selectAllTestimony)
  const dispatch=useDispatch()


  useEffect(()=>{
    if(schedule_status==="idle"){
      dispatch(ScheduleData())
    }
  },[schedule_status, dispatch])


  useEffect(()=>{
    if(exercise_status==="idle"){
      dispatch(exerciseData())
    }
  },[exercise_status, dispatch])


  useEffect(()=>{
    if(class_status==="idle"){
      dispatch(classData())
    }
  },[class_status, dispatch])

  useEffect(()=>{
    if(testimony_status==="idle"){
      dispatch(testimonyData())
    }
  },[testimony_status, dispatch])
  
  console.log(testimony_data);
  
  const checkStatus= exercise_data.length>0 && class_data.length>0 && schedule_data.length>0 && testimony_data.length>0

  // {checkStatus?
  return <>{checkStatus?<section>
    <Container id="home">
      <Row>
      <Col lg="6">
       <div className="hero__content">
              <h2 className="section__title" 
              data-aos="fade-up"
              data-aos-duration="1500"
              >
                Exercise is the key to <span className="highlights">Healthy</span> Lifestyle
              </h2>
              <p
              data-aos="fade-up"
              data-aos-delay='100'
              data-aos-duration="1000"
              >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.<br/> Molestiae deleniti debitis necessitatibus nostrum ratione itaque!
              </p>
          
          <div className="hero__btns"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="2000"
          >
                  <button className="register__btn">
                    Get Started
                  </button>
                  <button className="watch__btn">
                    <span>
                      <i className="ri-play-fill"></i>
                    </span>watch video
                  </button>
          </div>
      
      </div>
      </Col>
      <Col lg="6">
       <div className="hero__img">
            <div className="hero__img-wrapper">
              
              <div className="box-01">
                      <div className="box-02">
                            <div className="box-03">
                                <div className="box__img">
                                  <img src={heroimg} alt="" />
                                </div>
                            </div>
                      </div>
              </div>
            
            
          
          
              <div className="heart__rate"
              data-aos="fade-right"
              data-aos-duration="1500"
              >
                <h5>Heart Rate</h5>
                <span><i className="ri-heart-pulse-fill"></i></span>
                <h6>2567 8PM</h6>
              </div>

              <div className="gym__location"
              data-aos="fade-left"
              data-aos-duration="1500"
              >
                <span><i className="ri-map-pin-fill"></i></span>
                <h5>Find a new<br/> gym near you</h5>
              </div>

                <div className="dumble__icon"
                data-aos="fade-down"
              data-aos-duration="1500"
                >
                    <img src={dumbleIcon} alt="" />
                </div>

       </div>
       </div>
       </Col>
       </Row>
    </Container>
  

  {/* <Start class_data={class_data}/>
  <Exercises exercise_data={exercise_data}/>
  
  
  <Footer/> */}
  <Exercises exercise_data={exercise_data}/>
  <Start class_data={class_data}/>
  <Pricing schedule_data={schedule_data}/>
  <Testimonials testimony_data={testimony_data}/>
  <Footer/> 
  </section> : <h4 className="loading">Loading...</h4> }
  </>
  
}

export default Hero;
