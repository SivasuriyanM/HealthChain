import { useState, useEffect } from "react";
import React, { useContext } from "react";
import { AppContext } from "../context";
import "../styles/dis.css";

const FetchDoc = () => {
  const contData = useContext(AppContext);
  const [dets, setDet] = useState([]);
  const { contract } = contData.state;
  const [editProfile, setEditProfile] = useState(false);
  useEffect(() => {
    const detail = async () => {
      const dets = await contract.getDoctor(contData.account[0]);
      setDet(dets);
    };
    contract && detail();
  });
  const goto =  () => {
    setEditProfile(true)
  };
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
    setEditProfile(false)
}
  console.log(dets);
  return (
    <>
      {editProfile ? (
        <div className="rout">
          <form onSubmit={display}>
            <div className="inner">
              <table>
                <h2>Update Profile</h2>
                <hr />
                <tc>
                  <tr>
                    <div className="row">
                      <label>Name</label>
                      <input type="text" id="name"></input>
                    </div>
                  </tr>
                  <tr>
                    <div className="row">
                      <label>Gender</label>
                      <input type="text" id="gender"></input>
                    </div>
                  </tr>
                  <tr>
                    <div className="row">
                      <label>Specialist</label>
                      <input type="text" id="sp"></input>
                    </div>
                  </tr>
                </tc>

                <tc>
                  <tr>
                    <div className="row">
                      <label>Hospital Name</label>
                      <input type="text" id="hn"></input>
                    </div>
                  </tr>
                  <tr>
                    <div className="row">
                      <label>Phone Number</label>
                      <input type="text" id="ph"></input>
                    </div>
                  </tr>
                  <tr>
                    <div className="row">
                      <label>Qualification</label>
                      <input type="text" id="qa"></input>
                    </div>
                  </tr>
                </tc>
                <hr />
              </table>
            </div>
            <button  className="body-btn" onClick={()=>setEditProfile(false)}>Cancel</button>
            <button  type="submit" className="body-btn">Submit</button>
          </form>
        </div>
      ) : (
        <div className="dout">
          <table>
            <h2>
              Personal Information
              <hr />
            </h2>
            <tbody>
              <tc>
                <tr>
                  <td className="td">
                    Name : {dets[1]}
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td className="td">
                    Gender : {dets[2]}
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td className="td">
                    Specialization : {dets[3]}
                    <hr />
                  </td>
                </tr>
              </tc>
              <tc>
                <tr>
                  <td className="td">
                    Phone Number : {dets[4]}
                    <hr />
                  </td>
                </tr>

                <tr>
                  <td className="td">
                    Hospital Name : {dets[5]}
                    <hr />
                  </td>
                </tr>
                <tr>
                  <td className="td">
                    Qualification : {dets[6]}
                    <hr />
                  </td>
                </tr>
              </tc>
            </tbody>
          </table>
          <button  className="body-btn" onClick={goto}>Edit Info</button>
        </div>
      )}
    </>
  );
};

export default FetchDoc;
