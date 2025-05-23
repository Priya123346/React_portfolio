import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from 'emailjs-com';

// import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/mail.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs.send('service_k1k4cd5', 'template_g9opdrk', formDetails, 'AjRBv5Hhpsh1mHxvg')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setButtonText("Send");
        setFormDetails(formInitialDetails);
        setStatus({ success: true, message: 'Message sent successfully' });
      }, (error) => {
        console.log('FAILED...', error);
        setButtonText("Send");
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      });
  };

  return (
    <section className="contact" id="connect" style={{marginTop:'110px'}}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "primary"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            {/* <Col size={12} sm={6}>
              <img src={logo} alt="Logo" />
            </Col> */}
            {/* <Col size={12} sm={6} className="text-center text-sm-end"> */}
              <div className="social-icon p-4">
                <a href="https://www.linkedin.com/in/priya-kotagiriwar/"><img src={navIcon1} alt="Icon" /></a>
                <a href="mailto:kotagiriwarpriya@gmail.com"><img src={navIcon2} alt="Icon" /></a>
                <a href="https://www.instagram.com/k_priya7773/"><img src={navIcon3} alt="Icon" /></a>
              </div>
              <p>Copyright 2022. All Rights Reserved</p>
            {/* </Col> */}
          </Row>
        </Container>
      </footer>
    )
  }
  export {Footer};