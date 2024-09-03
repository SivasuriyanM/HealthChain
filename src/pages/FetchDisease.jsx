import React from "react";
import { useState, useEffect } from "react";
import { FetchChain } from "../Context/context";

const FetchDisease = () => {
  const contData = FetchChain();
  const [dia, setDia] = useState([]);
  const [hd, setHd] = useState([]);
  const { contract } = contData.state;

  useEffect(() => {
    const detail = async () => {
      const dia = await contract.getDiabetes(contData.account[0]);
      const hd = await contract.getHeartdisease(contData.account[0]);
      setDia(dia);
      setHd(hd);
    };
    contract && detail();
  });
  const CreateDia = async () => {
    window.location.href = "/setdia";
  };
  const UpdateDia = async () => {
    window.location.href = "/editdia";
  };
  const CreateHd = async () => {
    window.location.href = "/sethd";
  };
  const UpdateHd = async () => {
    window.location.href = "/edithd";
  };
  return (
    <>
      <h2>Medical Record </h2>

      <div className="dout">
        <table>
          <h2>Diabetes Report </h2>
          <tbody>
            <tc>
              <tr className="tr">
                <td className="tdd">Glucose Level : {dia[0]} </td>
              </tr>
              <tr className="tr">
                <td className="tdd">Blood Pressure : {dia[1]} </td>
              </tr>
              <tr className="tr">
                <td className="tdd">Skin Thickness :{dia[2]} </td>
              </tr>
              <tr className="tr">
                <td className="tdd"> Insulin : {dia[3]} </td>
              </tr>
            </tc>
            <tc>
              <tr className="tr">
                <td className="tdd">Body Mass Index : {dia[4]} </td>
              </tr>
              <tr className="tr">
                <td className="tdd">Pregnancies : {dia[5]} </td>
              </tr>
              <tr className="tr">
                <td className="tdd">Diabetes Pedigree Function : {dia[6]} </td>
              </tr>
            </tc>
          </tbody>
        </table>
        <button onClick={CreateDia}>Create Record</button>
        <button onClick={UpdateDia}>Update Record</button>
        <table>
          <h2>Heartdisease Report </h2>
          <tbody>
            <tc>
              <tr className="tr">
                <td className="tdd">Chest-pain type : {hd[0]} </td>
              </tr>
              <tr className="tr">
                <td className="tdd">Resting Blood Pressure : {hd[1]} </td>
              </tr>
              <tr className="tr">
                <td className="tdd">Max heart rate achieved : {hd[2]} </td>
              </tr>
              <tr className="tr">
                <td className="tdd">Serum Cholestrol : {hd[3]} </td>
              </tr>
            </tc>
            <tc>
              <tr className="tr">
                <td className="tdd">Fasting Blood Sugar : {hd[4]} </td>
              </tr>
              <tr className="tr">
                <td className="tdd">Resting ECG : {hd[5]} </td>
              </tr>
              <tr className="tr">
                <td className="tdd">Exercise induced angina : {hd[6]} </td>
              </tr>
              <tr className="tr">
                <td className="tdd">Thalassemia : {hd[7]} </td>
              </tr>
            </tc>
          </tbody>
        </table>
        <button onClick={CreateHd}>Create Record</button>
        <button onClick={UpdateHd}>Update Record</button>
      </div>
    </>
  );
};

export default FetchDisease;
