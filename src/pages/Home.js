import React from 'react';
// import { Link } from 'react-router-dom';
import backGroundImg from "../assets/background.jpg"
import '../styles/home.css'

function Home(){
  const login = async()=>{
    window.location.href = "/login";
}
const sign = async()=>{
  window.location.href = "/sign";
}
    return (
        <div className='home'
        style={{backgroundImage:`url(${backGroundImg})`}}>
          <div className='headerContainer'>
            <h1>HEALTHCHAIN</h1>
            <button onClick={login}>LOGIN</button>
            <br/>
            <button onClick={sign}>SIGN IN</button>
          </div>
        </div>
      );

}
export default Home;