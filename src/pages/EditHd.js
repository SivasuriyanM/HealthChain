import React, { useContext } from "react";
import { FetchChain } from "../Context/context";

const EditHd = () => {
  const contData = useContext(FetchChain);

  const display = async (event) => {
    event.preventDefault();
    const { contract } = contData.state;
    const cp = document.querySelector("#cp").value;
    const rbp = document.querySelector("#rbp").value;
    const mhra = document.querySelector("#mhra").value;
    const sc = document.querySelector("#sc").value;
    const fbs = document.querySelector("#fbs").value;
    const recg = document.querySelector("#recg").value;
    const eia = document.querySelector("#eia").value;
    const thal = document.querySelector("#thal").value;
    console.log(cp, rbp, mhra, sc, fbs, recg, eia, thal);
    const transaction = await contract.editHeartDisease(
      cp,
      rbp,
      mhra,
      sc,
      fbs,
      recg,
      eia,
      thal
    );
    await transaction.wait();
    console.log("Recorded");
  };
  return (
    <>
      <div className="rout">
        <form onSubmit={display}>
          <div className="inner">
            <table>
              <h2>Update Record</h2>
              <hr />
              <tc>
                <tr>
                  <div className="row">
                    <label>Chest-pain type</label>
                    <input type="number" id="cp"></input>
                  </div>
                </tr>
                <tr>
                  <div className="row">
                    <label>Resting Blood Pressure</label>
                    <input type="text" id="rbp"></input>
                  </div>
                </tr>
                <tr>
                  <div className="row">
                    <label>Max heart rate achieved</label>
                    <input type="text" id="mhra"></input>
                  </div>
                </tr>
                <tr>
                  <div className="row">
                    <label>Serum Cholestrol</label>
                    <input type="text" id="sc"></input>
                  </div>
                </tr>
              </tc>

              <tc>
                <tr>
                  <div className="row">
                    <label>Fasting Blood Sugar</label>
                    <input type="text" id="fbs"></input>
                  </div>
                </tr>
                <tr>
                  <div className="row">
                    <label>Resting ECG</label>
                    <input type="text" id="recg"></input>
                  </div>
                </tr>
                <tr>
                  <div className="row">
                    <label>Exercise induced angina</label>
                    <input type="text" id="eia"></input>
                  </div>
                </tr>
                <tr>
                  <div className="row">
                    <label>Thalassemia</label>
                    <input type="text" id="thal"></input>
                  </div>
                </tr>
              </tc>
            </table>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default EditHd;
