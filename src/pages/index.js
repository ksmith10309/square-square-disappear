import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import "../styles/page.css"

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <div className="home">
        <p className="home-text">
          This is Square Square Disappear, the game where you click on squares to make them disappear.
        </p>
        <p className="home-text">
          Make the color of all the squares match the color of the background to move on to the next level.
        </p>
        <p className="home-text">
          Click the button below to start.
        </p>
      </div>
      <div>
        <Link to="/level-1/"
          className={'link-text'}>
          First Level
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
