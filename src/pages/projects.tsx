import "./teams.scss"
import React, { useState, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout/layout"

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

          <div className="middle-div">
                    <StaticImage
                        src="../images/RoyalTees.jpg"
                        alt="the rarity of NFTees"
                    />

                    <StaticImage
                        src="../images/CommuniTees.jpg"
                        alt="the rarity of NFTees"
                    
                    />

                    <StaticImage
                        src="../images/DesignLabs.jpg"
                        alt="the rarity of NFTees"
                    />

                    <StaticImage
                        src="../images/LifeStyle.jpg"
                        alt="the rarity of NFTees"
                    />
            </div>
  )
}

export default HowItWorks
