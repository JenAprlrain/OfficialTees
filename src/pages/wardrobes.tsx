import "./wardrobes.scss"
import React, { useEffect, useState, useReducer, useContext } from "react"

import Layout from "../components/layout/layout"
import Searchbar from "../components/searchbar"
import WardrobeAddresses from "../components/wardrobe-addresses"

import {
  getAllONFTeesCollectionIdsFromZooCoin,
  getAllONFTeesCollectionDataById,
} from "../api/zoocoin"
import {
  checkIfCollectionIdsExist,
  checkIfAllCollectionDataExists,
  checkIfArrayOfCollectionDataPromisesExist,
  iterateArrayOfPromisesAndReturnSingleArrayOfResults,
} from "../utils/collectionUtils"
import {
  checkIfNftOwnerAddressesExist,
  retrieveAllUniqueNftOwnerAddresses,
} from "../utils/addressUtils"
import collectionReducer, {
  initialCollection,
} from "../reducers/collectionReducer"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/global-context-provider"
import Seo from "../components/seo"

const Wardrobes: React.FC = () => {
  // const [collectionIds, setCollectionIds] = useState([])
  // const [allCollectionData, setAllCollectionData] = useState([])
  const [filteredAddresses, setFilteredAddresses] = useState({})
  const [nftsPerOwnerAddress, setNftsPerOwnerAddress] = useState({})
  const [
    arrayOfCollectionDataPromises,
    setArrayOfCollectionDataPromises,
  ] = useState([])

  const dispatchTest: Function = useContext(GlobalDispatchContext)
  const stateTest: object[] = useContext(GlobalStateContext)

  useEffect(() => {
    if (stateTest.collectionIds.length < 1) {
      getAllONFTeesCollectionIdsFromZooCoin().then(
        data =>
          dispatchTest({
            type: "GET_COLLECTION_IDS",
            payload: Object.keys(data),
            name: "collectionIds",
          })
        // setCollectionIds(Object.keys(data))
      )
    }
  }, [])

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

  useEffect(() => {
    if (checkIfAllCollectionDataExists(stateTest.collectionData)) {
      retrieveAllUniqueNftOwnerAddresses(
        stateTest.collectionData,
        setNftsPerOwnerAddress
      )
    }
  }, [stateTest.collectionData.length])

  return (
    <Layout>
      <Seo title="Wardrobes" />
      <div className="wardrobes__container">
        {checkIfNftOwnerAddressesExist(nftsPerOwnerAddress) && (
          <>
            <Searchbar
              setFilteredAddresses={setFilteredAddresses}
              nftsPerOwnerAddress={nftsPerOwnerAddress}
            />
            <h3 className="wardrobes__addresses-title">Addresses</h3>
            <WardrobeAddresses
              nftsPerOwnerAddress={nftsPerOwnerAddress}
              filteredAddresses={filteredAddresses}
            />
          </>
        )}
      </div>
    </Layout>
  )
}

export default Wardrobes
