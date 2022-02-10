import * as React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import "../styles/page.css"

const EndPage = () => {
  return (
    <Layout pageTitle="The End">
      <div className="page">
        <p className="page-text">
          Congratulations. You solved all 12 levels of Square Square Disappear.
        </p>
        <p className="page-text">
          Square Square Disappear was created by Katherine Smith. Thanks for playing.
        </p>
        <p className="page-text">
          Click the button below to go back to home.
        </p>
      </div>
      <div>
        <Link to="/"
          className={'link-text'}>
          Home
        </Link>
      </div>
    </Layout>
  )
}

export default EndPage
