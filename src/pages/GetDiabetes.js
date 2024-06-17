import React,{useContext} from 'react';
import { AppContext } from '../context';


 const GetDiabetes = (props) => {
    const contData = useContext(AppContext);
    
    const display = async (event) => {
        event.preventDefault();
        const {contract} = contData.state;
        const gl = document.querySelector('#gl').value;
        const bp = document.querySelector('#bp').value;
        const st = document.querySelector('#st').value;
        const ins = document.querySelector('#in').value;
        const bmi = document.querySelector('#bmi').value;
        const pre = document.querySelector('#pre').value;
        const dpf = document.querySelector('#dpf').value;
        console.log( gl, bp, st, ins, bmi, pre, dpf)
        const transaction = await contract.setDiabetes(pre, gl, bp, st, ins, bmi, dpf);
        await transaction.wait();
        console.log("Recorded")
    }
  return (
    <>
    
    <div className='rout'>
    <form onSubmit={display}>
      <div className='inner'>
        
        
        <table>
        <h2>Record Entry</h2>
        <hr/>
          <tc>
            <tr ><div className="row">
            <label>Glucose Level</label>
            <input type='number' id='gl' ></input>
            </div></tr>
            <tr ><div className="row">
            <label>Blood Pressure</label>
            <input type='text' id='bp' ></input>
            </div></tr>
            <tr ><div className="row">
            <label>Skin Thickness</label>
          <input type='text' id='st' ></input>
            </div></tr>
            <tr ><div className="row">
            <label>Insulin</label>
          <input type='text' id='in' ></input>
            </div></tr>         
          </tc>

          <tc>
            <tr ><div className="row">
            <label>Body Mass Index</label>
          <input type='text' id='bmi' ></input>

            </div></tr>
            <tr ><div className="row">
            <label>Pregnancies</label>
          <input type='text' id='pre' ></input>

            </div></tr>
            <tr ><div className="row">
            <label>Diabetes Pedigree Function</label>
          <input type='text' id='dpf' ></input>

            </div></tr>
            <tr ><div className="row">
            <button type='submit'>Submit</button>
            </div></tr>          
            </tc>
        </table>
      </div>
      </form>
    </div>
    
 
    </>
  )
}

export default GetDiabetes;