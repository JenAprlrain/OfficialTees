import React, { useReducer } from "react"

import collectionReducer, {
  initialCollection,
} from "../reducers/collectionReducer.js"

import { Web3Provider } from "../context/WalletContext"

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const GlobalContextProvider = ({ children }) => {
  const [allCollectionData, dispatch] = useReducer(
    collectionReducer,
    initialCollection
  )

  return (
    <Web3Provider>
      <GlobalStateContext.Provider value={allCollectionData}>
        <GlobalDispatchContext.Provider value={dispatch}>
          {children}
        </GlobalDispatchContext.Provider>
      </GlobalStateContext.Provider>
    </Web3Provider>
  )
}

export default GlobalContextProvider
