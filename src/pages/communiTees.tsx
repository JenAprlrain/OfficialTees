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
      <StaticImage alt="Tees Banner" style={{width:"100vw",height:"auto"}} src={"../images/cc.png"} />
        <h1 className="nft-community__heading">Communitee collection</h1>
        <div className="nft-community__banner">
          <img
                src={"/img/promo.gif"}
                alt="banner"
                className="nft-community__banner-img"
                
          />
        </div>
        

        <div className="nft-community__connect-section">
        <div>{totalSupply.toString()} / 1212 minted</div>
        <br />
        { !mintingActive ? 
          <Button disabled className="nft-community__connect-button" style={{cursor:"not-allowed"}}>
            Minting Starts at 9PM UTC 3/31
          </Button> :
          !address ? 
          <Button onClick={onConnect} className="nft-community__connect-button">
            Connect
          </Button> : 
          <>

            <div style={{width: 250, margin: '20px auto'}}>
              1 <input className="" type="range" max={20} min={1} value={quan} onChange={(event) => setQuan(event.currentTarget.value)}/> 20
            </div>
            <Button disabled className="nft-community__connect-button">
              {`Minted out!`}
            </Button>
            <p>{address
                            .substring(0, 6)
                            .concat('...')
                            .concat(address.substring(address.length - 6, address.length))}</p>
          </>
          
        }
          <p>1 NFTEE = 40 FTM</p>
          <p>(Exclude gas)</p>
        </div>

        <div className="nft-community__mashup-section">
          <h2>the ultimate ftm nft mashup</h2>
          <div className="nft-community__mashupImg-section">
          </div>
        </div>

        <div className="nft-community__artist-section">
          <p>start your digital mardrobe with the communitee collection</p>
          <StaticImage
                src="../images/banner.jpg"
                alt="banner"
                
          />
          <h1 className="nft-community__artist-section__heading">honoring pixel artists on fantom</h1>
          <div className="nft-community__artist-accounts">
            <a className="nft-community__artist-img"href="https://twitter.com/DefitheDinoGuy">
              <StaticImage
                src="../images/defidino.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">defidino</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/ERNESTO_FTM">
              <StaticImage
                src="../images/Ernesto.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">Ernesto</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/LostFantomSaga">
              <StaticImage
                src="../images/fantomboy OG.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">fantomboy OG</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/FantumsOfOpera">
              <StaticImage
                src="../images/fantums.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">Fantums</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/FantomPunks">
              <StaticImage
                src="../images/fantompunks.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">fantompunks</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/FTMdead">
              <StaticImage
                src="../images/ftm dead.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">ftm dead</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/FantomHAM">
              <StaticImage
                src="../images/hamsters.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">hamsters</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/LostFantomSaga">
              <StaticImage
                src="../images/lost fantom saga.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">lost fantom saga</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/MowsePack">
              <StaticImage
                src="../images/Mowsepack.png"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">Mowsepack</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/My_Lil_Spirit">
              <StaticImage
                src="../images/Mylilspirit.png"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">Mylilspirit</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/riotgoools">
              <StaticImage
                src="../images/riotgoools.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">riotgoools</p>
            </a>
            <a className="nft-community__artist-img"href="https://twitter.com/ShibaPunks">
              <StaticImage
                src="../images/shibapunks.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">shibapunks</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/StrangeBrewFTM">
              <StaticImage
                src="../images/strange brew.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">strange brew</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/OfficialNFTees">
              <StaticImage
                src="../images/tees.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">tees</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/votersnft">
              <StaticImage
                src="../images/voters.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">voters</p>
            </a>

            <a className="nft-community__artist-img"href="https://twitter.com/worldofumans">
              <StaticImage
                src="../images/worldofumans.jpg"
                alt="the rarity of NFTees"
                className="about__rarity-scale"
              />
              <p className="nft-community__artist-img__figcaption">worldofumans</p>
            </a>
            
          </div>
          <p className="nft-community__artist-description">Partners will earn ftm from sales of physical tees</p>
        </div>

        <div className="nft-community__fashionHead-section">
          <div className="nft-community__fashionHeadImg-section">
           <Teams />
          </div>
          <h2 className="nft-community__sbit-section__heading">
              Follow the team: One Person following the whole team will win 2 free NFTees on 4/3!
          </h2>

          <div className="nft-community__sbit-section">
            <div className="nft-community__sbit-detail">
              <a className="nft-community__artist-img"href="https://twitter.com/8bit_metaverse">
                <StaticImage 
                  src="../images/8bit.jpg"
                  alt="the rarity of NFTees"
                  className="about__rarity-scale"
                />
                <p className="nft-community__artist-img__figcaption">8bit</p>
              </a>
              <h3 className="nft-community__sbit-text">8-Bit World: NFTees is an official partner of 8-Bit World. Future launches will be held at Tees Tower in FaXian City (our 8-Bit Land)!</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HowItWorks
