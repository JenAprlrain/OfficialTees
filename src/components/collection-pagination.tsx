import "./collection-pagination.scss"
import React from "react"
import Pagination from "react-bootstrap/Pagination"
import { v4 as uuidv4 } from "uuid"

interface CollectionPaginationProps {
  collections: object[]
  activeCollectionName: string
  handleCollectionClick: Function
  setActiveCollectionName: Function
  setActivePageNum: Function
}

const CollectionPagination: React.FC<CollectionPaginationProps> = ({
  collections,
  activeCollectionName,
  setActiveCollectionName,
  setActivePageNum,
  handleCollectionClick,
}) => {
  const renderCollectionPagination = () => {
    const collectionLogos: any = []

    collectionLogos.push(
      <Pagination.Item
        key={uuidv4()}
        active={activeCollectionName === "All"}
        onClick={() =>
          handleCollectionClick(
            "All",
            setActiveCollectionName,
            setActivePageNum
          )
        }
      >
        All
      </Pagination.Item>
    )

    Object.keys(collections).map(collectionName => {
      collectionLogos.push(
        <Pagination.Item
          key={uuidv4()}
          active={collectionName === activeCollectionName}
          onClick={() =>
            handleCollectionClick(
              collectionName,
              setActiveCollectionName,
              setActivePageNum
            )
          }
        >
          <img
            src={collections[collectionName]}
            decoding="async"
            alt="collection logo"
          />
        </Pagination.Item>
      )
    })

    return collectionLogos
  }

  return (
    <nav className="collection-pagination__nav">
      <ul className="collection-pagination__ul">
        {collections && renderCollectionPagination()}
      </ul>
    </nav>
  )
}

export default CollectionPagination
