import React,{useContext} from 'react'
import { useState, useEffect } from 'react'
import { AppContext } from '../context';

const FetchOthers = (props) => {
    const contData = useContext(AppContext);
    const [dets, setDet] = useState([]);
    const [dia, setDia] = useState([]);
    const [hd, setHd] = useState([]);
    const [pa, setPa] = useState([]);
    const [pn, setPn] = useState([]);

    const {contract} = contData.state;
    useEffect(() => {
        const detail = async () => {
            const pa = await contract.getPatientAcc();
            setPa(pa);
            const pn = await contract.getPatientName();
            setPn(pn)
        };
        contract && detail();
    
      }, [contract]);
    const display = async (event) => {
        event.preventDefault();
        const add = document.querySelector('#address').value;
        console.log("Recorded"); 
        const dets = await contract.getOthers(add);
        setDet(dets);
        const dia = await contract.getDiabetes(add);
        const hd = await contract.getHeartdisease(add);
        setDia(dia);
        setHd(hd);     
    }
    
  return (
    <> 
    <h3>Search Patient</h3>
    <form onSubmit={display}>
    <input className = "tds" type='text' id='address' ></input>
    <button type='submit'>Submit</button>
    </form>
<h6>{pn[0]} - {pa[0]}</h6>
<h6>{pn[1]} - {pa[1]}</h6>
<table  >
                <h2>Personal Information<hr/></h2>
                    <tbody>
                    
                        <tc>
                        
                        <tr className = "tr">
                            <td className = "td">Name : {dets[1]}<hr/></td>
                        </tr>
                        <tr className = "tr">
                            <td className = "td">Gender : {dets[2]}<hr/></td>
                        </tr>
                        <tr className = "tr">
                            <td className = "td">Blood Group :{dets[3]}<hr/></td>
                        </tr>
                        <tr className = "tr">
                            <td className = "td"> Phone Number : {dets[4]}<hr/></td>
                        </tr>
                        </tc>
                        <tc>
                        <tr className = "tr">
                            <td className = "td">Address : {dets[5]}<hr/></td>
                        </tr>
                        <tr className = "tr">
                            <td className = "td">Suffered Disease : {dets[6]}<hr/></td>
                        </tr>
                        <tr className = "tr">
                            <td className = "td">Medicine : {dets[7]}<hr/></td>
                        </tr>
                        <tr className = "tr">
                            <td className = "td"> DOB : {dets[8]}<hr/></td>
                        </tr>
                        </tc>
                        
                    </tbody>
                </table>
                <div className='dout'>
        <table  >
    <h2>Diabetes Report<hr/></h2>
        <tbody>        
            <tc>            
            <tr className = "tr">
                <td className = "tdd">Glucose Level : {dia[0]}<hr/></td>
            </tr>
            <tr className = "tr">
                <td className = "tdd">Blood Pressure : {dia[1]}<hr/></td>
            </tr>
            <tr className = "tr">
                <td className = "tdd">Skin Thickness :{dia[2]}<hr/></td>
            </tr>
            <tr className = "tr">
                <td className = "tdd"> Insulin : {dia[3]}<hr/></td>
            </tr>
            </tc>
            <tc>
            <tr className = "tr">
                <td className = "tdd">Body Mass Index : {dia[4]}<hr/></td>
            </tr>
            <tr className = "tr">
                <td className = "tdd">Pregnancies : {dia[5]}<hr/></td>
            </tr>
            <tr className = "tr">
                <td className = "tdd">Diabetes Pedigree Function : {dia[6]}<hr/></td>
            </tr>
            </tc>
            
        </tbody>
    </table>
        
        <table  >
    <h2>Heartdisease Report<hr/></h2>
        <tbody>        
            <tc>            
            <tr className = "tr">
                <td className = "tdd">Chest-pain type : {hd[0]}<hr/></td>
            </tr>
            <tr className = "tr">
                <td className = "tdd">Resting Blood Pressure : {hd[1]}<hr/></td>
            </tr>
            <tr className = "tr">
                <td className = "tdd">Max heart rate achieved : {hd[2]}<hr/></td>
            </tr>
            <tr className = "tr">
                <td className = "tdd">Serum Cholestrol : {hd[3]}<hr/></td>
            </tr>
            </tc>
            <tc>
            <tr className = "tr">
                <td className = "tdd">Fasting Blood Sugar : {hd[4]}<hr/></td>
            </tr>
            <tr className = "tr">
                <td className = "tdd">Resting ECG : {hd[5]}<hr/></td>
            </tr>
            <tr className = "tr">
                <td className = "tdd">Exercise induced angina : {hd[6]}<hr/></td>
            </tr>
            <tr className = "tr">
                <td className = "tdd">Thalassemia : {hd[7]}<hr/></td>
            </tr>
            </tc>            
        </tbody>
    </table>
    </div>
    </>
  )
}

export default FetchOthers