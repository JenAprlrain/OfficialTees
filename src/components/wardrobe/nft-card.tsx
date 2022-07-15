import "./nft-card.scss"
import React from "react"
import Order from "../orders/order"

const NftCard = ({ nft, paintswap }) => {
  console.log(nft)
  return (
    <div className="nft-card__card">
      <img src={nft.image} decoding="async" alt="" height="100%" width="100%" />
      <p className="nft-card__card--name">{nft.name}</p>
      <div className="nft-card__link-container">
        {/* <a
          href={`https://ftmscan.com/tx/${txHash}`}
          target="_blank"
          rel="noreferrer noopener"
          className="nft-card__link"
        >
          FTM Scan
        </a> */}
              {nft.name.indexOf("TEESCC") == 0 && <Order TOKENID={nft.tokenId} TEEID={nft.name.substring(10)}></Order>}
        <a
          href={nft.name.indexOf("TEESCC") == 0 ? `https://nftkey.app/collections/teescc/token-details/?tokenId=${nft.tokenId}` : paintswap ? `https://paintswap.finance/marketplace/assets/0x903efDA32f6d85ae074c1948C8d6B54F2421949f/${nft.tokenId}` : `https://pet.zoocoin.cash/token/community/${nft.tokenId}`}
          target="_blank"
          rel="noreferrer noopener"
          className="nft-card__link"
        >
          {nft.name.indexOf("TEESCC") == 0 ? "NFTKey" : paintswap ? "PaintSwap" : "Pet.Zoocoin"}

        </a>
      
      </div>

    </div>
  )
}

export default NftCard
