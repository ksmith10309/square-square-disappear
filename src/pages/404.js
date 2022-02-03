import * as React from "react"
import { Link } from "gatsby"
import "../styles/page.css"

// styles
const headingStyles = {
  marginTop: 100,
}

const sectionStyles = {
  marginTop: 150,
  marginRight: "auto",
  marginLeft: "auto",
  width: "400px",
}

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <div style={sectionStyles}>
        <p class="home-text">
          Sorry{" "}
          <span role="img" aria-label="Pensive emoji">
            😔
          </span>{" "}
          we couldn’t find what you were looking for.
          <br />
          {process.env.NODE_ENV === "development" ? (
            <>
              <br />
              Try creating a page in <code style={codeStyles}>src/pages/</code>.
              <br />
            </>
          ) : null}
          <br />
        </p>
      </div>
      <div className="link-section">
        <Link to="/" className='link-text'>Home</Link>
      </div>
    </main>
  )
}

export default NotFoundPage
