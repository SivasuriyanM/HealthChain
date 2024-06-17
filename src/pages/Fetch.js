import { useState, useEffect } from 'react'
import React,{useContext} from 'react'
import { AppContext } from '../context';
import '../styles/dis.css'

const Fetch = (props)=> {
    const contData = useContext(AppContext);
    const [dets, setDet] = useState([]);
    const {contract} = contData.state;
  useEffect(() => {
    const detail = async () => {
        const dets = await contract.getOthers(contData.account[0]);
        setDet(dets);
    };
    contract && detail();

  });
    const giveAccess = async(event) => {
        event.preventDefault();
        const add = document.querySelector('#add').value;
        const gA = await contract.giveAccess(add);
        await gA.wait();
    }
    const removeAccess = async(event) => {
        event.preventDefault();
        const add = document.querySelector('#add').value;
        const gA = await contract.removeAccess(add);
        await gA.wait();
    }
    const goto = async()=>{
        window.location.href = "/editpat";
    }
    console.log(dets);
    return (

    <>
    <div className='dout'>
    
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
                        
                        <tr >
                            <td className = "td">
                            <p>Give Permission<hr/></p>
                        <input type='text' id='add'></input>
                        <button type='submit' onClick={giveAccess}>Give</button>     
                            </td>
                        
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
                        <tr >
                            <td className = "td">
                            <p>Revoke Permission<hr/></p>
                        <input type='text' id='add'></input>
                        <button type='submit' onClick={removeAccess}>Remove</button>
                            </td>
                        
                        </tr>
                        </tc>
                        
                    </tbody>
                </table>
                <button onClick={goto}>Edit Profile</button>
        </div>
    </>
  )
}

export default Fetch