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
                        src="../images/Jmoney netizen.png"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p className="teams__text">jmoney</p>
                    <p>Team Lead</p>
                </a>

                <a className="teams__fashionHead-img"href="https://twitter.com/DeFiiGhost">
                    <StaticImage
                        src="../images/z14 netizen.jpeg"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p>Z14</p>
                    <p>Metaverse / Strategy Lead</p>
                </a>

                <a className="teams__fashionHead-img"href="https://twitter.com/D_Low_TEES">
                    <StaticImage
                        src="../images/dlow netizen.png"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p>D Low</p>
                    <p>Physical Product Lead</p>
                </a>

                <a className="teams__fashionHead-img"href="https://twitter.com/nzaru1">
                    <StaticImage
                        src="../images/nzarunetizen.png"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p>Nzaru</p>
                    <p>Discord Lead / Strategy Specialist</p>
                </a>
            </div>
        </div>

        <div className="teams__fashionHead-section-2">
                <a className="teams__fashionHead-img"href="https://twitter.com/CreepyCryptoApe">
                    <StaticImage
                        src="../images/creepycryptoapenetizen.png"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p>CreepyCryptoApe</p>
                    <p>Discord Moderation Lead</p>
                </a>

                <a className="teams__fashionHead-img"href="https://twitter.com/BlueDerpyfi">
                    <StaticImage
                        src="../images/Blue Derpy Netizen.png"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p>Blue Derpy</p>
                    <p>Technology and Development Lead</p>
                </a>

                <a className="teams__fashionHead-img"href="https://twitter.com/dedis41">
                    <StaticImage
                        src="../images/Dedis netizen.png"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p>Dedis</p>
                    <p>Communications and Engagement Lead / Operations Specialist</p>
                </a>

                <a className="teams__fashionHead-img"href="https://twitter.com/Jerr0d_">
                    <StaticImage
                        src="../images/Jerrod Netiezen.png"
                        alt="the rarity of NFTees"
                        className="about__rarity-scale"
                    />
                    <p>J3rr0d</p>
                    <p>Design Labs Lead / CommuniTee Collection Lead</p>
                </a>
        </div>
    </div>
    </>
)
}

export default HowItWorks
