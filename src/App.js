import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home';
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import Patient from './pages/Patient';
import Doctor from './pages/Doctor';
import Login from './pages/Login';
import Sigin from './pages/Sigin';
import PatLog from './pages/PatLog';
import Doclog from './pages/Doclog';
import Detail from './pages/Detail';
import EditDetail from './pages/EditDetail';
import DocDetail from './pages/DocDetail';
import EditDoc from './pages/EditDoc';
import EditDiabetes from './pages/EditDiabetes';
import EditHd from './pages/EditHd';
import Fetch from './pages/Fetch';
import FetchDoc from './pages/FetchDoc';
import DocOthers from './pages/DocOthers';
import GetDiabetes from './pages/GetDiabetes';
import GetHD from './pages/GetHD';
import FetchDisease from './pages/FetchDisease';
import FetchOthers from './pages/FetchOthers';
import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import abi from './contract/Record.json';
import { AppContext } from './context';
import Other from './pages/Other';


function App(){
      const [state,setState] = useState({
        provider : null,
        siginer: null,
        contract: null
    });
    const [account, setAccount] = useState("None");
    useEffect(() =>{
      const connectWallet = async()=>{
        const contractAddress = '0x6006A04ABa557C552A5cA2A19f53a5A5bDaFC415';
        const contractAbi = abi.abi;
        try{
          const {ethereum} = window;

          if(ethereum){
            const account = await ethereum.request({
              method:"eth_requestAccounts",
            });

            window.ethereum.on("chainChanged",()=>{
              window.location.reload();
            })
            window.ethereum.on("accountsChanged",()=>{
              window.location.reload();
            })
            const provider = new ethers.providers.Web3Provider(ethereum);
            const siginer = provider.getSigner();
            const contract = new ethers.Contract(
              contractAddress,
              contractAbi,
              siginer
            );
            setAccount(account);
            setState({provider,siginer,contract})
          } else {
            alert("Please install metamask");
          }
          
        }catch(error){
          console.log(error);
        }     
      };
      connectWallet();
    }, []);  
    console.log(state);
    console.log(account);
  return (
    <div className='App'>
      <AppContext.Provider value = {{state,account}}>
      <BrowserRouter>
        <Navbar/>   
        <Routes>
          <Route path='/' exact Component={Homepage}/>
          <Route path='/login' exact Component={Login}/>
          <Route path='/patlog' exact Component={PatLog}/>
          <Route path='/doclog' exact Component={Doclog}/>
          <Route path='/sign' exact Component={Sigin}/>
          <Route path='/patient' exact Component={Patient}/>
          <Route path='/doctor' exact Component={Doctor}/>
          <Route path='/regpat' exact Component={Detail}/>
          <Route path='/editpat' exact Component={EditDetail}/>
          <Route path='/regdoc' exact Component={DocDetail}/>
          <Route path='/editdoc' exact Component={EditDoc}/>
          <Route path='/patpro' exact Component={Fetch}/>
          <Route path='/docrepo' exact Component={FetchDoc}/>
          <Route path='/set' exact Component={Other}/>
          <Route path='/setdia' exact Component={GetDiabetes}/>
          <Route path='/editdia' exact Component={EditDiabetes}/>
          <Route path='/sethd' exact Component={GetHD}/>
          <Route path='/edithd' exact Component={EditHd}/>
          <Route path='/disrep' exact Component={FetchDisease}/>
          <Route path='/disoth' exact Component={FetchOthers}/>
          <Route path='/docoth' exact Component={DocOthers}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </AppContext.Provider>
    </div>
  );
}

export default App;
