import * as React from "react"
import { Link } from "gatsby"

import "@fontsource/noto-sans-jp"

import "@fortawesome/fontawesome-svg-core/styles.css"
import {config} from "@fortawesome/fontawesome-svg-core"
config.autoAddCss = false

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
      <div>Icons made by <a href="https://www.freepik.com" title="Freepik" target="blank">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>
        © {new Date().getFullYear()}, yoshiba All rights reserved.
      </footer>
    </div>
  )
}

export default Layout
