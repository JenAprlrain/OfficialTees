import "./collections.scss"
import React, { useState, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

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
      <Seo title="Collections" />
      <div className="collections">
        <div className="collections__sub-section">
          <h2 className="collections__heading1">OfficialNFTees (Royal Tees) – $TEES</h2>

            <StaticImage
              style={{width:"300px",height:"auto"}}
              src="../images/RoyalTees.jpg"
              alt="the rarity of NFTees"
              className="about__rarity-scale"
            />
          </div>
          <div className="collections__sub-section">
          <h2 className="collections__heading1">CommuniTee Collection – $TEESCC</h2>

            <StaticImage
              style={{width:"300px",height:"auto"}}
              src="../images/CommuniTees.jpg"
              alt="the rarity of NFTees"
              className="about__rarity-scale"
            />
          </div>
          
          </div>
          <div className="collections__sub-section">
          <h2 className="collections__heading1">Tees Design Labs – $TEESDL</h2>

            <StaticImage
              style={{ width:"300px",height:"auto"}}
              src="../images/DesignLabs.jpg"
              alt="the rarity of NFTees"
              className="about__rarity-scale"
            />
          </div>
          <div className="collections__sub-section">
          <h2 className="collections__heading1">Tees Lifestyle Collection – $TEESL</h2>

            <StaticImage
              style={{ width:"300px",height:"auto"}}
              src="../images/LifeStyle.jpg"
              alt="the rarity of NFTees"
              className="about__rarity-scale"
            />
          </div>
    </Layout>
  )
}

export default HowItWorks
