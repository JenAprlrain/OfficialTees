import "./markets.scss"
import React, { useReducer, useContext, useEffect, useState } from "react"

import AllNftees from "../components/wardrobe/all-nftees"
import NftCard from "../components/wardrobe/nft-card"
import CollectionPagination from "../components/collection-pagination"
import Layout from "../components/layout/layout"
import PageNumPagination from "../components/page-num-pagination"
import MarketSelector from "../components/layout/market-selector"

import {
  getAllONFTeesCollectionIdsFromZooCoin,
  getAllONFTeesCollectionDataById,
} from "../api/zoocoin"
import {
  handleCollectionClick,
  checkIfCollectionIdsExist,
  checkIfArrayOfCollectionDataPromisesExist,
  iterateArrayOfPromisesAndReturnSingleArrayOfResults,
  checkIfAllCollectionDataExists,
  retrieveCollectionLogosAndDescriptions,
  onCollectionSelectionReturnNewArrayOfMatches,
} from "../utils/collectionUtils"

import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/global-context-provider"
import { retrieveAllUniqueNftOwnerAddresses } from "../utils/addressUtils"
import {
  checkIfAllNftsExist,
  checkIfArrayOfNftTransactionPromisesExist,
  checkIfAllTransactionDataIsEmpty,
  iterateOverAllNftTransactionDataAndReturnSingleArrayOfResults,
  checkIfNftsBelongingToAddressExist,
} from "../utils/nftUtils"
import { getAllNftTransactionDataByTokenId } from "../api/covalentHq"
import { retrieveFtmScanTxHash } from "../utils/ftmscan"
import { renderNftsPerPage } from "../utils/renderUtils"
import Seo from "../components/seo"

