import React from "react"
import { Link } from "gatsby"

import PropTypes from "prop-types"
import Typed from "react-typed";
import Image from "../components/image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#F7F9F9`,
      // marginBottom: `2.75rem`,
      paddingTop: `64px`,
      paddingBottom: `42px`,
    }}
  >
    <div 
      style={{ 
        maxWidth: `200px`, 
        // marginBottom: `1.45rem`,
        marginLeft: `auto`,
        marginRight: `auto`,
      }}
    >
      <Image />
    </div>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        textAlign: `center`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#333333`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="container" style={{ position: `relative`, zIndex: 1, color: `#333333`, marginTop: `25px` }}>
        <h2>
          <Typed
            loop
            typeSpeed={80}
            backSpeed={20}
            strings={[
              "I'm a <span class='accent'>web developer</span>.",
              "I'm <span class='accent'>Antwickler</span>.",
            ]}
            smartBackspace
            backDelay={1000}
            loopCount={0}
            showCursor
            cursorChar="|"
            className="typed"
          />
        </h2>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
