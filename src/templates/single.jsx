import * as React from "react"
import { Link, graphql } from "gatsby"
import Post from '../components/Post'
import Header from '../components/Header'
import Footer from "../components/Footer"

const Single = ( {data} ) => {

    const post = data.contentfulPost
    const imageUrl = post.featureImage.url + "?r=25&fit=pad&w=" + window.innerWidth

    return <>
        <div class="wrapper">
      <Header/>
      <main>
        <h2>{post.title}</h2>
        <h3>{post.date}</h3>
        <picture>
            <source srcSet={imageUrl + '&fm=webp'} type="image/webp"/>
            <source srcSet={imageUrl + '&fm=jpg'} type="image/jpeg"/>
            <img src={imageUrl + '&fm=webp&fit=pad'} alt={post.featureImage.description} />
        </picture>
        
        <p>{post.description}</p>

        <Link to="/posts">&lt;&lt;&lt; Tillbaka</Link>
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
    title
  }
}
`;


