import "./header.scss"
import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { FaTshirt, FaDiscord, FaShopify } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"

interface HeaderProps {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <header>
      <div className="header__container">
        <h1 className="header__title">
          <Link to="/markets">
            Official NF
            <FaTshirt style={{ position: "relative", top: "2px" }} />
            ees
          </Link>
        </h1>
        <div
          className={`header__nav-toggle ${toggle && "toggle"}`}
          onClick={() => setToggle(!toggle)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`header__nav-mobile ${toggle && "toggle"}`}>
        <Link
          className={`header__nav-mobile-links ${toggle && "toggle"}`}
          to="/"
        >
          Collections
        </Link>
        <Link
          className={`header__nav-mobile-links ${toggle && "toggle"}`}
          to="/my-nftees"
        >
          My NFTees
        </Link>
        <Link
          className={`header__nav-mobile-links ${toggle && "toggle"}`}
          to="/collabs"
          activeClassName="active"
        >
          Partners
        </Link>
        <Link
          className={`header__nav-mobile-links ${toggle && "toggle"}`}
          to="/teams"
          activeClassName="active"
        >
          Team
        </Link>


        <a
          href="https://twitter.com/OfficialNFTees"
          target="_blank"
          rel="noreferrer noopener"
          className={`header__social-media-icons ${toggle && "toggle"}`}
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://t.co/H78iSMH2f3?amp=1"
          target="_blank"
          rel="noreferrer noopener"
          className={`header__social-media-icons ${toggle && "toggle"}`}
        >
          <FaDiscord />
        </a>
        <a
          href="https://nftees-store.myshopify.com/"
          target="_blank"
          rel="noreferrer noopener"
          className={`header__social-media-icons ${toggle && "toggle"}`}
        >
          <FaShopify />
        </a>
      </nav>
    </header>
  )
}

export default Header
