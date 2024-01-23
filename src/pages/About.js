import React from 'react'
import '../style/About.css'

import { Container, Row, Col, Button } from 'react-bootstrap'


function About() {
  return (
    <div>
      <section className='about'>
        <Container>
          <Row className='py-4'>
            <Col md={6}>
              <div className="about-content">
                <h4>About Me</h4>
                <ul style={{fontFamily:'sans-serif'}}>
                  <li>I was completed my final year Bachelor's in Computer Engineering.I have built a solid
                    foundation in software development, particularly in areas such as Java, Web Development, SQL
                    and Git</li>
                  <li> My expertise in these areas allows me to approach projects with confidence and I was
                    delivered high-quality results.I have a strong belief in the value of continuous learning
                    and staying adaptable in the ever-evolving world of software engineering.</li>
                  <li> I actively seek out opportunities to expand my knowledge and skills, embracing new
                    technologies and approaches.Feel free to explore my work and get in touch if you have any
                    questions or opportunities to collaborate. </li>
                </ul>
              </div>
            </Col>

            <Col md={6}>
              <div className="about-skills">
                <ul sty>
                  <li>Name : Avishkar Shinde</li>
                  <li>Age : 22</li>
                  <li>From : India</li>
                  <li>Email : avishinde1729@gmail.com</li>
                  <li>Availabiltiy : Fulltime</li>
                  <li>Experience : Freshers</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default About