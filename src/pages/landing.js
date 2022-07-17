import GatsbyLink from "gatsby-link";
import React from "react";
import Typed from "react-typed";
import "../pages/collections.scss";
import { navigate } from "gatsby-link";

function App() {
  return (
    <div className="app">
      <div className="container">
      </div>
      <div className="animated-typing">
        <Typed
          strings={[
            "Clothing is not a commodity",
            "Wear clothing that is as rare as you",
            "Secured to the blockchain",
          ]}
          typeSpeed={70}
          backSpeed={30}
        />
      </div>
      <div className="buttons">
	  <button onClick={()=>{navigate("../")}}>Enter Site</button>
      </div>
    </div>
  );
}
export default App;

