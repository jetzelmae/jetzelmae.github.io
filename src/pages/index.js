import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'

const HomeIndex = () => {
  const siteTitle = 'Jetzel Mae'
  const siteDescription = 'Site description'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Artist &nbsp;&nbsp; | &nbsp;&nbsp; Singer &nbsp;&nbsp; | &nbsp;&nbsp; Writer
            </h2>
          </header>
          <p>
          Hey visitor! Thank you for visiting. When I’m not drawing, 
          I’m an introvert who enjoys playing with my cat <a href="https://www.instagram.com/hellokiwwi/">Kiwwi</a>.
          I love milktea, my favorite color is aquamarine and I like chilling at coffee shops with my friends.
          <br /><br />
          Realistic art and cartoons are my favorite styles. My main materials are graphite, sketchpad and vellum.
          I'm also adept at using Photoshop and Krita for my digital artworks.
          I’ve been accepting commissioned artworks since 2016 up until today.
          <br />
          <br />
          Interested in my art? Feel free to reach me out for commissions.
          </p>
          <ul className="actions">
            <li>
              <a href="mailto:jetvese08@gmail.com" target="_blank" className="button">
                Leave me a message
              </a>
            </li>
          </ul>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

          <ul className="actions">
            <li>
              <a href="https://www.instagram.com/periwinkle.o8/" target="_blank" className="button">
                Full Portfolio
              </a>
            </li>
          </ul>
        </section>

        
      </div>
    </Layout>
  )
}

export default HomeIndex
