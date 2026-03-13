import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Footer from "../components/Footer"
import Project from "../components/projects"
import Education from "../components/Education"
import Naima from "../components/Naima"

const IndexPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title="Muhammad Abdelmoniem Portfolio" />
    <Header></Header>
    <About></About>
    <Naima></Naima>
    <Education></Education>
    <Work></Work>
    <Project></Project>
    <Skills></Skills>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
