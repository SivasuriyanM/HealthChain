import React from 'react'

import '../styles/footer.css'
function Footer() {
  return (
    <div className='footer'>
        <h5>Copyrigth {new Date().getFullYear()}</h5>
    </div>
  )
}

export default Footer