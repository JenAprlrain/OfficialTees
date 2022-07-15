import "./index.scss"
import React, { useEffect, useState } from "react"

import CollectionPagination from "../../components/collection-pagination"
import PageNumPagination from "../../components/page-num-pagination"
import Layout from "../../components/layout/layout"
import AllNftees from "../../components/wardrobe/all-nftees"
// import Seo from "../../components/seo"

import { getAllNftTransactionDataByTokenId } from "../../api/covalentHq"
import {
  handleCollectionClick,
  onCollectionSelectionReturnNewArrayOfMatches,
  retrieveCollectionLogosAndDescriptions,
} from "../../utils/collectionUtils"
import {
  checkIfAllNftsExist,
  checkIfNftsBelongingToAddressExist,
  checkIfAllTransactionDataIsEmpty,
  checkIfArrayOfNftTransactionPromisesExist,
  iterateOverAllNftTransactionDataAndReturnSingleArrayOfResults,
} from "../../utils/nftUtils"

const WardrobeIndexPage = ({ pageContext }) => {
  // this holds all collection data related to the owner address
  const [collections, setCollections] = useState()
  // TODO: activeCollection contains the active collection name,
  // I can combine the two states - activeCollection & activeCollectionName
  const [activeCollection, setActiveCollection] = useState([])
  // this is used for active property on collection pagination filter
  const [activeCollectionName, setActiveCollectionName] = useState("All")
  // this is used for active property on page number pagination
  const [activePageNum, setActivePageNum] = useState(1)
  // contains all of the nftees owned by owner address
  const [allNfts, setAllNfts] = useState([])

  const [
    arrayOfNftTransactionPromises,
    setArrayOfNftTransactionPromises,
  ] = useState([])
  const [allTransactionData, setAllTransactionData] = useState([])

  const { nftsBelongingToAddress } = pageContext

  // Extract all NFTS into flat array
  useEffect(() => {
    if (checkIfNftsBelongingToAddressExist(nftsBelongingToAddress)) {
      setAllNfts(nftsBelongingToAddress.flat())
    }
  }, [])

  // Retrieve all ftm scan transaction data from Covalent API
  useEffect(() => {
    if (checkIfAllNftsExist(allNfts)) {
      const arrayOfPromises = getAllNftTransactionDataByTokenId(allNfts)
      setArrayOfNftTransactionPromises(arrayOfPromises)
    }
  }, [allNfts.length])

  // Extract all FTM scan transactions data from arrayOfNftTransactionPromises
  useEffect(() => {
    if (
      checkIfArrayOfNftTransactionPromisesExist(
        arrayOfNftTransactionPromises
      ) &&
      checkIfAllTransactionDataIsEmpty(allTransactionData)
    ) {
      iterateOverAllNftTransactionDataAndReturnSingleArrayOfResults(
        arrayOfNftTransactionPromises,
        setAllTransactionData
      )
    }
  }, [arrayOfNftTransactionPromises.length])

  // Retrieve collection logos and descriptions for top UI filter
  useEffect(() => {
    if (checkIfAllNftsExist(allNfts))
      setCollections(retrieveCollectionLogosAndDescriptions(allNfts))
  }, [allNfts.length])

  // Monitor collection selection
  useEffect(() => {
    if (activeCollectionName === "All") setActiveCollection([])
    else
      setActiveCollection(
        onCollectionSelectionReturnNewArrayOfMatches(
          allNfts,
          activeCollectionName
        )
      )
  }, [activeCollectionName])

  return (
    <Layout>
      {/* <Seo title="wardrobes" /> */}
      <div className="wardrobe__container">
        <CollectionPagination
          collections={collections}
          activeCollectionName={activeCollectionName}
          setActiveCollectionName={setActiveCollectionName}
          setActivePageNum={setActivePageNum}
          handleCollectionClick={handleCollectionClick}
        />
        <AllNftees
          allNfts={allNfts}
          activeCollection={activeCollection}
          activePageNum={activePageNum}
          allTransactionData={allTransactionData}
        />
        {/* Removed pagination. To bring back, please uncomment the below. */}
        {/* <PageNumPagination
          collections={collections}
          activeCollection={activeCollection}
          nftsBelongingToAddress={nftsBelongingToAddress}
          setActivePageNum={setActivePageNum}
          activePageNum={activePageNum}
        /> */}
      </div>
    </Layout>
  )
}

export default WardrobeIndexPage
