import React from 'react'
import { MenuList } from '../helpers/dashBoardItems'
import DashItem from '../components/DashItem'
import '../styles/patient.css'

function Patient() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Patient DashBoard</h1>
        <div className='menuList'>{MenuList.map((menuItem, key)=>{
            return (<DashItem key={key} image={menuItem.image} name={menuItem.name} link={menuItem.link}/>);
        })}</div>
    </div>
  )
}

export default Patient