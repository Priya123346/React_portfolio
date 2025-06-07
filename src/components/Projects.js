import 'animate.css';
import { Col, Container, Row, Tab } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg6 from "../assets/img/credit.jpeg";
import projImg2 from "../assets/img/cust_seg.jpg";
import projImg5 from "../assets/img/file_compress.png";
import projImg1 from "../assets/img/portfolio.png";
import projImg3 from "../assets/img/temp.jpeg";
import projImg4 from "../assets/img/traffic.jpeg";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

  const projects = [
    {
      title: "React Portfolio",
      description: "Developed a personal React portfolio highlighting projects with clean UI and modern design.",
      imgUrl: projImg1,
      github: "https://github.com/Priya123346/React_portfolio",
      demo: "https://priya123346.github.io/React_portfolio/",
    },
    {
      title: "Clustering Analysis-Online Retail Casestudy",
      description: " focuses on customer segmentation using unsupervised learning techniques like K-Means and Gaussian Mixture Models on an Online Retail dataset. ",
      imgUrl: projImg2,
      github: "https://github.com/Priya123346/Clustering-Analysis_Online-Retail-Case-Study",
      // demo:''
    },
    {
      title: "Smart Traffic Management System",
      description: "developed using Python and Pygame, simulating an adaptive signal control mechanism.",
      imgUrl: projImg4,
      github: "https://github.com/Priya123346/Traffic_management_simulation",
    },
    {
      title: "FileEase",
      description: "a file compression tool built using Django and powered by the Huffman Coding Algorithm!",
      imgUrl: projImg5,
      github: "https://github.com/Priya123346/File_Compression",
      demo: "https://www.linkedin.com/posts/priya-kotagiriwar_django-python-filecompression-activity-7279157288022560768-zH7i?utm_source=share&utm_medium=member_desktop&rcm=ACoAAELGrPABaILn5NCOFaBI7Nfy28bWh9VYBQc",
    },
    {
      title: "Credit Card Fraud detection",
      description: "assists financial institutions and credit card companies in identifying potentially fraudulent activities in real-time",
      imgUrl: projImg6,
      github: "https://github.com/Priya123346/Credit_card_fraud_detection",
    },
    {
      title: "Temperature converter",
      description: "A website which converts temperature from celsius to fahrenheit and kelvin and vice-versa",
      imgUrl: projImg3,
      github: "https://github.com/Priya123346/Temperature_converter",
      demo: "https://priya123346.github.io/Temperature_converter/",
    },
  ];

  return (
    <section className="project" id="projects" style={{marginTop:'50px'}}>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here's a collection of my projects that demonstrate my skills and passion for creating dynamic, user-friendly applications. Each project highlights different aspects of my expertise, from front-end design and development to full-stack implementation. These projects not only represent my technical abilities but also my dedication to solving real-world problems through innovative solutions. Explore my work and see how I bring ideas to life with code!</p>
            
                <h3>Hover over them to know more about the project</h3>
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}