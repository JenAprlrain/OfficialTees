import "./wardrobe-addresses.scss"
import React from "react"

import OwnerAddress from "./owner-address"

import {
  checkIfFilteredAddressesExist,
  checkIfAllOwnerAddressesExist,
  sortOwnerAddressesByMostNfteesOwned,
} from "../utils/addressUtils"

interface WardrobeAddressesProps {
  filteredAddresses: object
  nftsPerOwnerAddress: object
}

const WardrobeAddresses: React.FC<WardrobeAddressesProps> = ({
  filteredAddresses,
  nftsPerOwnerAddress,
}) => {
  const renderAllOwnerAddresses = (nftsPerOwnerAddress: object) => {
    return sortOwnerAddressesByMostNfteesOwned(nftsPerOwnerAddress).map(
      addressAndCount => {
        return (
          <OwnerAddress
            key={addressAndCount[0]}
            address={addressAndCount[0]}
            count={addressAndCount[1]}
          />
        )
      }
    )
  }

  const renderAllFilteredAddresses = (filteredAddresses: object) => {
    return Object.keys(filteredAddresses).map(address => (
      <OwnerAddress
        key={address}
        address={address}
        count={filteredAddresses[address]}
      />
    ))
  }
  return (
    <div className="wardrobe-addresses__container">
      <ul className="wardrobe-addresses__ul">
        {checkIfFilteredAddressesExist(filteredAddresses)
          ? renderAllFilteredAddresses(filteredAddresses)
          : checkIfAllOwnerAddressesExist(nftsPerOwnerAddress) &&
            renderAllOwnerAddresses(nftsPerOwnerAddress)}
      </ul>
    </div>
  )
}

export default WardrobeAddresses
