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
    <>
        <div className="row">
            <div className="column">
                    
                    <StaticImage
                        src="../images/RoyalTees.jpg"
                        alt="the rarity of NFTees"
                      
                    />
                    </div>
                    <div className="column">
                    <StaticImage
                        src="../images/CommuniTees.jpg"
                        alt="the rarity of NFTees"
                
                    />
                    </div>
                    <div className="column">
                    <StaticImage
                        src="../images/DesignLabs.jpg"
                        alt="the rarity of NFTees"

                    />
                    </div>
                    <div className="column">
                    <StaticImage
                        src="../images/LifeStyle.jpg"
                        alt="the rarity of NFTees"
                    />
            </div>
        </div>
        </>
      </Layout>
  )
}

export default HowItWorks
