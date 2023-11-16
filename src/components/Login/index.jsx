import './index.scss'
import {Form, useActionData, useNavigate} from 'react-router-dom'
import { Container,Row,Col} from 'reactstrap';
import {toast} from 'react-toastify'
import { loginUser } from '../utils/getAuth';
import { Authenticate, authentication } from '../../features/slices/AuthSlice';
import {useSelector, useDispatch} from 'react-redux'



export async function action({request}){
 const formData =await request.formData()
 const email= formData.get("email")
 const password= formData.get("password")

 try {
  const res =await loginUser({ email, password})
  toast.success(`Login is successful`)
  return res
 } catch (error) {
  toast.error(error.message)
  return error.message
 }
}
const Login = () => {

  const token=useActionData()
  const auth=useSelector(Authenticate)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  console.log(token)

  function validateUser(access){
    if(!auth){
      dispatch(authentication(access))
      return navigate("/")
    }else if(auth){
      toast.success("You're logged in")
      return navigate("/")
    }else{
      toast.error(token)
    }
  }


  return <section> 
  <Container>
        <Row>
          <Col lg='6' md='4'>
          <Form method='post' className='form__input' replace
          data-aos="fade-up"
          data-aos-duration="2000"
          >
          <h2 data-aos="zoom-in"
          data-aos-duration="1000"
          >Login</h2>
         
          <input 
          type='email' 
          name='email' 
          placeholder='Enter your Email' 
          required

          />
          <input 
          type='password' 
          name='password' 
          placeholder='Enter your password' 
          required

          />

          <button className="register__btn" onClick={()=>validateUser({token:token?.access})}>Login</button>
          </Form>
          </Col>
        </Row>
  </Container>
  </section>
}

export default Login;
