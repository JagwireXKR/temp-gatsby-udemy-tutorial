import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"

export default function Home() {
  return (
    <Layout>
      <SEO title="home page" description="this is home page"/>
        <main className="page">
          <header className="hero">
            <StaticImage src="../assets/images/main.jpeg"
            alt="Eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
            ></StaticImage>
            <div className="hero-container">
              <div className="hero-text">
                <h1>simple recipes</h1>
                <h4>no fluff, just recipes</h4>
                
              </div>
            </div>
          </header>
        </main>
        <AllRecipes />
      </Layout>
  )
}