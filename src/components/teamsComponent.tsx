import "./teams.scss"
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
    <>
    <div className="teams">
        <div className="teams__fashionHead-section">
            <h2>The fashionheads</h2>
            <div className="teams__fashionHeadImg-section">
                <a className="teams__fashionHead-img"href="https://twitter.com/0xJMONEY">
                    <StaticImage
                        src="../images/Jmoney.png"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p className="teams__text">jmoney</p>
                    <p>Team Lead</p>
                </a>

                <a className="teams__fashionHead-img"href="https://twitter.com/DeFiiGhost">
                    <StaticImage
                        src="../images/z14.jpeg"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p>Z14</p>
                    <p>Metaverse / Strategy Lead</p>
                </a>

                <a className="teams__fashionHead-img"href="https://twitter.com/D_Low_TEES">
                    <StaticImage
                        src="../images/dlow.png"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p>D Low</p>
                    <p>Physical Product Lead</p>
                </a>
            </div>
        </div>

        <div className="teams__fashionHead-section-2">
                <a className="teams__fashionHead-img"href="https://twitter.com/BlueDerpyfi">
                    <StaticImage
                        src="../images/Blue Derpy.png"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p>Blue Derpy</p>
                    <p>Technology and Development Lead</p>
                </a>

                <a className="teams__fashionHead-img"href="https://twitter.com/Jerr0d_">
                    <StaticImage
                        src="../images/Jerrod.png"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p>J3rr0d</p>
                    <p>Marketing Lead</p>
                </a>

                <a className="teams__fashionHead-img"href="https://twitter.com/jen_aprilrain">
                    <StaticImage
                        src="../images/Jen.png"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p>jen_aprilrain</p>
                    <p>Development and Community Management Lead</p>
                </a>
        </div>
    </div>
    </>
)
}

export default HowItWorks