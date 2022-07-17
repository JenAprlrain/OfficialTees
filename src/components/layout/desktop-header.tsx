import "./desktop-header.scss"
import React, { useState } from "react"
import { Link } from "gatsby"
import { FaTshirt } from "react-icons/fa"

const DesktopHeader = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="desktop-header">
      <div className="desktop-header__container">
        <h1 className="desktop-header__title">
          <Link to="/markets">
            Official NF
            <FaTshirt style={{ position: "relative", top: "2px" }} />
            ees
          </Link>
        </h1>
        <nav className={`desktop-header__nav`}>
          <Link
            className={`desktop-header__nav-links ${toggle && "toggle"}`}
            to="/"
            activeClassName="active"
          >
            Home
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
