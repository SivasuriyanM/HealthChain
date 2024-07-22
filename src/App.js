import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "./contract/Record.json";
import { AppContext } from "./context";

import Fetch from "./pages/Fetch";
import FetchDoc from "./pages/FetchDoc";
import DocOthers from "./pages/DocOthers";
import FetchDisease from "./pages/FetchDisease";
import FetchOthers from "./pages/FetchOthers";
import Footer from "./components/Footer";
import Logo from "./assets/HcLogo.jpg";
import Reorder from "@mui/icons-material/ViewList";
import "./App.css";
import { Dashboard, Home } from "@mui/icons-material";
import homeImage from "./assets/background.jpg";

function App() {
  const [state, setState] = useState({
    provider: null,
    siginer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  useEffect(() => {
    const connectWallet = async () => {
      const contractAddress = "0x6006A04ABa557C552A5cA2A19f53a5A5bDaFC415";
      const contractAbi = abi.abi;
      try {
        const { ethereum } = window;

        if (ethereum) {
          const account = await ethereum.request({
            method: "eth_requestAccounts",
          });

          window.ethereum.on("chainChanged", () => {
            window.location.reload();
          });
          window.ethereum.on("accountsChanged", () => {
            window.location.reload();
          });
          const provider = new ethers.providers.Web3Provider(ethereum);
          const siginer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            contractAbi,
            siginer
          );
          setAccount(account);
          setState({ provider, siginer, contract });
        } else {
          alert("Please install metamask");
        }
      } catch (error) {
        console.log(error);
      }
    };
    connectWallet();
  }, []);
  console.log(state);
  console.log(account);

  const [home, setHome] = useState(true);
  const [login, setLogin] = useState(false);
  const [patientLogin, setPatientLogin] = useState(false);
  const [doctorLogin, setDoctorLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [patientsignUp, setPatientSignUp] = useState(false);
  const [doctorSignUp, setDoctorSignUp] = useState(false);
  const [patientDashboard, setPatientDashBoard] = useState(false);
  const [doctorDashboard, setDoctorDashBoard] = useState(false);
  const [accountlogged, setAccountLogged] = useState(false);
  const [dashboard, setDashBoard] = useState(true);
  const [profile, setProfile] = useState(false);

  const PatientLogin = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;

    const add = document.querySelector("#add").value;
    console.log("Check" + contract);
    const pa = await contract.getPatientAcc();
    const pn = await contract.getPatientName();
    console.log(pa.length);
    console.log(account[0]);
    let count = 0;
    for (var i = 0; i < pa.length; ) {
      if (pa[i] === add && pn[i] === name) {
        setPatientDashBoard(true);
        setAccountLogged(true);
        setDoctorDashBoard(false);
        setHome(false);
        setLogin(false);
        setSignUp(false);
        setPatientSignUp(false);
        setPatientLogin(false);
        setDoctorLogin(false);
        setDoctorSignUp(false);
        count = 1;
      }
      i = i + 1;
    }
    if (count === 0) {
      alert("Enter valid Details");
    }

    console.log("Login succesful");
  };

  const DoctorLogin = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const add = document.querySelector("#add").value;
    console.log("Check" + contract);
    const da = await contract.getDoctorAccounts();
    const dn = await contract.getDoctorName();
    console.log(account[0]);
    console.log(da.length);
    let count = 0;
    for (var i = 0; i < da.length; ) {
      if (da[i] === add && dn[i] === name) {
        setPatientDashBoard(false);
        setDoctorDashBoard(true);
        setAccountLogged(true);
        setHome(false);
        setLogin(false);
        setSignUp(false);
        setPatientSignUp(false);
        setPatientLogin(false);
        setDoctorLogin(false);
        setDoctorSignUp(false);
        count = 1;
      }
      console.log("add's" + da[i]);
      i = i + 1;
    }
    if (count === 0) {
      alert("Enter valid Details");
    }

    console.log("Login succesful");
  };
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
    setLogin(false);
    setSignUp(false);
  };
  const docdisplay = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;

    const gen = document.querySelector("#gender").value;
    const hn = document.querySelector("#hn").value;
    const ph = document.querySelector("#ph").value;
    const qa = document.querySelector("#qa").value;
    const sp = document.querySelector("#sp").value;

    console.log("Check" + contract);
    const transaction = await contract.setDoctor(1, name, gen, sp, hn, ph, qa);
    await transaction.wait();
    window.location.href = "/doctor";
    console.log("Doctor Registed");
  };
  const display = async (event) => {
    event.preventDefault();
    const { contract } = state;
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
    const transaction = await contract.setPatient(
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
    setPatientDashBoard(false);
    setDoctorDashBoard(false);
    setHome(false);
    setLogin(false);
    setSignUp(false);
    setPatientSignUp(false);
    setPatientLogin(true);
    setDoctorLogin(false);
    setDoctorSignUp(false);
    await transaction.wait();

    console.log("Patient Registed");
  };

  return (
    <div className="App">
      {accountlogged ? (
        <div className="navbar">
          <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <div className="hiddenLinks">
              <button
                className="menu-content"
                onClick={() => (
                  setHome(false),
                  setLogin(false),
                  setSignUp(false),
                  setDashBoard(true),
                  setProfile(false),
                  setPatientLogin(false),
                  setDoctorLogin(false),
                  setPatientSignUp(false),
                  setDoctorSignUp(false)
                )}
              >
                Dashboard
              </button>
              <button
                className="menu-content"
                onClick={() => (
                  setHome(false),
                  setLogin(false),
                  setSignUp(false),
                  setProfile(true),
                  setDashBoard(false),
                  setPatientSignUp(false),
                  setDoctorSignUp(false),
                  setPatientLogin(false),
                  setDoctorLogin(false)
                )}
              >
                Profile
              </button>
              <button
                className="menu-content"
                onClick={() => (
                  setHome(true),
                  setLogin(false),
                  setSignUp(false),
                  setPatientDashBoard(false),
                  setDoctorDashBoard(false),
                  setPatientSignUp(false),
                  setPatientLogin(false),
                  setDoctorLogin(false),
                  setAccountLogged(false),
                  setDoctorSignUp(false)
                )}
              >
                Logout
              </button>
            </div>
          </div>
          <div className="rightSide">
            <button
              className="menu-content"
              onClick={() => (
                setHome(false),
                setLogin(false),
                setSignUp(false),
                setDashBoard(true),
                setProfile(false),
                setPatientLogin(false),
                setDoctorLogin(false),
                setPatientSignUp(false),
                setDoctorSignUp(false)
              )}
            >
              Dashboard
            </button>
            <button
              className="menu-content"
              onClick={() => (
                setHome(false),
                setLogin(false),
                setSignUp(false),
                setProfile(true),
                setDashBoard(false),
                setPatientSignUp(false),
                setDoctorSignUp(false),
                setPatientLogin(false),
                setDoctorLogin(false)
              )}
            >
              Profile
            </button>
            <button
              className="menu-content"
              onClick={() => (
                setHome(true),
                setLogin(false),
                setSignUp(false),
                setPatientDashBoard(false),
                setDoctorDashBoard(false),
                setPatientSignUp(false),
                setPatientLogin(false),
                setDoctorLogin(false),
                setAccountLogged(false),
                setDoctorSignUp(false)
              )}
            >
              Logout
            </button>
            <button className="menu" onClick={toggleNavbar}>
              <Reorder />
            </button>
          </div>
        </div>
      ) : (
        <div className="navbar">
          <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <div className="hiddenLinks">
              <button
                className="menu-content"
                onClick={() => (
                  setHome(true),
                  setLogin(false),
                  setSignUp(false),
                  setPatientDashBoard(false),
                  setDoctorDashBoard(false),
                  setPatientLogin(false),
                  setDoctorLogin(false),
                  setPatientSignUp(false),
                  setDoctorSignUp(false)
                )}
              >
                <Home />
              </button>

              <button
                className="menu-content"
                onClick={() => (
                  setHome(true),
                  setLogin(true),
                  setSignUp(false),
                  setPatientDashBoard(false),
                  setDoctorDashBoard(false),
                  setPatientSignUp(false),
                  setDoctorSignUp(false),
                  setPatientLogin(false),
                  setDoctorLogin(false)
                )}
              >
                Login
              </button>
              <button
                className="menu-content"
                onClick={() => (
                  setHome(true),
                  setLogin(false),
                  setSignUp(true),
                  setPatientDashBoard(false),
                  setDoctorDashBoard(false),
                  setPatientSignUp(false),
                  setPatientLogin(false),
                  setDoctorLogin(false),
                  setDoctorSignUp(false)
                )}
              >
                Sign Up
              </button>
            </div>
          </div>
          <div className="rightSide">
            <button
              className="menu-content"
              onClick={() => (
                setHome(true),
                setLogin(false),
                setSignUp(false),
                setPatientDashBoard(false),
                setDoctorDashBoard(false),
                setPatientLogin(false),
                setDoctorLogin(false),
                setPatientSignUp(false),
                setDoctorSignUp(false)
              )}
            >
              <Home />
            </button>
            <button
              className="menu-content"
              onClick={() => (
                setHome(true),
                setLogin(true),
                setSignUp(false),
                setPatientDashBoard(false),
                setDoctorDashBoard(false),
                setPatientSignUp(false),
                setDoctorSignUp(false),
                setPatientLogin(false),
                setDoctorLogin(false)
              )}
            >
              Login
            </button>
            <button
              className="menu-content"
              onClick={() => (
                setHome(true),
                setLogin(false),
                setSignUp(true),
                setPatientDashBoard(false),
                setDoctorDashBoard(false),
                setPatientSignUp(false),
                setPatientLogin(false),
                setDoctorLogin(false),
                setDoctorSignUp(false)
              )}
            >
              Sign Up
            </button>
            <button className="menu" onClick={toggleNavbar}>
              <Reorder />
            </button>
          </div>
        </div>
      )}

      <div className="body-content">
        <AppContext.Provider value={{ state, account }}>
          <div className="content-wrapper">
            {home ? (
              <div className="home-content-wrapper">
                <div className="home-image">
                  <img src={homeImage} alt="home" />
                </div>
                <div className="home-content">
                  <h1>Welcome to Healthchain!</h1>

                  <p>
                    At Healthchain, we revolutionize the way Electronic Health
                    Records (EHR) are managed and accessed. Our cutting-edge
                    platform leverages blockchain technology and advanced
                    authentication methods, to ensure your medical records are
                    secure and accessible when you need them the most. Whether
                    in a routine check-up or an emergency, Healthchain provides
                    quick, reliable, and secure access to your health
                    information, putting you in control and providing peace of
                    mind. Explore our site to learn how we are transforming
                    healthcare data management for a safer and more efficient
                    future.
                  </p>
                </div>
              </div>
            ) : (
              ""
            )}

            {patientsignUp ? (
              <div className="reg-content-wrapper">
                <form onSubmit={display}>
                  <div className="reg-form">
                    <ul>
                      <h2>Patient Registration</h2>
                      <li>
                        <label>Patient id</label>
                        <input type="number" id="id" />
                      </li>
                      <li>
                        <label>Patient name</label>
                        <input type="text" id="name" />
                      </li>
                      <li>
                        <label>Patient gender</label>
                        <input type="text" id="gender" />
                      </li>
                      <li>
                        <label>Patient BloodGroup</label>
                        <input type="text" id="bg" />
                      </li>
                      <li>
                        <label>Patient Phone No</label>
                        <input type="text" id="ph" />
                      </li>
                      <li>
                        <label>Patient Home Address</label>
                        <input type="text" id="ha" />
                      </li>
                      <li>
                        <label>Patient Issue</label>
                        <input type="text" id="is" />
                      </li>
                      <li>
                        <label>Patient Medicine</label>
                        <input type="text" id="md" />
                      </li>
                      <li>
                        <label>Patient DOB</label>
                        <input type="text" id="dob" />
                      </li>

                      <div className="sum-btn">
                        <button className="body-btn" type="submit">
                          Resgistor
                        </button>
                      </div>
                    </ul>
                  </div>
                </form>
              </div>
            ) : (
              ""
            )}
            {doctorSignUp ? (
              <div className="reg-content-wrapper">
                <form onSubmit={docdisplay}>
                  <div className="reg-form">
                    <ul>
                      <h2>Doctor Registration</h2>
                      <li>
                        <label>Id</label>
                        <input type="number" id="id"></input>
                      </li>
                      <li>
                        <label>Name</label>
                        <input type="text" id="name"></input>
                      </li>
                      <li>
                        <label>Gender</label>
                        <input type="text" id="gender"></input>
                      </li>
                      <li>
                        <label>Specialist</label>
                        <input type="text" id="sp"></input>
                      </li>
                      <li>
                        <label>Hospital Name</label>
                        <input type="text" id="hn"></input>
                      </li>
                      <li>
                        <label>Phone Number</label>
                        <input type="text" id="ph"></input>
                      </li>
                      <li>
                        <label>Qualification</label>
                        <input type="text" id="qa"></input>
                      </li>
                      <button className="body-btn" type="submit">
                        Submit
                      </button>
                    </ul>
                  </div>
                </form>
              </div>
            ) : (
              ""
            )}
            {patientLogin ? (
              <div className="reg-content-wrapper">
                <form className="reg-form">
                  <ul>
                    <h2>Patient Login</h2>

                    <li>
                      <label>Full Name</label>
                      <input className="inp" id="name" type="text" />
                    </li>
                    <li>
                      <label>Address</label>
                      <input
                        className="inp"
                        id="add"
                        type="password"
                        placeholder="******************"
                      />
                    </li>
                    <button
                      className="body-btn"
                      type="button"
                      onClick={PatientLogin}
                    >
                      Login
                    </button>
                  </ul>
                </form>
              </div>
            ) : (
              ""
            )}
            {doctorLogin ? (
              <div className="reg-content-wrapper">
                <form className="reg-form">
                  <ul>
                    <h2>Doctor Login</h2>

                    <li>
                      <label>Full Name</label>
                      <input className="inp" id="name" type="text" />
                    </li>
                    <li>
                      <label>Address</label>
                      <input
                        className="inp"
                        id="add"
                        type="password"
                        placeholder="******************"
                      />
                    </li>
                    <button
                      className="body-btn"
                      type="button"
                      onClick={DoctorLogin}
                    >
                      Login
                    </button>
                  </ul>
                </form>
              </div>
            ) : (
              ""
            )}
            {patientDashboard ? (
              <div className="">
                {profile ? <Fetch /> : ""}
                {dashboard ? (
                  <div>
                    <FetchDisease />
                    <DocOthers />
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            {doctorDashboard ? (
              <div>
                {profile ? <FetchDoc /> : ""}
                {dashboard ? (
                  <div>
                    <FetchOthers />
                    <DocOthers />
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            {login ? (
              <div className="sub-btn">
                <button
                  className="body-btn"
                  onClick={() => (
                    setPatientLogin(true),
                    setPatientSignUp(false),
                    setHome(false),
                    setLogin(false),
                    setSignUp(false),
                    setPatientDashBoard(false),
                    setDoctorLogin(false),
                    setDoctorSignUp(false)
                  )}
                >
                  {" "}
                  Login as Patient
                </button>
                <button
                  className="body-btn"
                  onClick={() => (
                    setDoctorLogin(true),
                    setPatientLogin(false),
                    setPatientSignUp(false),
                    setHome(false),
                    setLogin(false),
                    setSignUp(false),
                    setPatientDashBoard(false),
                    setDoctorSignUp(false)
                  )}
                >
                  Login as Doctor
                </button>
              </div>
            ) : (
              ""
            )}
            {signUp ? (
              <div className="sub-btn">
                <button
                  className="body-btn"
                  type="button"
                  onClick={() => (
                    setPatientSignUp(true),
                    setHome(false),
                    setLogin(false),
                    setSignUp(false),
                    setPatientDashBoard(false),
                    setDoctorDashBoard(false),
                    setPatientLogin(false),
                    setDoctorLogin(false),
                    setDoctorSignUp(false)
                  )}
                >
                  Sign Up as Patient
                </button>

                <button
                  className="body-btn"
                  type="button"
                  onClick={() => (
                    setPatientSignUp(false),
                    setHome(false),
                    setLogin(false),
                    setSignUp(false),
                    setPatientDashBoard(false),
                    setDoctorDashBoard(false),
                    setPatientLogin(false),
                    setDoctorLogin(false),
                    setDoctorSignUp(true)
                  )}
                >
                  Sign Up as Doctor
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
        </AppContext.Provider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
