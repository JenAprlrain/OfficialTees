import { useState, useEffect } from "react"

import { onCollectionSelectionReturnNewArrayOfMatches } from "../utils/collectionUtils"

export function useActiveCollection(
  // activeCollectionName: string,
  allNfts: object[]
) {
  const [activeCollectionName, setActiveCollectionName] = useState("All")
  const [activeCollection, setActiveCollection] = useState([])

  useEffect(() => {
    if (activeCollectionName === "All") setActiveCollection([])
    else
      setActiveCollection(
        onCollectionSelectionReturnNewArrayOfMatches(
          allNfts,
          activeCollectionName
        )
      )
  }, [activeCollectionName])

  return activeCollection
}
