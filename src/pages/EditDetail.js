import React,{useContext} from 'react';
import { AppContext } from '../context';
import '../styles/reg.css'

const EditDetail = () => {
    const contData = useContext(AppContext);
    
    const display = async (event) => {
        event.preventDefault();
        const {contract} = contData.state;
        const name = document.querySelector('#name').value;
        
        const id = document.querySelector('#id').value;
        const gen = document.querySelector('#gender').value;
        const bg = document.querySelector('#bg').value;
        const ph = document.querySelector('#ph').value;
        const ha = document.querySelector('#ha').value;
        const Issue = document.querySelector('#is').value;
        const med = document.querySelector('#md').value;
        const dob = document.querySelector('#dob').value;
        console.log( id, name, gen, bg, ph, ha, Issue, med, dob)
        console.log("Check" +contract)
        const transaction = await contract.editPatient(id, name, gen, bg, ph, ha, Issue, med, dob);
        await transaction.wait();
        console.log("Patient Registed")
    }
  return (
    <>
    
    <div className='rout'>
    <form onSubmit={display}>
      <div className='inner'>
        <table>
        <h2>Update Details</h2>
        <hr/>
          <tc>
            <tr ><div className="row">
            <label>Patient id</label>
            <input type='number' id='id' ></input>
            </div></tr>
            <tr ><div className="row">
            <label>Patient name</label>
            <input type='text' id='name' ></input>
            </div></tr>
            <tr ><div className="row">
            <label>Patient gender</label>
          <input type='text' id='gender' ></input>
            </div></tr>
            <tr ><div className="row">
            <label>Patient BloodGroup</label>
          <input type='text' id='bg' ></input>
            </div></tr>
          <tr ><div className="row">
          <label>Patient Phone No</label>
          <input type='text' id='ph' ></input>
          </div></tr>
          
          </tc>

          <tc>
            <tr ><div className="row">
            <label>Patient Home Address</label>
          <input type='text' id='ha' ></input>

            </div></tr>
            <tr ><div className="row">
            <label>Patient Issue</label>
          <input type='text' id='is' ></input>

            </div></tr>
            <tr ><div className="row">
            <label>Patient Medicine</label>
          <input type='text' id='md' ></input>

            </div></tr>
            <tr ><div className="row">
            <label>Patient DOB</label>
          <input type='text' id='dob' ></input>

            </div></tr>
            <tr ><div className="row">
            <button type='submit'>Update</button>
            </div></tr>          
            </tc>
        </table>
      </div>
      </form>
    </div>
    </>
  )
}
export default EditDetail