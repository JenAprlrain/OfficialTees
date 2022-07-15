import "./how-it-works.scss"
import React, { useState, useRef } from "react"
import { FaCopy } from "react-icons/fa"
import Overlay from "react-bootstrap/Overlay"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const HowItWorks = () => {
  const [show, setShow] = useState(false)
  const target = useRef(null)

  const handleCopyPasteClick = () => {
    console.log("click")
    navigator.clipboard.writeText("0x467cb7820E83FD84411132a696f471003C68008f")
    setShow(!show)
    setTimeout(() => {
      setShow(false)
    }, 1500)
  }

  return (
    <Layout>
      <Seo title="How It Works" />
      <div className="how-it-works">
        <h1 className="how-it-works__header">How It Works</h1>
        <h3 className="how-it-works__sub-header">Redeeming Your Replica Tee</h3>
        <ol className="how-it-works__ol">
          <li className="how-it-works__li">
            Purchase the NFTee on ZooCoin or Fantom NFT Marketplace.
          </li>
          <li className="how-it-works__li">
            Send a payment of 2 FTM to the following address:
            <p className="how-it-works__address">
              0x467cb7820E83FD84411132a696f471003C68008f
            </p>
            <div className="how-it-works__FaCopy-container" ref={target}>
              <FaCopy
                style={{
                  // width: "100%",
                  // marginLeft: "-20px",
                  fontSize: "1.25em",
                }}
                onClick={() => handleCopyPasteClick()}
              />
            </div>
            <Overlay target={target.current} show={show} placement="bottom">
              {({ placement, arrowProps, show: _show, popper, ...props }) => (
                <div
                  {...props}
                  style={{
                    backgroundColor: "rgba(100, 176, 255, 0.85)",
                    padding: "2px 10px",
                    marginRight: "3em",
                    color: "white",
                    borderRadius: 3,
                    fontSize: ".5em",
                    ...props.style,
                  }}
                >
                  copied to clipboard
                </div>
              )}
            </Overlay>
          </li>
          <li className="how-it-works__li">
            Fill out the Google Doc form below, and include the Trx Hash from 2
            FTM payment made above.
          </li>
        </ol>
        <div className="how-it-works__form-container">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdaZZG8Q8rK7Zg3i4FvaqNk5LoZqMCsXHuG3H3K9OlBD0N3zw/viewform"
            className="how-it-works__form"
          >
            Redeem Tee Form
          </a>
        </div>
        <p className="how-it-works__details">
          Note that you do not need to order the physical shirt if you don't
          wish to do so. Tees offers escrow services to facilitate the secondary
          sales/transfer of Replica Tees on the secondary market.
        </p>
      </div>
    </Layout>
  )
}

export default HowItWorks
