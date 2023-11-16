import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'
import {useEffect} from 'react'
import Aos from 'aos'
import './App.scss'
import './styles/variables.scss'
import Header from './components/Head/Header'
import Hero from './components/UI/Hero'
import Classes from './components/UI/Classes'
import Register, {action as register} from './components/Register'
import Login, {action as actionLogin} from './components/Login'

const router=createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header/>}>
  <Route index element={<Hero/>}/>
  <Route path='register' action={register} element={<Register/>}/>
  <Route path="login" action={actionLogin} element={<Login/>}/>
  <Route path='classes' element={<Classes/>}/>
  </Route>
))
function App() {

  useEffect(()=>{
    Aos.init()
  },[])

  return <>
      
      <RouterProvider router={router}/>
     
    </>
  
}

export default App
