import * as React from "react"

const Picture = ( featureImage ) => {

    const imageUrl = featureImage.url + "?fit=pad"

    return <>
     <picture>
        <source media="(max-width: 480px)" srcSet={imageUrl + '&r=25&fm=avif&w=480'} type="image/avif"/>
        <source media="(max-width: 768px)" srcSet={imageUrl + '&r=25&fm=avif&w=768'} type="image/avif"/>
        <source srcSet={imageUrl + '&r=25&fm=avif&w=1024'} type="image/avif"/>
        <source media="(max-width: 480px)" srcSet={imageUrl + '&r=25&fm=webp&w=480'} type="image/webp"/>
        <source media="(max-width: 768px)" srcSet={imageUrl + '&r=25&fm=webp&w=768'} type="image/webp"/>
        <source srcSet={imageUrl + '&r=25&fm=webp&w=1024'} type="image/webp"/>
        <source srcSet={imageUrl + '&fm=jpg&fit=pad&w=1024'} type="image/jpeg"/>
        <img src={imageUrl + '&fm=webp&fit=padw=1024'} alt={featureImage.description} />
    </picture>

    {/* , imageUrl + '&fm=webp&fit=pad&w=768', imageUrl + '&fm=webp&fit=pad&w=1024' */}
    </>
}

export default Picture; 