import { useState, useEffect } from "react"

export function useUserData() {
  const [activeCollectionName, setActiveCollectionName] = useState("User")
  const [activeCollection, setActiveCollection] = useState([])
  const getUser = async () => {
      //@ts-ignore
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    console.log(address);
    setActiveCollection([...address])
    /* const toshimonMinter = new ethers.Contract("0xd2d2a84f0eB587F70E181A0C4B252c2c053f80cB", minter, provider);
    let accArray = []
    let idArray = []
    let bal: any[] = []
    for(let k = 0; k <= 320; k++){
        accArray.push(address)
        idArray.push(k)
        if(k%50 === 0 || k >= 320){
            bal = bal.concat(await toshimonMinter.balanceOfBatch(accArray,idArray));
            accArray = [];
            idArray = [];
        }
    }
    bal = bal.map(b => ethers.utils.formatUnits(b,'wei'))
    //@ts-ignore
    setBalances(bal)*/

  }

  useEffect(() => {
    if (activeCollectionName === "User") setActiveCollection([])
    else
      getUser();
  }, [activeCollectionName])

  return activeCollection
}
