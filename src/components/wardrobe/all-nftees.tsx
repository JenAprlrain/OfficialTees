import "./all-nftees.scss"
// @ts-ignore
import React, { useState } from "react"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import NftCard from "./nft-card"

import { retrieveFtmScanTxHash } from "../../utils/ftmscan"
// import { renderNftsPerPage } from "../../utils/renderUtils"

const Slidersettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 450,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1.1,
        infinite: true,
        dots: true,
        arrows: false,
      },
    },
  ],
}

interface NfteeProps {
  allNfts: object[]
  activeCollection: object[]
  activePageNum: number
  allTransactionData?: object[]
}

const AllNftees: React.FC<NfteeProps> = ({
  allNfts,
  activeCollection,
  activePageNum,
  allTransactionData,
}) => {
  // TODO: Change # of Nfts to display based on media queries
  const [
    numbernumberOfNftsToDisplay,
    setNumbernumberOfNftsToDisplay,
  ] = useState(5)

  const returnChunksOfElementsBasedOnPageNumber = nftChunks => {
    const nftElements = []
    nftChunks[activePageNum - 1].map(nft => {
      const txHash = retrieveFtmScanTxHash(nft, allTransactionData)
      nftElements.push(<NftCard nft={nft} txHash={txHash} key={nft.tokenId} />)
    })
    return nftElements
  }

  const parseAllNFTs = () => {
    const nftElements = []

    if (activeCollection.length > 0) {
      activeCollection.map(nft => {
        const txHash = retrieveFtmScanTxHash(nft, allTransactionData)
        nftElements.push(
          <NftCard nft={nft} txHash={txHash} key={nft.tokenId} />
        )
      })
    } else {
      allNfts.map(nft => {
        const txHash = retrieveFtmScanTxHash(nft, allTransactionData)
        nftElements.push(
          <NftCard nft={nft} txHash={txHash} key={nft.tokenId} />
        )
      })
    }
    return nftElements
  }

  return (
    <div className="all-nftees__container">
      <Slider {...Slidersettings} className={"card-slider__container"}>
        {allNfts && allNfts.length > 0 && parseAllNFTs()}
      </Slider>
    </div>

    // <div className="all-nftees__container">
    //   {allNfts &&
    //   allNfts.length > 0 &&
    //   renderNftsPerPage(
    //     returnChunksOfElementsBasedOnPageNumber,
    //     allNfts,
    //     activeCollection,
    //     numbernumberOfNftsToDisplay
    //   )}
    // </div>
  )
}

export default AllNftees
