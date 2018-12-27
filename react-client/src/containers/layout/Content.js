import React, { Component } from 'react'
import ContentRouter from '../routing/ContentRouter';

export default class Content extends Component {
  render() {
    return (
      <section className="content">
        <div className="content__inner">
        
            <ContentRouter />

          <footer className="footer hidden-xs-down">
            <p>© LA Pathways. All rights reserved.</p>

            <ul className="nav footer__nav">
              <a className="nav-link" href="">Homepage</a>

              <a className="nav-link" href="">Company</a>

              <a className="nav-link" href="">Support</a>

              <a className="nav-link" href="">News</a>

              <a className="nav-link" href="">Contacts</a>
            </ul>
          </footer>
        </div>
      </section>

    )
  }
}