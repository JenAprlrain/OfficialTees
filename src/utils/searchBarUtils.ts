const createRegEx = (searchTerm: string) => new RegExp(searchTerm, "i")

const createArrayOfOwnerAddresses = (nftsPerOwnerAddress: object[]) =>
  Object.keys(nftsPerOwnerAddress)

const createFilteredObjOfOwnerAddressesBasedOnSearchTerm = (
  nftsPerOwnerAddress: object[],
  arrOfAddresses: string[],
  regex: RegExp
) => {
  const filteredObject = {}
  arrOfAddresses.filter(address => {
    if (address.match(regex))
      filteredObject[address] = nftsPerOwnerAddress[address]
  })
  return filteredObject
}

export const checkIfSearchTermIsEmpty = (searchTerm: string) => !searchTerm

export const filterOwnerAddressesBySearchTerm = (
  nftsPerOwnerAddress: object[],
  searchTerm: string,
  setFilteredAddresses: Function
) => {
  const regex = createRegEx(searchTerm)
  const arrOfAddresses = createArrayOfOwnerAddresses(nftsPerOwnerAddress)
  const result = createFilteredObjOfOwnerAddressesBasedOnSearchTerm(
    nftsPerOwnerAddress,
    arrOfAddresses,
    regex
  )
  setFilteredAddresses(result)
}
