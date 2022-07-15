import "./searchbar.scss"
import React, { useState, useEffect } from "react"
import { AiOutlineSearch } from "react-icons/ai"

import {
  checkIfSearchTermIsEmpty,
  filterOwnerAddressesBySearchTerm,
} from "../utils/searchBarUtils"

const Searchbar = ({ setFilteredAddresses, nftsPerOwnerAddress }) => {
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (checkIfSearchTermIsEmpty(searchTerm)) return
    setTimeout(() => {
      filterOwnerAddressesBySearchTerm(
        nftsPerOwnerAddress,
        searchTerm,
        setFilteredAddresses
      )
    }, 500)
  }, [searchTerm])

  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = e => {
    e.preventDefault()
  }

  return (
    <div className="searchbar__container">
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="searchTerm"
          value={searchTerm}
          onChange={event => setSearchTerm(event.target.value)}
          placeholder="Search by wallet address"
          className="searchbar__search-input"
          autoFocus={false}
        />
        <AiOutlineSearch className="searchbar__search-icon" />
      </form>
    </div>
  )
}

export default Searchbar
