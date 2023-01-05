import * as React from "react"
import { Link } from "gatsby"
import Picture from "./Picture"

const Post = ( node ) => {
    return <>
        <h2>{node.date}</h2>
        <Picture {...node.featureImage} />
        <p>{node.description}</p>
        <Link to={"../post/"+node.slug}>Läs allt om det!</Link>`
    </>
}

export default Post; 