import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to reach out. Let's connect and grow our network!  
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget" style={{ textAlign: 'center', marginRight: "0" }}>
              <h4>KipBradleyTunes@gmail.com</h4>
              <h4>423.667.3911</h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}