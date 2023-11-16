import './index.scss'
import {Form, redirect} from 'react-router-dom'
import { Container,Row,Col} from 'reactstrap';
import {toast} from 'react-toastify'
import { registerUser } from '../utils/getAuth';



export async function action({request}){
 const formData =await request.formData()
 const email= formData.get("email")
 const name= formData.get("name")
 const password1 = formData.get("password1")
 const password2 = formData.get("password2")

 try {
  const res = await registerUser({email, name, password1, password2})
  toast.success(`${res.name} your registration is successful`)
  return redirect("/login")
 } catch (error) {
  toast.error(error.message)
  return error.message
 }
}
const Register = () => {
  return <section>
  <Container>
        <Row>
          <Col lg='9' md='4'>
          <Form method='post' className='form__input' replace
          data-aos="fade-up"
          data-aos-duration="2000"
          >
          <h2 data-aos="zoom-in"
          data-aos-duration="1000"
          >Register</h2>
          <input 
          type='email' 
          name='email' 
          placeholder='Enter your email' 
          required

          />
          <input 
          type='text' 
          name='name' 
          placeholder='Enter your username' 
          required

          />
          <input 
          type='password' 
          name='password1' 
          placeholder='Enter your password' 
          required

          />
           <input 
          type='password' 
          name='password2' 
          placeholder='Repeat password' 
          required

          />
          <button className="register__btn">Register</button>
          
          </Form>
          </Col>
        </Row>
  </Container>
  </section>
}

export default Register;
