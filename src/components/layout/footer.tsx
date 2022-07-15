import "./footer.scss"
import React from "react"
import { Link } from "gatsby"
import { AiFillTwitterCircle } from "react-icons/ai"
import { FaDiscord, FaShopify } from "react-icons/fa"
import { StaticImage } from "gatsby-plugin-image"


const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer__detail-links">
        {/* <Link className="footer__link" to="/">
          About Us
        </Link>
        <Link className="footer__link" to="/">
          Partners
        </Link>
        <a className="footer__link" href="#">
          Contact
        </a> */}
        <p className="footer__copyright">
          © {new Date().getFullYear()} Official NFTees
        </p>
      </div>
      <div className="footer__social-links-container">
        <a
          href="https://twitter.com/OfficialNFTees"
          className="footer__social-media-icons"
        >

        <StaticImage
            src="../../images/twitter-icon.png"
            alt="the rarity of NFTees"
            className="about__rarity-scale"
        />
        </a>
        <a
          href="https://t.co/H78iSMH2f3?amp=1"
          className="footer__social-media-icons"
        >
          <StaticImage
            src="../../images/discord-icon.png"
            alt="the rarity of NFTees"
            className="about__rarity-scale"
          />
        </a>
        <a
          href="https://officialnftees.medium.com/"
          className="footer__social-media-icons"
        >

          <StaticImage
            src="../../images/medium-icon.png"
            alt="the rarity of NFTees"
            className="about__rarity-scale"
          />
          {/* <FaShopify /> */}
        </a>
      </div>
    </footer>
  )
}

export default Footer
