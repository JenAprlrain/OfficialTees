export const checkIfCollectionIdsExist = (collectionIds: string[]) =>
  collectionIds.length > 0

export const checkIfAllCollectionDataExists = (allCollectionData: object[]) =>
  allCollectionData.length > 0

export const checkIfArrayOfCollectionDataPromisesExist = arrayOfCollectionDataPromises =>
  arrayOfCollectionDataPromises.length > 0

const iterateOverAllCollectionsAndSetCollectionData = (
  res,
  dispatch: Function
) => {
  res.forEach(collection => {
    collection.json().then(data => {
      dispatch({
        type: "GET_COLLECTION_DATA",
        payload: data,
        name: "collectionData",
      })
    })
  })
}

export const iterateArrayOfPromisesAndReturnSingleArrayOfResults = (
  arrayOfCollectionDataPromises,
  setAllCollectionData: Function
) => {
  Promise.all(arrayOfCollectionDataPromises).then(res => {
    iterateOverAllCollectionsAndSetCollectionData(res, setAllCollectionData)
  })
}

export const handleCollectionClick = (
  collectionName: string,
  setActiveCollectionName: Function,
  setActivePageNum: Function
) => {
  if (collectionName === "All") {
    setActiveCollectionName("All")
    setActivePageNum(1)
  } else {
    setActiveCollectionName(collectionName)
    setActivePageNum(1)
  }
}

const checkIfNftBelongsToCollection = (nft, activeCollectionName) => {
  return nft.collection.description === activeCollectionName
}

export const onCollectionSelectionReturnNewArrayOfMatches = (
  allNfts,
  activeCollectionName: string
) => {
  return allNfts.filter(nft =>
    checkIfNftBelongsToCollection(nft, activeCollectionName)
  )
}

export const retrieveCollectionLogosAndDescriptions = allNfts => {
  const result = {}
  allNfts.map(nft => {
    if (!result[nft.collection.description]) {
      result[nft.collection.description] = nft.collection.image
    }
  })
  return result
}

export const checkIfActiveCollectionIsSelected = activeCollection =>
  activeCollection.length > 0

export const sliceActiveCollectionNftsIntoChunksForPagination = (
  activeCollection,
  numberOfNftsToDisplay: number,
  nftChunks: object[]
) => {
  for (let i = 0; i < activeCollection.length; ) {
    nftChunks.push(activeCollection.slice(i, i + numberOfNftsToDisplay))
    i += numberOfNftsToDisplay
  }
}
