import React, { Component } from 'react';
import kb1 from '../images/bottle-nose.png'
import kb2 from '../images/reading-list.png'
import kb3 from '../images/hoosier-pic-one.png'

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <div>


        <section id="portfolio">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>
              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {
                  resumeData.portfolio && resumeData.portfolio.map((item) => {
                    return (
                      <ul>


                        <a href="#modal-01">
                          <img src={kb1} alt="logo" style={{ height: 200, width: 350, marginLeft: 300, paddingRight: 50 }}></img>

                          {/* <img src={`${item.imgurl}`} className="item-img" /> */}
                          <div className="portfolio-item-meta">
                            <h5>{item.name}</h5>
                            <p>{item.description}</p>
                          </div>
                        </a>

                      </ul>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </section >
      </div >
    );
  }
}