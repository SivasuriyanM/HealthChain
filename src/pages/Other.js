import { useState, useEffect } from 'react'
import React,{useContext} from 'react'
import { AppContext } from '../context';

function Other() {
    const contData = useContext(AppContext);
    const {contract} = contData.state;
    // const [pc, setPc] = useState([]);

//   useEffect(() => {
//     const detail = async () => {
//         const pc = await contract.getPatientCount();
//         setPc(pc);
//     };
//     contract && detail();

//   }, [contract]);
//   const [dc, setDc] = useState([]);

//   useEffect(() => {
//     const detail = async () => {
//         const dc = await contract.getDoctorCount();
//         setDc(dc);
//     };
//     contract && detail();

//   }, [contract]);
    

    const giveAccess = async(event) => {
        event.preventDefault();
        const add = document.querySelector('#add').value;
        const gA = await contract.giveAccess(add);
        await gA.wait();
    }
    const removeAccess = async(event) => {
        event.preventDefault();
        const add = document.querySelector('#addi').value;
        const rA = await contract.removeAccess(add);
        await rA.wait();
    }
    
  return (
    <>
    <form onSubmit={giveAccess}>
        <p>Give Permission</p>
        <label>Address</label>
        <input type='text' id='add'></input>
        <button type='submit'>Give</button>
    </form>
    <form onSubmit={removeAccess}>
        <p>remove Permission</p>
        <label>Address</label>
        <input type='text' id='addi'></input>
        <button type='submit'>Remove</button>
    </form>
    </>
  )

}

export default Other