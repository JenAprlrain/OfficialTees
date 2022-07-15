export const checkIfNftOwnerAddressesExist = (
  nftsPerOwnerAddress: object[] | {}
) => nftsPerOwnerAddress && Object.keys(nftsPerOwnerAddress).length > 0

export const checkIfFilteredAddressesExist = (filteredAddresses: object) => {
  return filteredAddresses && Object.keys(filteredAddresses).length > 0
}

export const checkIfAllOwnerAddressesExist = (nftsPerOwnerAddress: object) => {
  return nftsPerOwnerAddress && Object.keys(nftsPerOwnerAddress).length > 0
}

export const retrieveAllUniqueNftOwnerAddresses = (
  allCollectionData: object[],
  setNftsPerOwnerAddress: Function
) => {
  let countMap = {}
  allCollectionData.map(collection =>
    collection.tokensbelong.map(nft => {
      countMap[nft.owner] = countMap[nft.owner] + 1 || 1
    })
  )
  setNftsPerOwnerAddress(countMap)
  countMap = {}
}

export const sortOwnerAddressesByMostNfteesOwned = nftsPerOwnerAddress => {
  return Object.entries(nftsPerOwnerAddress).sort(([, a], [, b]) => b - a)
}
