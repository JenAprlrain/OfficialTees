import "./markets.scss"
import React, { useContext } from "react"
import { Web3Context } from "../context/WalletContext";

import Layout from "../components/layout/layout"

import Seo from "../components/seo"
import NftCard from "../components/wardrobe/nft-card"
import Button from "../components/layout/button"
import { StaticImage } from "gatsby-plugin-image";

const myTees = () => {

  const { nfteesCC, nftees, claimRoyaltees, onConnect, addNetwork, claimable, address, wrongNetwork, pendingRequest } = useContext(Web3Context);

  return (
    <Layout>
      <Seo title="My Nftees" />
      <div className="markets__container">
        <h1 className="markets__header">My NFTees</h1>
        {address ? 
          <>
            <div onClick={nftees?.length !== 0 ? claimRoyaltees : null}style={{width: '50%',height: 'auto'}}>
              <Button>
                {pendingRequest ? "Claiming..." : `Claim ${claimable.toFixed(6)} ftm in Royaltees`}
              </Button>
            </div>
            <br />
          {
            nftees === null && nfteesCC === null ? <div>Loading...</div> : 
            (nftees !== null && nftees.length === 0) && (nfteesCC !==null && nfteesCC.length === 0) ? <div>You don't own any tees.</div> :
            <> 
              {(nftees !== null && nftees.length > 0) && nftees.map((nft) => 
                <NftCard nft={{image: nft.image, name: nft.name, tokenId:nft.id}} paintswap={true} key={nft.id} />
              )}
              {(nfteesCC !==null && nfteesCC.length > 0) && nfteesCC.map((nft) => 
                <NftCard nft={{image: nft.image, name: nft.name, tokenId:nft.id}} paintswap={true} key={nft.id} />
              )}
            </>
            
          }
          </>
          :
          wrongNetwork ? 
          <div onClick={addNetwork}style={{width: '50%',height: 'auto'}}>
            <Button >
              Please Change Network to Fantom Mainnet
            </Button>
          </div>
          :
          <div onClick={onConnect}style={{width: '50%',height: 'auto'}}>
            <Button >
              Connect Wallet
            </Button>
          </div>
        }

      </div>
    </Layout>
  )
}

export default myTees
