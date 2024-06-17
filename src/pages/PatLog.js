
import React,{useContext} from 'react'
import { AppContext } from '../context';
import '../styles/patlog.css'

const PatLog = () => {
    const contData = useContext(AppContext);
  const display = async (event) => {
    event.preventDefault();
    const {contract} = contData.state;
    const name = document.querySelector('#name').value;
    
    const add = document.querySelector('#add').value;
    console.log("Check" +contract)
    const pa = await contract.getPatientAcc();
    const pn = await contract.getPatientName();
    console.log(pa)
    console.log(contData.account[0])
        if((pa[0] === add && pn[0] === name) || (pa[1] === add && pn[1] === name)){
            window.location.href = "/patient";
        }else{
          alert("Enter valid Details")
        }
    console.log("Login succesful")
}
  return (
    <>
    <div className='lout'>
    <form onSubmit={display} className='linner'>
  <div >
    <h2>Patient Login</h2>
    <hr/>
    <div className='lab'>
      <label >
        Full Name
      </label>
    </div>
    <div className='lab'>
      <input className='inp' id="name" type="text" ></input>
    </div>
  </div>
  <div>
    <div className='lab'>
      <label>
        Address
      </label>
    </div>
    <div className='lab'>
      <input className='inp' id='add' type="password" placeholder="******************"></input>
    </div>
  </div>
  <div>
    <div></div>
    <div className='lab'>
      <button className='btn' type="button" onClick={display}>
        Login
      </button >
    </div>
    </div>
  </form>
  </div>
    </>
  )
}

export default PatLog