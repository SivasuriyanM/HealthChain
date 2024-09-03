import { useState, useEffect } from "react";
import React, { useContext } from "react";
import { FetchChain } from "../Context/context";

import "../styles/dis.css";

const Fetch = (props) => {
  const [editProfile, setEditProfile] = useState(false);
  const contData = FetchChain();
  const [dets, setDet] = useState([]);
  const { contract } = contData.state;
  useEffect(() => {
    const detail = async () => {
      const dets = await contract.getOthers(contData.account[0]);
      setDet(dets);
    };
    contract && detail();
  });
  const giveAccess = async (event) => {
    event.preventDefault();
    const add = document.querySelector("#add").value;
    const gA = await contract.giveAccess(add);
    await gA.wait();
  };
  const removeAccess = async (event) => {
    event.preventDefault();
    const add = document.querySelector("#add").value;
    const gA = await contract.removeAccess(add);
    await gA.wait();
  };
  const goto = async () => {
    setEditProfile(true);
  };
  const display = async (event) => {
    event.preventDefault();
    const { contract } = contData.state;
    const name = document.querySelector("#name").value;

    const id = document.querySelector("#id").value;
    const gen = document.querySelector("#gender").value;
    const bg = document.querySelector("#bg").value;
    const ph = document.querySelector("#ph").value;
    const ha = document.querySelector("#ha").value;
    const Issue = document.querySelector("#is").value;
    const med = document.querySelector("#md").value;
    const dob = document.querySelector("#dob").value;
    console.log(id, name, gen, bg, ph, ha, Issue, med, dob);
    console.log("Check" + contract);
    const transaction = await contract.editPatient(
      id,
      name,
      gen,
      bg,
      ph,
      ha,
      Issue,
      med,
      dob
    );
    await transaction.wait();
    console.log("Patient Registed");
    setEditProfile(false);
  };
  console.log(dets);
  return (
    <>
      {editProfile ? (
        <div className="rout">
          <form onSubmit={display}>
            <div className="inner">
              <table>
                <h2>Update Details</h2>

                <tc>
                  <tr>
                    <div className="row">
                      <label>Patient id</label>
                      <input type="number" id="id"></input>
                    </div>
                  </tr>
                  <tr>
                    <div className="row">
                      <label>Patient name</label>
                      <input type="text" id="name"></input>
                    </div>
                  </tr>
                  <tr>
                    <div className="row">
                      <label>Patient gender</label>
                      <input type="text" id="gender"></input>
                    </div>
                  </tr>
                  <tr>
                    <div className="row">
                      <label>Patient BloodGroup</label>
                      <input type="text" id="bg"></input>
                    </div>
                  </tr>
                  <tr>
                    <div className="row">
                      <label>Patient Phone No</label>
                      <input type="text" id="ph"></input>
                    </div>
                  </tr>
                </tc>

                <tc>
                  <tr>
                    <div className="row">
                      <label>Patient Home Address</label>
                      <input type="text" id="ha"></input>
                    </div>
                  </tr>
                  <tr>
                    <div className="row">
                      <label>Patient Issue</label>
                      <input type="text" id="is"></input>
                    </div>
                  </tr>
                  <tr>
                    <div className="row">
                      <label>Patient Medicine</label>
                      <input type="text" id="md"></input>
                    </div>
                  </tr>
                  <tr>
                    <div className="row">
                      <label>Patient DOB</label>
                      <input type="text" id="dob"></input>
                    </div>
                  </tr>
                  <tr>
                    <div className="row">
                      <button
                        type="button"
                        onClick={() => setEditProfile(false)}
                      >
                        Cancel
                      </button>
                      <button type="submit">Update</button>
                    </div>
                  </tr>
                </tc>
              </table>
            </div>
          </form>
        </div>
      ) : (
        <div className="dout">
          <table>
            <h2>Personal Information </h2>
            <tbody>
              <tc>
                <tr className="tr">
                  <td className="td">Name : {dets[1]} </td>
                </tr>
                <tr className="tr">
                  <td className="td">Gender : {dets[2]} </td>
                </tr>
                <tr className="tr">
                  <td className="td">Blood Group :{dets[3]} </td>
                </tr>
                <tr className="tr">
                  <td className="td"> Phone Number : {dets[4]} </td>
                </tr>

                <tr>
                  <td className="td">
                    <p>Give Permission </p>
                    <input type="text" id="add"></input>
                    <button type="submit" onClick={giveAccess}>
                      Give
                    </button>
                  </td>
                </tr>
              </tc>
              <tc>
                <tr className="tr">
                  <td className="td">Address : {dets[5]} </td>
                </tr>
                <tr className="tr">
                  <td className="td">Suffered Disease : {dets[6]} </td>
                </tr>
                <tr className="tr">
                  <td className="td">Medicine : {dets[7]} </td>
                </tr>
                <tr className="tr">
                  <td className="td"> DOB : {dets[8]} </td>
                </tr>
                <tr>
                  <td className="td">
                    <p>Revoke Permission </p>
                    <input type="text" id="add"></input>
                    <button type="submit" onClick={removeAccess}>
                      Remove
                    </button>
                  </td>
                </tr>
              </tc>
            </tbody>
          </table>
          <button onClick={goto}>Edit Profile</button>
        </div>
      )}
    </>
  );
};

export default Fetch;
