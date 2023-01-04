import * as React from "react"
import { Link } from "gatsby"

const Post = ( node ) => {
    const imageUrl = node.featureImage.url + "?r=25&fit=pad&w=" + window.innerWidth
    return <>
        <h2>{node.date}</h2>
        <picture>
            <source srcSet={imageUrl + '&fm=webp'} type="image/webp"/>
            <source srcSet={imageUrl + '&fm=jpg'} type="image/jpeg"/>
            <img src={imageUrl + '&fm=webp&fit=pad'} alt={node.featureImage.description} />
        </picture>
        
        <p>{node.description}</p>
        <Link to={"../post/"+node.slug}>Läs allt om det!</Link>`
    </>
}

export default Post; 