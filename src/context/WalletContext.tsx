import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";

import axios from "axios";

import { NFTEES_CONTRACT, NFROYALTEES_CONTRACT, NFTEESCC_CONTRACT, BUYTEES } from '../constants'



export const Web3Context = createContext({
  address: "",
  pendingRequest: false,
  nftees: null,
  nfteesCC: null,
  connected: false,
  mintResult: [],
  claimable: 0,
  mintingActive: false,
  totalSupply: "0",
  wrongNetwork: false,
  onConnect: () => {},
  mintNftees: (quan:number) => {},
  resetApp: () => {},
  claimRoyaltees: () => {},
  addNetwork: () => {},
  mint: (quan:number) => {},
  buyPhysical: async (nft_id: string, unique_id: string) => {},
  getOrders: async () => {}
});

export const Web3Provider = ({ children }) => {
  // @ts-ignore
  const [state, setState] = useState({
    address: "",
    pendingRequest: false,
    wrongNetwork: false,
    nftees: null,
    nfteesCC: null,
    connected: false,
    mintResult: [],
    mintingActive: false,
    claimable: 0,
    totalSupply: "0"
  });


  useEffect(() => {

      onConnect();
    
  }, []);

  const onNftees = async () => {

      if (state.address) {

        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        const { chainId } = await provider.getNetwork()

        const nfteesContract = new ethers.Contract(NFTEES_CONTRACT[chainId].address, NFTEES_CONTRACT[chainId].abi, provider);
 
        const nfteesIds = Number(await nfteesContract.balanceOf(state.address))

        const nfteesContractCC = new ethers.Contract(NFTEESCC_CONTRACT[chainId].address, NFTEESCC_CONTRACT[chainId].abi, provider);
 
        const nfteesIdsCC = Number(await nfteesContractCC.balanceOf(state.address))
        console.log(nfteesIdsCC)
        if(nfteesIds > 0){
          _load_helper(0, nfteesContract, nfteesIds, [], nfteesContractCC, nfteesIdsCC)  
        }
        else if(nfteesIdsCC > 0){
          console.log(nfteesIdsCC)
          _load_helper_cc(0, nfteesContractCC, nfteesIdsCC, [], [])
        }
        else{
          console.log(nfteesIdsCC)
          setState({...state, nfteesCC: [], nftees: []})
        }
    
      }
  };

  const mint = async (quan) => {
    try {
       // open modal
       // toggle pending request indicator
       setState({ ...state, pendingRequest: true });
 
       const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
       const signer = provider.getSigner()
       const { chainId } = await provider.getNetwork()
 
       const fightersContract = (new ethers.Contract(NFTEESCC_CONTRACT[chainId].address, NFTEESCC_CONTRACT[chainId].abi, provider)).connect(signer);;
 
       // send transaction
       const val = ethers.utils.parseEther((40 * quan).toString()).toString()
       const reciept = await (await fightersContract.mint(quan,{value: val})).wait();
       console.log(reciept);
 
       //@ts-ignore
       setState({ ...state, pendingRequest: false });
     } catch (error) {
       console.error(error); // tslint:disable-line
       setState({ ...state, pendingRequest: false });
     }
   };

   const buyPhysical = async (nft_id, unique_id) => {
    try {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner()
    const { chainId } = await provider.getNetwork()

    const fightersContract = (new ethers.Contract(BUYTEES[chainId].address, BUYTEES[chainId].abi, provider)).connect(signer);;

    // send transaction
    const val = ethers.utils.parseEther((180 ).toString()).toString()
    const reciept = (await fightersContract.buyNFTEE(nft_id, unique_id,{value: val}));
    return reciept;
    } catch {
      return false;
    }
   }
   const getOrders = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner()
    const { chainId } = await provider.getNetwork()

    const fightersContract = (new ethers.Contract(BUYTEES[chainId].address, BUYTEES[chainId].abi, provider)).connect(signer);;
    const last = await fightersContract.getCurrentOrder()
    let orders = []
    for(let i = 1; i <= last.toNumber(); i++){
      const uniqueId = await fightersContract.getUniqueIdByOrder(i)
      const teeId = await fightersContract.getIdByUniqueID(uniqueId)
      orders.push({orderId: i, uniqueId, teeId})
    }
    return orders;
   }

  const _load_helper = async (i, nfteesContract, nfteesIds, nfteesArray, nfteesContractCC, nfteesIdsCC) => {

    const id = await nfteesContract.tokenOfOwnerByIndex(state.address,i);
    const nftee = (await axios.get("https://api.officialnftees.com/tees/" + id.toString())).data;
    
    //@ts-ignore
    const _nftees = [...nfteesArray, nftee];

    const _i = i + 1;
    console.log(_nftees.length);
    (_i % 5 == 0 || _i == nfteesIds) && setState({
      ...state,
      //@ts-ignore
      nftees: _nftees
    });

    _i < nfteesIds ? _load_helper(_i, nfteesContract, nfteesIds, _nftees, nfteesContractCC, nfteesIdsCC) : 
    nfteesIdsCC > 0 ? _load_helper_cc(0, nfteesContractCC, nfteesIdsCC, [], _nftees) : setState({...state, nftees: _nftees, nfteesCC: []})

  }

  const _load_helper_cc = async (i, nfteesContract, nfteesIds, nfteesArray, _nfteesOG) => {
    console.log("!!!!!!")
    const id = await nfteesContract.tokenOfOwnerByIndex(state.address,i);
    const uri = await nfteesContract.tokenURI(id.toString());
    let nftee = (await axios.get(uri)).data;
    nftee['id'] = id.toString();
    console.log(nftee)
    //@ts-ignore
    const _nftees = [...nfteesArray, nftee];

    const _i = i + 1;

    (_i % 5 == 0 || _i == nfteesIds) && setState({
      ...state,
      //@ts-ignore
      nftees: _nfteesOG,
      nfteesCC: _nftees
    });

    _i < nfteesIds && _load_helper_cc(_i, nfteesContract, nfteesIds, _nftees, _nfteesOG)
  }

  useEffect(() => {
    if(state.address) onNftees()
  }, [state.address])

  const onConnect = async () => {
    console.log(state.connected)
    if (!state.connected) {
      //@ts-ignore
      try{
      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
     
      provider.on("network", (newNetwork, oldNetwork) => {
          // When a Provider makes its initial connection, it emits a "network"
          // event with a null oldNetwork along with the newNetwork. So, if the
          // oldNetwork exists, it represents a changing network
          if (oldNetwork) {
              window.location.reload();
          }
      });
      window.ethereum.on("accountsChanged", (account) => {
        // When a Provider makes its initial connection, it emits a "network"
        // event with a null oldNetwork along with the newNetwork. So, if the
        // oldNetwork exists, it represents a changing network
        
            window.location.reload();
        
    });
      // Prompt user for account connections
      if(await checkChainId()){
        try{
          await provider.send("eth_requestAccounts", []);
      
        
          const signer = provider.getSigner();
          const address = await signer.getAddress();
          const { chainId } = await provider.getNetwork()
          // get claims
          const nfRoyalteesContract = new ethers.Contract(NFROYALTEES_CONTRACT[chainId].address, NFROYALTEES_CONTRACT[chainId].abi, provider);
          const claimable = Number(ethers.utils.formatEther(await nfRoyalteesContract.getTotalRewards(address)));
          const nfteeCC = new ethers.Contract(NFTEESCC_CONTRACT[chainId].address, NFTEESCC_CONTRACT[chainId].abi, provider);
          const mintingActive = await nfteeCC.isMintingActive();
          const totalSupply = await nfteeCC.totalSupply();
        
          console.log(mintingActive)



          //@ts-ignore
          setState({ ...state, address, claimable, connected: true, mintingActive, totalSupply });
        } catch {}
      }
    } catch{
      console.log(1)
      const provider = new ethers.providers.JsonRpcProvider("https://rpcapi.fantom.network", "any");
      const nfteeCC = new ethers.Contract(NFTEESCC_CONTRACT[250].address, NFTEESCC_CONTRACT[250].abi, provider);
      const totalSupply = await nfteeCC.totalSupply();

      //@ts-ignore
      setState({ ...state, totalSupply, mintingActive: true });
      
    }
    }

  };

