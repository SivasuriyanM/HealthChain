import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { FetchChain } from "../Context/context";
import "../styles/dis.css";
const DocOthers = () => {
  const contData = FetchChain();
  const [dets, setDet] = useState([]);
  const [da, setDa] = useState([]);
  const [dn, setDn] = useState([]);
  const [displayDetails, setDisplayDetails] = useState(false);
  const { contract } = contData.state;
  useEffect(() => {
    const detail = async () => {
      const da = await contract.getDoctorAccounts();
      setDa(da);
      const dn = await contract.getDoctorName();
      setDn(dn);
    };
    contract && detail();
  }, [contract]);
  const display = async (event) => {
    event.preventDefault();
    const add = document.querySelector("#address").value;
    console.log("Recorded");
    const dets = await contract.getDoctor(add);
    setDet(dets);
    setDisplayDetails(true);
  };
  return (
    <div className="dout">
      <h4>Enter Doctor Address</h4>
      <form onSubmit={display}>
        <input className="tds" type="text" id="address"></input>
        <button type="submit">Search</button>
      </form>
      <h3>Doctor List</h3>
      <h3>
        {dn[0]} - {da[0]}
      </h3>
      {displayDetails ? (
        <table>
          <h2>
            Doctor Details
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
      ) : (
        ""
      )}
    </div>
  );
};

export default DocOthers;
