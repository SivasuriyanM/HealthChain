import React from 'react'
import { DocMenuList } from '../helpers/docdashboardItem'
import DocDashItem from '../components/DocDashItem'
import '../styles/patient.css'

function Doctor() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Doctor DashBoard</h1>
        <div className='menuList'>{DocMenuList.map((menuItem, key)=>{
            return (<DocDashItem key={key} image={menuItem.image} name={menuItem.name} link ={menuItem.link}/>);
        })}</div>
    </div>
  )
}

export default Doctor