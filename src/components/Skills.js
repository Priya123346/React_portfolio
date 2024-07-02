import { Container } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import python from '../assets/img/python.jpeg';
import java from '../assets/img/java.png';
import web from '../assets/img/web.png';
import sql from '../assets/img/sql.png';
import react from '../assets/img/react.png';
import mongo from '../assets/img/mongo.png';
import latex from '../assets/img/latex.png';
import github from '../assets/img/github.jpeg';
import { Row,Col } from "react-bootstrap";
import django from '../assets/img/django.png';
export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill' id='skills' style={{marginTop:'100px'}}>
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>Skills</h2>
                        <p>I'm proficient in these skills</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={python} alt="python img"/>
                                <h5>Python</h5>
                            </div>
                            <div className='item'>
                                <img src={java} alt="java image"/>
                                <h5>Java</h5>
                            </div>
                            <div className='item'>
                                <img src={web} alt="web image"/>
                                <h5>Web Dev</h5>
                            </div>
                            <div className='item'>
                                <img src={react} alt="react image"/>
                                <h5>React</h5>
                            </div>
                            <div className='item'>
                                <img src={django} alt="django image"/>
                                <h5>Django</h5>
                            </div>
                            <div className='item'>
                                <img src={sql} alt="sql image"/>
                                <h5>SQL</h5>
                            </div>
                            <div className='item'>
                                <img src={mongo} alt="mongodb image"/>
                                <h5>MongoDB</h5>
                            </div>
                            <div className='item'>
                                <img src={latex} alt="latex image"/>
                                <h5>Latex</h5>
                            </div>
                            <div className='item'>
                                <img src={github} alt="github image"/>
                                <h5>GitHub</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}