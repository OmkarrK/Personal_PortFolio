import React from 'react'
import '../style/Projects.css'

import { Container, Row, Col} from 'react-bootstrap'

import TourIcon from '@mui/icons-material/Tour';
import CakeIcon from '@mui/icons-material/Cake';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';


function Projects() {
  return (
    <div>
      <section className='proj'>
        <Container>
          <Row>
            <Col>
              <div className="project-title">
                <h4>My Projects</h4>
                <p style={{fontFamily:'revert'}}>Discover my projects, where creativity meets innovation</p>
              </div>
              <div className="projects">

                <div className="project">
                  <a href='https://github.com/Avishkar1729/TourGuideApp-master'><TourIcon className='pr-icon'></TourIcon>
                    <h4>Tour Guide App</h4>
                    <p style={{fontFamily:'sans-serif'}}>It is a informative application built with a user-friendly
                      interface that gives information about tourist places, the
                      location of particular places, nearby recommendations
                      such as hotels, and helpline numbers. It developed
                      using the latest programming languages and
                      frameworks, such as Java and Android Studio.</p>
                  </a>
                </div>

                <div className="project">
                  <a href='https://cakeshop-wpnz.onrender.com/'><CakeIcon className='pr-icon'></CakeIcon>
                    <h4>Cakeshop</h4>
                    <p style={{fontFamily:'sans-serif'}}>Cake Shop website is built with the latest web
                      development technologies, including HTML, CSS, and
                      JavaScript. The website contains authentication for
                      security and offers an online ordering process.</p>
                  </a>
                </div>

                <div className="project">
                  <a href='https://portfolio-6fmx.onrender.com/'><PersonOutlineIcon className='pr-icon'></PersonOutlineIcon>
                    <h4>Portfolio Website</h4>
                    <p style={{fontFamily:'sans-serif'}}>Created a portfolio website using HTML, CSS, and JavaScript, It serves as a platform to introduce
                      myself, share my projects, and provide information about my education and internship.</p>
                  </a>
                </div>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Projects