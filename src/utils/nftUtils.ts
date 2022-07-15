export const checkIfAllNftsExist = allNfts => allNfts.length > 0

export const checkIfNftsBelongingToAddressExist = nftsBelongingToAddress =>
  nftsBelongingToAddress.length > 0

export const checkIfArrayOfNftTransactionPromisesExist = arrayOfNftTransactionPromises =>
  arrayOfNftTransactionPromises.length > 0

export const checkIfAllTransactionDataIsEmpty = allTransactionData =>
  allTransactionData.length < 1

const iterateOverAllNftTransactionDataAndSetTransactionData = (
  res,
  setAllTransactionData,
  arrayOfNftTransactionPromises
) => {
  const tokenIds = arrayOfNftTransactionPromises
    .map(promise => Object.keys(promise))
    .flat()
  for (let i = 0; i < res.length; i++) {
    res[i].json().then(data =>
      setAllTransactionData(prevState => {
        return [...prevState, { [tokenIds[i]]: data }]
      })
    )
  }
}

export const iterateOverAllNftTransactionDataAndReturnSingleArrayOfResults = (
  arrayOfNftTransactionPromises,
  setAllTransactionData
) => {
  const promises = arrayOfNftTransactionPromises.map(promise =>
    Object.values(promise)
  )
  Promise.all(promises.flat()).then(res => {
    iterateOverAllNftTransactionDataAndSetTransactionData(
      res,
      setAllTransactionData,
      arrayOfNftTransactionPromises
    )
  })
}

export const sliceAllNftsIntoChunksForPagination = (
  allNfts,
  numberOfNftsToDisplay: number,
  nftChunks: object[]
) => {
  for (let i = 0; i < allNfts.length; ) {
    nftChunks.push(allNfts.slice(i, i + numberOfNftsToDisplay))
    i += numberOfNftsToDisplay
  }
}
