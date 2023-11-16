import React, {useRef, useEffect} from 'react';
import '../../styles/header.scss'
import logo from '../../assets/img/dumble.png'
import {Outlet, Link} from 'react-router-dom'
import "./index.scss"
import { Authenticate } from '../../features/slices/AuthSlice';
import {Container, Row} from 'reactstrap'
import {useSelector} from 'react-redux'

 

const nav__links=[
 
  {
    path:"#schedule",
    display: "Schedule"
  },
  {
    path:"#classes",
    display: "classes"
  },
  {
    path:"#pricing-plan",
    display: "pricing"
  },
  {
    path:"#testimonials",
    display: "Testimonials"
  },

]
const Header = () => {
  const headerRef=useRef(null)
  const toggle_menu=useRef(null)
  const toggle_user=useRef(null)
  const auth=useSelector(Authenticate)

  const stickyHeaderFunc=()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current?.classList?.add("sticky__header")
      }else{
        headerRef.current?.classList?.remove("sticky__header")
      }
    })
  }
  useEffect(()=>{
  stickyHeaderFunc()
  return ()=> window.removeEventListener("scroll", stickyHeaderFunc);
  },[])

  const handleClick=e=>{
    e.preventDefault()
    const targetAttr= e.target.getAttribute("href")
    const location= document.querySelector(targetAttr).offsetTop
    window.scrollTo({
      left:0,
      top:location-80,
    })
    toggle_user.current.classList.remove("toggle__user")
    toggle_menu.current.classList.remove("toggle__menu")

  }

  const mediaMenu=()=>{
    toggle_menu.current.classList.toggle("toggle__menu")
    toggle_user.current.classList.remove("toggle__user")

    setTimeout(()=>{
      toggle_menu.current.classList.remove("toggle__menu")
    }, 7000)
  }

  const userMenu=()=>{
    toggle_user.current.classList.toggle("toggle__user")
    toggle_menu.current.classList.remove("toggle__menu")
    setTimeout(()=>{
      toggle_user.current.classList.remove("toggle__user")
    }, 10000)
  }

  return <header className="header">
  <Container> 
  <Row>
  <nav className="nav__wrapper">
    <div className="header__left">
    <div className='logo'>
    <img src={logo} alt="" />
    </div>
      <h4>FitBody</h4>
    </div>

    <div className="header__center">
      <ul className='display' ref={toggle_menu}>
        <li className='home'><Link to="/" >Home</Link></li>
        {
          nav__links.map(item=>(
            <li key={item.display} className='header__item' onClick={handleClick}><a href={item.path}>{item.display}</a></li>
          ))
        }
      </ul>
    </div>

   {!auth? <div className="header__right display" ref={toggle_user}>
        <Link  to="/login" className="login__btn">Login</Link>
        <Link to="/register" className="register__btn">Register</Link>

    </div>:null}
    
    <div className="mobile__menu">
        <span className="mobile__item" onClick={userMenu}>
            <i className="ri-user-line"></i>
        </span>
    </div>
    
    <div className="mobile__menu">
      <span className="mobile__item" onClick={mediaMenu}>
          <i className="ri-menu-line"></i>
      </span>
    </div>
    </nav>
  </Row>
  </Container>
  <Outlet/>
  </header>
}

export default Header;