const Markets = () => {
  // ELEVATE TO REDUCER TOMORROW
  const [
    arrayOfCollectionDataPromises,
    setArrayOfCollectionDataPromises,
  ] = useState([])
  // contains logos & descriptions
  const [collections, setCollections] = useState()
  // contains all nfts belonging to the selected collection
  const [activeCollection, setActiveCollection] = useState([])
  const [activeCollectionName, setActiveCollectionName] = useState("All")
  const [activePageNum, setActivePageNum] = useState(1)
  // contains a flat array of all nfts created by James' address
  const [allNfts, setAllNfts] = useState([])
  // contains all nfts on sale && created by James' address
  const [primaryMarket, setPrimaryMarket] = useState([])
  // contains all nfts on sale, not created by James' address
  const [secondaryMarket, setSecondaryMarket] = useState([])
  const [activeMarket, setActiveMarket] = useState("primary")
  const [
    arrayOfNftTransactionPromises,
    setArrayOfNftTransactionPromises,
  ] = useState([])
  const [allTransactionData, setAllTransactionData] = useState([])
  const [numberOfNftsToDisplay, setNumberOfNftsToDisplay] = useState(5)

  const dispatchTest: Function = useContext(GlobalDispatchContext)
  const stateTest: object[] = useContext(GlobalStateContext)

  // if going to /markets first before /wardrobes, we need to make API
  // calls to zoocoin for collectionIds
  useEffect(() => {
    if (stateTest.collectionIds.length < 1) {
      getAllONFTeesCollectionIdsFromZooCoin().then(data =>
        dispatchTest({
          type: "GET_COLLECTION_IDS",
          payload: Object.keys(data),
          name: "collectionIds",
        })
      )
    }
  }, [])

  // if collectionIds exist in our Reducer && collectionData does NOT
  // exist, we need to make API call to zoocoin for collection data
  useEffect(() => {
    if (
      stateTest &&
      stateTest.collectionIds &&
      checkIfCollectionIdsExist(stateTest.collectionIds)
    ) {
      const arrayOfPromises = getAllONFTeesCollectionDataById(
        stateTest.collectionIds
      )
      setArrayOfCollectionDataPromises(arrayOfPromises)
    }
  }, [stateTest && stateTest.collectionIds])
  // useEffect(() => {
  //   if (
  //     checkIfCollectionIdsExist(stateTest.collectionIds) &&
  //     stateTest.collectionData.length < 1
  //   ) {
  //     const arrayOfPromises = getAllONFTeesCollectionDataById(
  //       stateTest.collectionIds
  //     )
  //     setArrayOfCollectionDataPromises(arrayOfPromises)
  //   }
  // }, [stateTest.collectionIds.length])

  useEffect(() => {
    if (
      checkIfArrayOfCollectionDataPromisesExist(
        arrayOfCollectionDataPromises
      ) &&
      stateTest.collectionData.length < 1
    ) {
      iterateArrayOfPromisesAndReturnSingleArrayOfResults(
        arrayOfCollectionDataPromises,
        dispatchTest
      )
    }
  }, [arrayOfCollectionDataPromises.length])

  // creates our flat array of all nfts created by James' address
  useEffect(() => {
    let allNftsArr = []
    if (checkIfAllCollectionDataExists(stateTest.collectionData)) {
      stateTest.collectionData.map(collection => {
        collection.tokensbelong.map(nft => allNftsArr.push(nft))
      })
    }
    setAllNfts(allNftsArr)
    // allNftsArr = []
  }, [stateTest.collectionData.length])

  // sets our Primary and Secondary market nfts
  useEffect(() => {
    const primaryResult = []
    const secondaryResult = []
    if (allNfts.length > 0) {
      allNfts.map(nft => {
        const { onsale, owner } = nft
        if (
          onsale === true &&
          owner === "0x13D4e5476f0B47D6F71D83390e032bA0F043d363"
        ) {
          primaryResult.push(nft)
          // setPrimaryMarket(prevState => {
          //   return [...prevState, nft]
          // })
        } else if (
          onsale === true &&
          owner !== "0x13D4e5476f0B47D6F71D83390e032bA0F043d363"
        ) {
          secondaryResult.push(nft)
          // setSecondaryMarket(prevState => {
          //   return [...prevState, nft]
          // })
        }
      })
    }
    setPrimaryMarket(primaryResult)
    setSecondaryMarket(secondaryResult)
  }, [allNfts && allNfts.length])

  // Retrieve collection logos and descriptions for top UI filter
  useEffect(() => {
    if (activeMarket === "primary" && primaryMarket.length > 0)
      setCollections(retrieveCollectionLogosAndDescriptions(primaryMarket))
    else if (activeMarket === "secondary" && secondaryMarket.length > 0) {
      setCollections(retrieveCollectionLogosAndDescriptions(secondaryMarket))
    }
  }, [activeMarket, primaryMarket.length, secondaryMarket.length])
  // useEffect(() => {
  //   if (checkIfAllNftsExist(allNfts))
  //     setCollections(retrieveCollectionLogosAndDescriptions(allNfts))
  // }, [allNfts.length])

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

  // Monitor collection selection
  useEffect(() => {
    if (activeCollectionName === "All") setActiveCollection([])
    else if (activeMarket === "primary")
      setActiveCollection(
        onCollectionSelectionReturnNewArrayOfMatches(
          primaryMarket,
          activeCollectionName
        )
      )
    else if (activeMarket === "secondary") {
      setActiveCollection(
        onCollectionSelectionReturnNewArrayOfMatches(
          secondaryMarket,
          activeCollectionName
        )
      )
    }
  }, [activeCollectionName])

  const returnChunksOfElementsBasedOnPageNumber = nftChunks => {
    const nftElements = []
    nftChunks[activePageNum - 1].map(nft => {
      const txHash = retrieveFtmScanTxHash(nft, allTransactionData)
      nftElements.push(<NftCard nft={nft} txHash={txHash} key={nft.tokenId} />)
    })
    return nftElements
  }

  return (
    <Layout>
      <Seo title="Markets" />
      <div className="markets__container">
        <h1 className="markets__header">Markets</h1>
        <MarketSelector
          activeMarket={activeMarket}
          setActiveMarket={setActiveMarket}
          setActiveCollection={setActiveCollection}
          setActivePageNum={setActivePageNum}
        />
        <div className="markets__div--collections">
          <CollectionPagination
            collections={collections}
            activeCollectionName={activeCollectionName}
            handleCollectionClick={handleCollectionClick}
            setActiveCollectionName={setActiveCollectionName}
            setActivePageNum={setActivePageNum}
          />
        </div>
        {allNfts.length > 0 &&
        primaryMarket.length > 0 &&
        activeMarket === "primary" ? (
          <>
            {renderNftsPerPage(
              returnChunksOfElementsBasedOnPageNumber,
              primaryMarket,
              activeCollection,
              numberOfNftsToDisplay
              // primaryMarket
            )}
            <PageNumPagination
              collections={collections}
              activeCollection={activeCollection}
              nftsBelongingToAddress={primaryMarket}
              setActivePageNum={setActivePageNum}
              activePageNum={activePageNum}
            />
          </>
        ) : (
          allNfts.length > 0 &&
          secondaryMarket.length > 0 && (
            <>
              {renderNftsPerPage(
                returnChunksOfElementsBasedOnPageNumber,
                secondaryMarket,
                activeCollection,
                numberOfNftsToDisplay
                // secondaryMarket
              )}
              <PageNumPagination
                collections={collections}
                activeCollection={activeCollection}
                nftsBelongingToAddress={secondaryMarket}
                setActivePageNum={setActivePageNum}
                activePageNum={activePageNum}
              />
            </>
          )
        )}
      </div>
    </Layout>
  )
}

export default Markets
