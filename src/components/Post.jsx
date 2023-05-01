import * as React from "react"
import { Link } from "gatsby"
import Picture from "./Picture"

const Post = ( node ) => {
    return <>
        <h2>{node.date}</h2>
        <Picture {...node.featureImage} />
        <p>{node.description}</p>
        <div className="open-post-layout">
            <Link className="open-post" to={"../post/"+node.slug}>Read more <i class="fa-solid fa-angles-right"></i></Link>`
        </div>
    </>
}

export default Post; 