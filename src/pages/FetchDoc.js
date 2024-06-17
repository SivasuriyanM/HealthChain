import { useState, useEffect } from 'react'
import React,{useContext} from 'react'
import { AppContext } from '../context';
import '../styles/dis.css'

const FetchDoc = () => {
    const contData = useContext(AppContext);
    const [dets, setDet] = useState([]);
    const {contract} = contData.state;
  useEffect(() => {
    const detail = async () => {
        const dets = await contract.getDoctor(contData.account[0]);
        setDet(dets);
    };
    contract && detail();

  });
  const goto = async()=>{
    window.location.href = "/editdoc";
    }

    console.log(dets);
    return (
    <>
    <div className='dout'>
    
                <table >
                    <h2>Personal Information<hr/></h2>
                    <tbody>
                        <tc>
                        <tr> 
                            <td className = "td">Name : {dets[1]}<hr/></td>
                        </tr>
                        <tr> 
                            <td className = "td">Gender : {dets[2]}<hr/></td>
                        </tr>
                        <tr> 
                            <td className = "td">Specialization : {dets[3]}<hr/></td>
                        </tr>
                        </tc>
                        <tc>
                        <tr> 
                            <td className = "td">Phone Number : {dets[4]}<hr/></td>
                        </tr>
                        
                        <tr> 
                            <td className = "td">Hospital Name : {dets[5]}<hr/></td>
                        </tr>
                        <tr> 
                            <td className = "td">Qualification : {dets[6]}<hr/></td>
                        </tr>
                        </tc>
                    </tbody>
                </table>
                <button onClick={goto}>Edit Info</button>
        </div>
    </>
  )
}

export default FetchDoc