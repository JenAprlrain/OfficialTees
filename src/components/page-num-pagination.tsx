import "./page-num-pagination.scss"
import React from "react"
import Pagination from "react-bootstrap/Pagination"
import { v4 as uuidv4 } from "uuid"

import { checkIfActiveCollectionIsSelected } from "../utils/collectionUtils"
import { checkIfNftsBelongingToAddressExist } from "../utils/nftUtils"

interface PageNumPaginationProps {}

const PageNumPagination = ({
  collections,
  activeCollection,
  nftsBelongingToAddress,
  setActivePageNum,
  activePageNum,
}) => {
  const scrollToTopOnPageNumClick = () => {
    document.getElementsByClassName("layout")[0].scrollTo({
      top: -200,
      behavior: "smooth",
    })
  }
  React.useEffect(() => {
    scrollToTopOnPageNumClick()
  }, [activePageNum])

  const calculateTotalNumOfPages = () => {
    let totalNftees = 0
    let totalPages = 0
    if (checkIfActiveCollectionIsSelected(activeCollection)) {
      totalNftees = activeCollection.length
      totalPages = Math.ceil(totalNftees / 5)
    } else {
      if (checkIfNftsBelongingToAddressExist(nftsBelongingToAddress)) {
        nftsBelongingToAddress.map(item => {
          if (Array.isArray(item)) {
            totalNftees += item.length
          } else if (!Array.isArray(item)) {
            totalNftees += 1
          }
        })
        totalPages = Math.ceil(totalNftees / 5)
      }
    }
    return totalPages
  }

  // TODO: break this down into smaller functions & extract this into renderUtils.ts
  const renderPageNumbers = () => {
    const pageNumberElements = []
    const totalPages = calculateTotalNumOfPages()

    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      pageNumberElements.push(
        <Pagination.Item
          id="page-num-pagination"
          key={uuidv4()}
          active={activePageNum === pageNumber}
          onClick={() => setActivePageNum(pageNumber)}
        >
          {pageNumber}
        </Pagination.Item>
      )
    }

    return pageNumberElements
  }

  return (
    <nav className="page-num-pagination__nav">
      <ol className="page-num-pagination__ol">
        {collections && renderPageNumbers()}
      </ol>
    </nav>
  )

  //Removed pagination. To bring back, please uncomment the above.
  return null
}

export default PageNumPagination
