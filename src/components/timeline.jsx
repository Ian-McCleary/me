import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Undergraduate in Computer Science at Western Washington University <span> 2018-2022</span></h2>
                        <p>Completed my undergraduate studies where I recieved a B.S. in Computer Science, and a minor in Mathematics.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Artificial Intelligence in Solar Thermal Fuels Reseaerch <span> May 2021-Sept. 2021</span></h2>
                        <p>Implemented regression neural networks to predict energy differences in Azobenzene's stable and metastable state. Root‐Mean‐Square error of predictions was 0.09 ev, outperforming standard computing models such as
                          DFTB+. Implemented AI standards such as hyperparameter tuning, k‐fold cross validation, and performance loss curves.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Sales Representative at Paradise Creek Bicycles <span> May 2020-Sept. 2020</span></h2>
                        <p> Assisted customers in determining the correct bike for their riding style. Managed point of sales system. Performed same day bike tunes and minor repairs.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Summer IT Intern <span> June 2018-Sept. 2018</span></h2>
                        <p>Operated as part of the District’s IT team to maintain and upgrade information systems. Carried out individual and team projects such as replacing/re‐imaging computers and installing new CAT5 cable. 
                          Installed and maintained various network devices such as printers, projectors, and CCTV cameras.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Summer Software Engineering Intern (2 summers)<span> 2015-2016</span></h2>
                        <p>Assisted in creating a web application using AngularJS, CSS, and HTML. Utilized API Get requests to populate the application with example data. Implemented Twitter Bootstrap for consistent layout and design across all web pages.
                        Communicated with other teams using Slack in weekly update meetings.
                        </p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
