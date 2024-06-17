import React from 'react'

function LoginItem({image,name,link}) {
  return (
    <div className='menuItem'>
        <div style={{backgroundImage:`url(${image})`}}></div>
        <h1>{name}</h1>
        <h3>{link}</h3>
    </div>
  );
}

export default LoginItem