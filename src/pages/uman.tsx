import "./ntf-community.scss"
import React, { useState, useRef, useContext } from "react"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"
import Teams from "../components/teamsComponent"
import { Web3Context } from "../context/WalletContext"
import { Button } from "react-bootstrap"

const HowItWorks = () => {
  const [show, setShow] = useState(false)
  const target = useRef(null)
  const { onConnect, address, mint, pendingRequest, mintingActive, totalSupply } = useContext(Web3Context);
  const [quan, setQuan] = useState(1);
  const mintTee = () => {
    mint(quan);
  }

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
      <Seo title="CommuniTees" />
      
       
      <div className="nft-community">
      <StaticImage alt="Tees Banner" style={{width:"70%",height:"auto"}} src={"../images/Uman.png"} />
        <div className="nft-community">
          <h2>this is where we write about the partnership</h2>
        </div>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        </div>
        <div className="teams__fashionHead-section">
            <div className="teams__fashionHeadImg-section">
                <a className="teams__fashionHead-img">
                    <StaticImage
                        src="../images/MG_5750.jpg"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                </a>

                <a className="teams__fashionHead-img">
                    <StaticImage
                        src="../images/MG_5754.jpg"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    
                    />
                </a>

                <a className="teams__fashionHead-img">
                    <StaticImage
                        src="../images/MG_5743.jpg"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                </a>
        </div>
        </div>
    
    </Layout>
  )
}

export default HowItWorks
