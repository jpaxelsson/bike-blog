import * as React from "react"
import { Link, graphql } from "gatsby"
import Post from '../components/Post'
import Header from '../components/Header'
import Footer from "../components/Footer"
import '../style/style.css'

const PostsPage = ({ data }) => {
    return <>
    <div class="wrapper">
      <Header/>
      <main>
        <h2>P O S T S</h2>
        <section>
          {data.allContentfulPost.edges.map( ({ node }) => (
            <article className="post-panel" key={node.contentful_id}>
              <Post {...node}></Post>
            </article>
          ))}
        </section>
        
      </main>
      <Footer/>
    </div>
    </>
}

export default PostsPage

export const query = graphql`
query PostsPageQuery {
    allContentfulPost {
        edges {
        node {
          contentful_id
          date(formatString: "YYYY-MM-DD HH:MM")
          title
          description
          featureImage {
              url
          }
          slug          
        }
      }
    }
  }
`;



