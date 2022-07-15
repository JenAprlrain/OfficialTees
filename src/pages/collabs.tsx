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
          <h1 className="collections__heading1">Uman</h1>

            <StaticImage
              style={{width:"700px",height:"auto"}}
              src="../images/Uman.png"
              alt="the rarity of NFTees"
              className="about__rarity-scale"
            />
          </div>
          <div className="collections__sub-section">
          <h1 className="collections__heading1">Teens on Acid</h1>

            <StaticImage
              style={{width:"700px",height:"auto"}}
              src="../images/TOAxNFTEES LOGO.png"
              alt="the rarity of NFTees"
              className="about__rarity-scale"
            />
          </div>
          
          </div>
          <div className="collections__sub-section">
          <h1 className="collections__heading1">Clokkworky</h1>

            <StaticImage
              style={{width:"700px",height:"auto"}}
              src="../images/Transparent_Clokkworky_Tees_1.png"
              alt="the rarity of NFTees"
              className="about__rarity-scale"
            />
          </div>
    </Layout>
  )
}

export default HowItWorks
