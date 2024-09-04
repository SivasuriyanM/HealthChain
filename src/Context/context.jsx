import { createContext, useContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import abi from "../contract/Record.json";

const FetchContext = createContext();

export default function ContextProvider({ children }) {
  const [state, setState] = useState({
    provider: null,
    siginer: null,
    contract: null,
  });
  const [account, setAccount] = useState("None");
  const [loginStatus, setLoginStatus] = useState("");
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
  return (
    <FetchContext.Provider
      value={{ state, account, loginStatus, setLoginStatus }}
    >
      {children}
    </FetchContext.Provider>
  );
}

export const FetchChain = () => {
  return useContext(FetchContext);
};
