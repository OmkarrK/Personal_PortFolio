import React from 'react'
import '../style/Home.css'

import { Container, Row, Col, Button } from 'react-bootstrap'
// import profile from '../images/profilee.jpg'
import profile from '../images/omkar.jpg'
import resume from '../files/Avi_Resume.pdf'

import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Home() {
  return (
    <div className='body'>

      <section className='home'>
        <Container>
          <Row className="py-4">
            <Col md={6}>
              <img src={profile} className='profile'></img>
            </Col>

            <Col md={6}>
              <Row className='abouttext'>
                <h5>Hi I'm</h5>
              </Row>
              <Row className='aboutname'>
                <h1>Omkar Kumbhar</h1>
              </Row>
              <Row className='aboutdesc'>
                <p style={{fontFamily:'sans-serif'}}>Welcome to my portfolio website! I am fresher in the field of computer science and aspiring to work in computer science field
                  where I can utilize my personal and technical capabilities for the growth of the oraganization.
                </p>
              </Row>
              <Row>
                <Col md={6}>
                  <a href={resume} className='cvbtn'>Download CV</a>
                </Col>
                <Col md={6}>
                  <a href="mailto:omkarkumbhar5006@gmail.com" className='contactbtn'>Contact</a>
                </Col>
              </Row>
              <Row>
                <ul className='icons'>
                  <a href="mailto:omkarkumbhar5006@gmail.com"><MailIcon></MailIcon></a>
                  <a href="https://github.com/OmkarrK"><GitHubIcon></GitHubIcon></a>
                  <a href='#'><CodeIcon></CodeIcon></a>
                  <a href="https://www.linkedin.com/in/omkar-kumbhar-bb574a22a/"><LinkedInIcon></LinkedInIcon></a>
                </ul>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

    </div>
  )
}

export default Home