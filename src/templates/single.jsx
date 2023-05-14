import * as React from "react"
import { Link, graphql } from "gatsby"
import Post from '../components/Post'
import Header from '../components/Header'
import Footer from "../components/Footer"
import Picture from "../components/Picture"
import '../style/style.css'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

const Bold = ({ children }) => <span className="rich-text-bold">{children}</span>
const Italic = ({ children }) => <span className="rich-text-italic">{children}</span>
const Code = ({ children }) => <span className="rich-text-code">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>
const Ullist = ({ children }) => <ul className="rich-text-ullist">{children}</ul>


const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
    [MARKS.CODE]: text => <Code>{text}</Code>
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.UL_LIST]: (node, children) => <Ullist>{children}</Ullist>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
  },
}

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
          {/* <p>{post.longText!==undefined&&post.longText!=null?post.longText.longText:""}</p> */}
          <div>{post.richText && renderRichText(post.richText, options)}</div>
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
    richText {
      raw
    }
  }
}
`;


