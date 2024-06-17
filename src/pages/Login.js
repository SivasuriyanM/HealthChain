import React from 'react'
import { loginItam } from '../helpers/loginItem'
import LoginItem from '../components/LoginItem'
import '../styles/patient.css'

function Login() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Login</h1>
        <div className='menuList'>{loginItam.map((menuItem, key)=>{
            return (<LoginItem key={key} image={menuItem.image} name={menuItem.name} link={menuItem.link}/>);
        })}</div>
    </div>
  )
}

export default Login;