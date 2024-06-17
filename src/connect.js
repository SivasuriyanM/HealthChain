import React from 'react'
import { useState, useEffect } from 'react';
import { ethers } from "ethers";
import abi from './contract/Record.json';
import Detail from './pages/Detail';
import Fetch from './pages/Fetch';
function connect() {
    const [state,setState] = useState({
        provider : null,
        siginer: null,
        contract: null
    });
    const [account, setAccount] = useState("None");
    useEffect(() =>{
      const connectWallet = async()=>{
        const contractAddress = '0x0E096bD5FdACD671cf31682aD5BD1eAea8a4C6f9';
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
    Detail(state={state});
    Fetch(state={state}, account={account})

  return (
    
      <div>
        <p>Wallet-{account}</p>
      <Detail state={state} ></Detail>
      <Fetch state={state} account={account}></Fetch>
      </div>
  )
}

export default connect