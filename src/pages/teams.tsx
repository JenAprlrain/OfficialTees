import "./teams.scss"
import React, { useState, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Teams from "../components/teamsComponent"
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
        <Seo title="Team" />
        <Teams />
    </Layout>
)
}

export default HowItWorks
