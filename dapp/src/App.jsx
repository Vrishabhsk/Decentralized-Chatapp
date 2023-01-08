import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Web3 from "web3";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./config";
import Chats from "./pages/Chats";
import Recipients from "./pages/Recipients";

function App() {
  const [acc, setAcc] = useState(null);
  const [contract, setContract] = useState(null);
   

  const configurations = async () => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
    const accounts = await web3.eth.getAccounts();
    setAcc(accounts[0]);
    const chatDapp = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
    setContract(chatDapp);
    
    // const msgs = await chatApp.methods.getMessages().call({ from: accounts[0] });
    // console.log(msgs.res);
  };

  useEffect(() => {
    configurations();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recipients" element={<Recipients acc={acc} contract={contract} />} />
        <Route path="/chat/:id" element={<Chats acc={acc} contract={contract} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
