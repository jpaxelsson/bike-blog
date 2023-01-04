import * as React from "react"
import { Link } from "gatsby"
import '../style/style.css'
import Header from "../components/Header"
import Footer from "../components/Footer"

const IndexPage = () => {
  return (
    <div class="wrapper">
      <Header/>
      <main>
        <h1>Bike Blog - Home</h1>
        <Link to="/posts">Posts</Link>
      </main>
      <Footer/>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Bike Blog - Home</title>