const addNetwork = async () => {


    const networkData = [
  
          {
  
            chainId: "0xFA",
  
            chainName: "Fantom",
  
            rpcUrls: ["https://rpc.ftm.tools/"],
  
            nativeCurrency: {
  
              name: "Fantom",
  
              symbol: "FTM",
  
              decimals: 18,
  
            },
  
            blockExplorerUrls: ["https://ftmscan.com/"],
  
          },
  
        ];

    // agregar red o cambiar red
  
    return window.ethereum.request({
  
      method: "wallet_addEthereumChain",
  
      params: networkData,
  
    });
  
  }

  const checkChainId = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const { chainId } = await provider.getNetwork()
    if(chainId !== 250 && chainId !== 4){
      setState({ ...state, wrongNetwork: true });
      addNetwork()
      return false;
    } 
    return true;
  }


  const claimRoyaltees = async (quan: number) => {
   try {
      // open modal
      // toggle pending request indicator
      setState({ ...state, pendingRequest: true });

      const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      const signer = provider.getSigner()
      const { chainId } = await provider.getNetwork()

      const nfRoyalteesContract = (new ethers.Contract(NFROYALTEES_CONTRACT[chainId].address, NFROYALTEES_CONTRACT[chainId].abi, provider)).connect(signer);;

      // send transaction
      const reciept = await (await nfRoyalteesContract.claimRewards(state.address)).wait();
      console.log(reciept);

      //@ts-ignore
      setState({ ...state, claimable: 0, pendingRequest: false });
    } catch (error) {
      console.error(error); // tslint:disable-line
      setState({ ...state, pendingRequest: false });
    }
  };

  const resetApp = async () => {

  };

  return (
    //@ts-ignore
    <Web3Context.Provider
      //@ts-ignore

      value={{ ...state, setState, onConnect, claimRoyaltees, resetApp, addNetwork, mint, buyPhysical,getOrders }}
    >
      {children}
    </Web3Context.Provider>
  );
};
