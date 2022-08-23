import "./desktop-header.scss"
import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage} from "gatsby-plugin-image"

const DesktopHeader = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="desktop-header">
      <div className="desktop-header__container">
      <StaticImage
                        src="../../images/Red_Tees_Logo_2022.png"
                        alt="the rarity of NFTees"
                        style={{width:"30%",height:"auto",marginLeft:"15%",boxShadow:"none"}}
          />
        <nav className={`desktop-header__nav`}>
          <Link
            className={`desktop-header__nav-links ${toggle && "toggle"}`}
            to="/"
            activeClassName="active"
          >
            Collections
          </Link>
          <Link
            className={`desktop-header__nav-links ${toggle && "toggle"}`}
            to="/my-nftees"
            activeClassName="active"
          >
            My NFTees
          </Link>
          <Link
          className={`desktop-header__nav-links ${toggle && "toggle"}`}
          to="/collabs"
          activeClassName="active"
        >
          Partners
          </Link>
          <Link
            className={`desktop-header__nav-links ${toggle && "toggle"}`}
            to="/teams"
            activeClassName="active"
          >
          Team
          </Link>

        </nav>
      </div>
    </header>
  )
}

export default DesktopHeader
