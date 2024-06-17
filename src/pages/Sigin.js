import React from 'react'
import { signInItam } from '../helpers/signUp'
import SiginItem from '../components/SigninItem'
import '../styles/patient.css'

function Sigin() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>SignIn</h1>
        <div className='menuList'>{signInItam.map((menuItem, key)=>{
            return (<SiginItem key={key} image={menuItem.image} name={menuItem.name} link={menuItem.link}/>);
        })}</div>
    </div>
  )
}

export default Sigin;