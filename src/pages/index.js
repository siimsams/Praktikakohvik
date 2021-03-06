import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import About from "../components/sections/about"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import Questions from "../components/sections/questions"
import Companies from "../components/sections/companies";

const IndexPage = () => (
  <Layout>
    <SEO />
    <Navigation />
    <Header />
    <About />
    <Companies />
    <Questions />
    <Footer />
  </Layout>
)

export default IndexPage
