import * as React from "react"
import { Link, graphql } from "gatsby"
import Post from '../components/Post'
import Header from '../components/Header'
import Footer from "../components/Footer"
import Picture from "../components/Picture"

const Single = ( {data} ) => {

    const post = data.contentfulPost
    const imageUrl = post.featureImage.url + "?r=25&fit=pad&w=500"

    return <>
      <div class="wrapper">
        <Header/>
        <main>
          <h2>{post.title}</h2>
          <h3>{post.date}</h3>
          <Picture {...post.featureImage} />
          <p>{post.description}</p>
          <p>{post.longText!==undefined?post.longText.longText:""}</p>
          <div class="slider">
            <div class="slides">
              {post.postImages?.map( ({ ...postImage }) => (
                
                <div id={"slide-"+postImage.contentful_id}>
                      <Picture  {...postImage} />
                </div>    
              ))}
            </div>
            {post.postImages?.map( ({ ...postImage }) => (
              <a href={"#slide-"+postImage.contentful_id}><i class="fa-regular fa-image"></i></a> 
            ))}
          </div>

          <Link id="back-fab" to="/posts"><i class="fa-solid fa-angles-left"></i></Link>

          </main>
        <Footer/>
      </div>
    </>
}

export default Single

export const query = graphql`
query Posts($slug: String!) {
  contentfulPost(slug: {eq: $slug}) {
    id
    description
    featureImage {
      url
    }
    postImages {
      url
      contentful_id
    }
    title
  }
}
`;


