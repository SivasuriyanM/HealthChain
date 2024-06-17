import React from 'react'
import Insta from '@mui/icons-material/Instagram'
import Fb from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import '../styles/footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <Insta/>
            <Fb/>
            <Twitter/>
        </div>
    </div>
  )
}

export default Footer