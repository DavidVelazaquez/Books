import React from "react";

import "./pages-styles/landingPage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section className="home__hero">
          <article className="home__books"></article>
          <article className="home__details p-m">
            <h1 className="home__details-title">Find Books</h1>
            <p className="home__details-paragraph">
              This website was created for those who do not have access to
              books. Here, you can learn and you will be able to:
            </p>
            <ul className="home__details-list list__style-none">
              <li>Find a book</li>
              <li>Read a book</li>
              <li>Share a book</li>
              <li>Publish your own books</li>
            </ul>
          </article>
        </section>
      </React.Fragment>
    );
  }
}

export default LandingPage;
