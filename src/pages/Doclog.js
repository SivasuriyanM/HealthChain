import React,{useContext} from 'react'
import { AppContext } from '../context';
import '../styles/patlog.css'

const Doclog = () => {
    const contData = useContext(AppContext);
  const display = async (event) => {
    event.preventDefault();
    const {contract} = contData.state;
    const name = document.querySelector('#name').value;
    const add = document.querySelector('#add').value;
    console.log("Check" +contract)
    const da = await contract.getDoctorAccounts();
    const dn = await contract.getDoctorName();
    console.log(contData.account[0]);
    console.log(da[0]);
    const metadd = contData.account[0]
    if(add === metadd){
        if((contData.account[0] === add && name === dn[0]) || (contData.account[0] === add && name === dn[1])){
            window.location.href = "/doctor";
        }else{
            window.location.href = "/";
        }
    }else{
        alert("Enter valid address")
    }
    console.log("Login succesful")
}
  return (
    <>
    <div className='lout'>
    <form onSubmit={display} className='linner'>
  <div >
    <h2>Doctor Login</h2>
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

export default Doclog;