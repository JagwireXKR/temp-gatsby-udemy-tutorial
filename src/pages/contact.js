import React from 'react'
import Layout from '../components/Layout'
import {graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from '../components/SEO'
const Contact = ({data}) => {
    const recipes = data.allContentfulRecipe.nodes
    return (
    <Layout>
        <SEO title="Contact" />
        <main className="page">
            <section className="contact-page">
                <article className="contact-info">
                    <h3>want to get in touch?</h3>
                    <p>
                        Paragraph One
                    </p>
                    <p>
                        Paragraph Two
                    </p>
                    <p>
                        Paragraph Three
                    </p>
                </article>
                <article>
                    <form className="form contact-form" action="https://formspree.io/f/xleavqlp"
  method="POST">
                        <div className="form-row">
                            <label hmtlFor="name">your name
                            <input type="text" name="name" id="name" />
                            </label>
                        </div>
                        <div className="form-row">
                            <label hmtlFor="email">your e-mail
                            <input type="text" name="email" id="email" />
                            </label>
                        </div>
                        <div className="form-row">
                            <label htmlFor="message">message
                            <textarea name="message" id="message"></textarea>
                            </label>
                        </div>
                        <button type="submit" className="btn block" >
                            submit
                        </button>
                    </form>
                </article>
            </section>
            <section className="featured-recipes">
                <h5>Look at this Awedseomsource</h5>
                <RecipesList recipes={recipes}/>
            </section>
        </main>
    </Layout>)
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        title
        cookTime
        id
        prepTime
        content {
          id
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default Contact 
