import "./merch-tees.scss"
import React from "react"

import Button from "../components/layout/button"
import Layout from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"

const MerchTees = () => {
  return (
    <Layout>
      <StaticImage alt="Tees Banner" style={{width:"100vw",height:"auto"}} src={"../images/Glitch-Header.png"} />
      <div className="merch-tees">
      
        <a
          href="https://nftees-store.myshopify.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="merch-tees__a"
        >
          <Button>Get Merch Tees</Button>
        </a>
      </div>
    </Layout>
  )
}

export default MerchTees
