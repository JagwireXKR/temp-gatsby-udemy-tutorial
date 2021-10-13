import React from 'react'
import {useStaticQuery,graphql} from 'gatsby'

const getData = graphql`
query {
    site {
      bugsbunnyinfo: siteMetadata {
        author
        description
        simpleData
        title
        person {
          name
          age
        }
        complexData {
          age
          name
        }
      }
    }
  }  
`

const FetchData = () => {
    const {
        site: {
            bugsbunnyinfo: { title },
        },
    } = useStaticQuery(getData)

    return (
        <div>
           {/* <h1>Name : {data.site.siteMetadata.person.name}</h1>  */}
        <h2>site title is : {title}</h2>
        </div>
    )
}

export default FetchData
