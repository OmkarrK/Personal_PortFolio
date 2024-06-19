import React from 'react'
import '../style/Education.css'

import { Container, Row, Col, Button } from 'react-bootstrap'


function Education() {
  return (
    <div>
      <section className='edu'>
        <Container>
          <Row className='py-4'>
            <Col md={6}>
              <div className="education">
                <h3 className="edu-title">Education</h3>
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline">

                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-title">
                          B.E - 8.12(CGPA)
                        </h3>
                        <h4 className="timeline-title">Sharadchandra Pawar College Of Engineering and Technology Someshwarnagar
                        </h4>
                        <h4 className="timeline-title">
                          <i className="fa fa-calendar"></i> 2019-2023
                        </h4>
                      </div>

                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-title">HSC-60.00%</h3>
                        <h4 className="timeline-title">Disha Public School and Jr College Wai.
                        </h4>
                        <h4 className="timeline-title">
                          <i className="fa fa-calendar"></i> 2018-2019
                        </h4>
                      </div>

                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-title">SSC-80.20%</h3>
                        <h4 className="timeline-title">Kamalabai Joshi Kenjal Vidhyalaya Kenjal.
                        </h4>
                        <h4 className="timeline-title">
                          <i className="fa fa-calendar"></i> 2016-2017
                        </h4>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="internship">
                <h3 className="int-title">Internship</h3>
                <div className="row">
                  <div className="timeline-box">
                    <div className="timeline">

                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-title">WEB DEVELOPMENT
                        </h3>
                        <h4 className="timeline-title">Let's Grow More</h4>
                        <h4 className="timeline-title">
                          <i className="fa fa-calendar"></i> 02/2022 - 03/2022
                        </h4>
                        <li className="timeline-text" style={{fontFamily:'sans-serif'}}> In this internship I was completed the task given by this organization.
                        </li>
                      </div>

                      <div className="timeline-item">
                        <div className="circle-dot"></div>
                        <h3 className="timeline-title">WEB DEVELOPMENT</h3>
                        <h4 className="timeline-title">Demo College Website</h4>
                        <h4 className="timeline-title">
                          <i className="fa fa-calendar"></i> 03/2022 - 04/2022
                        </h4>
                        <li className="timeline-text" style={{fontFamily:'sans-serif'}}> In this internship I was developed the Demo College Website for this organization.
                        </li>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Education