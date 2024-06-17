import React,{useContext} from 'react';
import { AppContext } from '../context';

const EditDoc = () => {
    const contData = useContext(AppContext);
    
    const display = async (event) => {
        event.preventDefault();
        const {contract} = contData.state;
        const name = document.querySelector('#name').value;
        
        const gen = document.querySelector('#gender').value;
        const hn = document.querySelector('#hn').value;
        const ph = document.querySelector('#ph').value;
        const qa = document.querySelector('#qa').value;
        const sp = document.querySelector('#sp').value;
        
        
        console.log("Check" +contract)
        const transaction = await contract.editDoctor(1, name, gen, sp, hn, ph, qa);
        await transaction.wait();
        console.log("Doctor Registed")
    }
  return (
    <>
    <div className='rout'>
    <form onSubmit={display}>
      <div className='inner'>
        
        
        <table>
        <h2>Update Profile</h2>
        <hr/>
          <tc>
            <tr ><div className="row">
            <label>Name</label>
            <input type='text' id='name' ></input>
            </div></tr>
            <tr ><div className="row">
            <label>Gender</label>
        <input type='text' id='gender' ></input>
            </div></tr>
            <tr ><div className="row">
            <label>Specialist</label>
        <input type='text' id='sp' ></input>
            </div></tr>
          </tc>

          <tc>
            <tr ><div className="row">
            <label>Hospital Name</label>
        <input type='text' id='hn' ></input>
            </div></tr>
            <tr ><div className="row">
            <label>Phone Number</label>
        <input type='text' id='ph' ></input>

            </div></tr>
            <tr ><div className="row">
            <label>Qualification</label>
            <input type='text' id='qa' ></input>
            </div></tr> 
                  
            </tc>
            <hr/>
        </table>
       
      </div>
      <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  )
}

export default EditDoc