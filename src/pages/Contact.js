import React from 'react'
import '../style/Contact.css'

import { Container, Row, Col, Button } from 'react-bootstrap'


function Contact() {
  return (
    <div>
      <section className='contact-us'>
        <Container>
          <Row>
            <Col>
              <div class="contact-title">
                <h4>Contact Me</h4>
                <p>Get In Touch</p>
              </div>
              <div class="contact">
                <form name="submitToGoogleSheet">
                  <input type="text" name="NAME" placeholder="Name" required></input>
                  <input type="email" name="EMAIL" placeholder="Email" required></input>
                  <input type="text" name="SUBJECT" placeholder="Subject" required></input>
                  <textarea name="MESSAGE" placeholder="Message"></textarea>
                  <input type="submit" value="Send Message" class="submit" onclick="formFunction()"></input>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Contact