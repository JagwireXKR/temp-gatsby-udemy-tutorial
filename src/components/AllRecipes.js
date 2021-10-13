import React from 'react'
import TagsList from './TagsList'
import RecipesList from './RecipesList'
import { graphql,useStaticQuery} from 'gatsby'

const query = graphql`
  {
    allContentfulRecipe(sort: {fields: title, order: ASC}) {
      nodes {
        title
        cookTime
        id
        prepTime
        content {
          tags
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`

const AllRecipes = () => {
    //method1
    const data = useStaticQuery(query);
    const recipes = data.allContentfulRecipe.nodes
    
    //method2
    //const {allContentfulRecipe:{nodes:recipes}} = useStaticQuery(query);
    
    console.log(recipes)
    return (
        <section className="recipes-container">
            <TagsList recipes={recipes}/>
            <RecipesList recipes={recipes}/>
        </section>
    )
}

export default AllRecipes
