import "./index.scss"
import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Home" />
    <div className="about">
      <h1 className="about__header">NFTees</h1>
      <p className="about__p">
        Crypto-fashion is a multi-billion dollar, largely untapped market.
        Exclusivity can now be validated on the blockchain. Don't miss out on
        the opportunity to invest in this space and your crypto-fashion
        wardrobe. NFTees is powered by Fantom, the world's fastest blockchain.
      </p>
      <p className="about__p">
        NFTee holders earn royalties on sales of Merch Tees (physical only) sold
        on our <a href="https://nftees-store.myshopify.com/">Merch Tee store</a>
        . It's that simple. Hold the NFTee, earn a portion of the revenue
        generated from Merch Tee sales.
      </p>
      <h3 className="about__sub-header">Our Collections</h3>
      <p className="about__p">
        Royal Tees: 100 1/1 Hand-made NFTees on Fantom.
      </p>
      <StaticImage
        src="../images/about-nftees.png"
        alt="explanation of what NFTees is all about"
      />
      <p className="about__p">
        Purchased NFTees can be found on the{" "}
        <Link to="/wardrobes">Wardrobes</Link> page by searching for your wallet
        address.
      </p>
      <h3 className="about__sub-header">Royal Tees Rarity Scale</h3>
      <StaticImage
        src="../images/rarity-scale-updated.png"
        alt="the rarity of NFTees"
        className="about__rarity-scale"
      />
      <p className="about__p">
        We are driven by the desire to provide quality and value for our NFTee
        holders. Rarity scale is approximate. Slight deviation from the numbers
        will be designed to benefit existing NFTee holders.
      </p>
      <h3 className="about__h5">Collection 2: To Be Announced.</h3>
    </div>
  </Layout>
)

export default IndexPage