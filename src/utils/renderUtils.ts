import {
  checkIfActiveCollectionIsSelected,
  sliceActiveCollectionNftsIntoChunksForPagination,
} from "./collectionUtils"
import { sliceAllNftsIntoChunksForPagination } from "./nftUtils"

const returnAllChunksOfNftsForPagination = (
  allNfts,
  activeCollection,
  numberOfNftsToDisplay: number,
  market?
) => {
  const nftChunks = []

  if (checkIfActiveCollectionIsSelected(activeCollection)) {
    sliceActiveCollectionNftsIntoChunksForPagination(
      activeCollection,
      numberOfNftsToDisplay,
      nftChunks
    )
  } else {
    sliceAllNftsIntoChunksForPagination(
      allNfts,
      numberOfNftsToDisplay,
      nftChunks
    )
  }
  return nftChunks
}

export const renderNftsPerPage = (
  returnChunksOfElementsBasedOnPageNumber,
  allNfts,
  activeCollection,
  numberOfNftsToDisplay: number,
  market?
) => {
  const nftChunks = returnAllChunksOfNftsForPagination(
    allNfts,
    activeCollection,
    numberOfNftsToDisplay,
    market
  )
  const nftElements = returnChunksOfElementsBasedOnPageNumber(nftChunks)
  return nftElements
}
