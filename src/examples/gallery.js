import React from 'react'
import { useStaticQuery, graphql} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const query = graphql`
{
  allFile(filter: {extension: {nin: ["svg","css"]}}) {
    nodes {
      name
      childImageSharp {
        gatsbyImageData(
          layout: FIXED
          placeholder: BLURRED
          transformOptions: {grayscale: true}
          width: 200
          height:200
        )
      }
    }
  }
}
`

const Gallery = () => {
  const data = useStaticQuery(query) //calls the graphql query above
  const nodes = data.allFile.nodes //creates shortcut further into graphql tree
  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image // set name equal to image parameter
        const pathToImage = getImage(image)
        return (
          <article key={index} className="item"> 
            <GatsbyImage
            image={pathToImage}
            alt={name}
            className="gallery-img"/>
            <p>{name}</p>
          </article>
        )
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
display: flex;
flex-wrap: wrap;
.item {
  margin-right: 1rem;
}
.gallery-img {
  border-radius: 1rem;
}
`

export default Gallery