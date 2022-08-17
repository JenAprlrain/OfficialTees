import React, { Component } from 'react';
import Layout from "../components/layout/layout"
import ReactCardFlip from 'react-card-flip';
import "./collections.scss";
import { StaticImage } from "gatsby-plugin-image"
import { storeImageloaded } from 'gatsby-plugin-image/dist/src/components/hooks';

class Example extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
        flipped: new Set()
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    return (e) => {
      e.preventDefault();
      let flipped = new Set(this.state.flipped);
      if (flipped.has(id)) {
        flipped.delete(id);
      } else {
        flipped.add(id);
      }
      this.setState({ flipped });
    };
  }

  render() {
    return (
        <Layout>
            <div className="row">
      <ReactCardFlip isFlipped={this.state.flipped.has(1)}>
        
        <div className="column" onClick={this.handleClick(1)}>
        <StaticImage
                        src="../images/RoyalTees.jpg"
                        alt="the rarity of NFTees"
                        style={{width:"100%",height:"auto"}}
          />
        </div>

        <div className="column" onClick={this.handleClick(1)}>
        <StaticImage
                        src="../images/cardback1.png"
                        alt="the rarity of NFTees"
                        style={{width:"100%",height:"auto"}}
                    />
        </div>
      </ReactCardFlip>
      <ReactCardFlip isFlipped={this.state.flipped.has(2)}>
      <div className="column" onClick={this.handleClick(2)}>
                    <StaticImage
                        src="../images/CommuniTees.jpg"
                        alt="the rarity of NFTees"
                        style={{width:"100%",height:"auto"}}
                    />
                    </div>

<div className="column" onClick={this.handleClick(2)}>
                        <StaticImage
                        src="../images/cardback2.png"
                        alt="the rarity of NFTees"
                        style={{width:"100%",height:"auto"}}
                    />
</div>
</ReactCardFlip>
<ReactCardFlip isFlipped={this.state.flipped.has(3)}>
      <div className="column" onClick={this.handleClick(3)}>
                    <StaticImage
                        src="../images/DesignLabs.jpg"
                        alt="the rarity of NFTees"
                        style={{width:"100%",height:"auto"}}
                    />
                    </div>

<div className="column" onClick={this.handleClick(3)}>
                        <StaticImage
                        src="../images/cardback3.png"
                        alt="the rarity of NFTees"
                        style={{width:"100%",height:"auto"}}
                    />
</div>
</ReactCardFlip>
<ReactCardFlip isFlipped={this.state.flipped.has(4)}>
      <div className="column" onClick={this.handleClick(4)}>
                    <StaticImage
                        src="../images/LifeStyle.jpg"
                        alt="the rarity of NFTees"
                        style={{width:"100%",height:"auto"}}
                    />
                    </div>

<div className="column" onClick={this.handleClick(4)}>
                    <StaticImage
                        src="../images/cardback4.png"
                        alt="the rarity of NFTees"
                        style={{width:"100%",height:"auto"}}
                    />
</div>
</ReactCardFlip>
      </div>
      </Layout>
  )
}

}

export default Example;