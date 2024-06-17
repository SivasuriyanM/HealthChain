import React,{useContext} from 'react';
import { AppContext } from '../context';

const GetHD = () => {
    const contData = useContext(AppContext);
    
    const display = async (event) => {
        event.preventDefault();
        const {contract} = contData.state;
        const cp = document.querySelector('#cp').value;
        const rbp = document.querySelector('#rbp').value;
        const mhra = document.querySelector('#mhra').value;
        const sc = document.querySelector('#sc').value;
        const fbs = document.querySelector('#fbs').value;
        const recg = document.querySelector('#recg').value;
        const eia = document.querySelector('#eia').value;
        const thal = document.querySelector('#thal').value;
        console.log( cp, rbp, mhra, sc, fbs, recg, eia, thal)
        const transaction = await contract.setHeartDisease(cp, rbp, mhra, sc, fbs, recg, eia, thal);
        await transaction.wait();
        console.log("Recorded")
    }
  return (
    <>
    {/* {console.log(contData)}
    <form onSubmit={display}>
        <label>Chest-pain type</label>
        <input type='text' id='cp' ></input>
        <label>Resting Blood Pressure</label>
        <input type='text' id='rbp' ></input>
        <label>Max heart rate achieved</label>
        <input type='text' id='mhra' ></input>
        <label>Serum Cholestrol</label>
        <input type='text' id='sc' ></input>
        <label>Fasting Blood Sugar</label>
        <input type='text' id='fbs' ></input>
        <label>Resting ECG</label>
        <input type='text' id='recg' ></input>
        <label>Exercise induced angina </label>
        <input type='text' id='eia' ></input>
        <label>Thalassemia </label>
        <input type='text' id='thal' ></input>
        <button type='submit'>Submit</button>
    </form> */}
    <div className='rout'>
    <form onSubmit={display}>
      <div className='inner'>
        
        
        <table>
        <h2>Record Entry</h2>
        <hr/>
          <tc>
            <tr ><div className="row">
            <label>Chest-pain type</label>
            <input type='number' id='cp' ></input>
            </div></tr>
            <tr ><div className="row">
            <label>Resting Blood Pressure</label>
            <input type='text' id='rbp' ></input>
            </div></tr>
            <tr ><div className="row">
            <label>Max heart rate achieved</label>
          <input type='text' id='mhra' ></input>
            </div></tr>
            <tr ><div className="row">
            <label>Serum Cholestrol</label>
          <input type='text' id='sc' ></input>
            </div></tr>  
                
          </tc>

          <tc>
            <tr ><div className="row">
            <label>Fasting Blood Sugar</label>
          <input type='text' id='fbs' ></input>

            </div></tr>
            <tr ><div className="row">
            <label>Resting ECG</label>
          <input type='text' id='recg' ></input>

            </div></tr>
            <tr ><div className="row">
            <label>Exercise induced angina</label>
          <input type='text' id='eia' ></input>
             
            </div></tr>
            <tr ><div className="row">
            <label>Thalassemia</label>
          <input type='text' id='thal' ></input>
            </div></tr>               
            </tc>
        </table>        
      </div>
      <button type='submit'>Submit</button>
      </form>
    </div>
    </>
  )
}
export default GetHD;