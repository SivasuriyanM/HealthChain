import React from 'react'

function DocDashItem({image,name,link}) {
  return (
    <div className='menuItem'>
    <div style={{backgroundImage:`url(${image})`}}></div>
    <h1>{name}</h1>
    <h4>{link}</h4>
    </div>
  )
}

export default DocDashItem