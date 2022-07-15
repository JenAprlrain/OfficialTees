import "./market-selector.scss"
import React from "react"

const MarketSelector = ({
  activeMarket,
  setActiveMarket,
  setActiveCollection,
  setActivePageNum,
}) => {
  const handleMarketSelectorClick = (str: string) => {
    setActiveMarket(str)
    setActivePageNum(1)
    setActiveCollection([])
  }

  return (
    <nav className="market-selector__nav--markets">
      <button
        className={`market-selector__button ${
          activeMarket === "primary" ? "active" : null
        }`}
        onClick={() => handleMarketSelectorClick("primary")}
      >
        Primary
      </button>
      <button
        className={`market-selector__button ${
          activeMarket === "secondary" ? "active" : null
        }`}
        onClick={() => handleMarketSelectorClick("secondary")}
      >
        Secondary
      </button>
    </nav>
  )
}

export default MarketSelector
