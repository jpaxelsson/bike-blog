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

        <svg viewBox="0 0 500 200">
          <path id="curve" d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145" />
          <text x="56">
            <textPath xlinkHref="#curve">
              Dangerous Curves Ahead
            </textPath>
          </text>
        </svg>
        
        <Link to="/posts">Posts</Link>
      </main>
      <Footer/>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Bike Blog - Home</title>
