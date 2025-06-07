import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,github,demo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt='url given' />
        <div className="proj-txtx">
          <h5>{title}</h5>
          <span>{description}</span><br/>
          <a href={github} style={{ color: 'white', }}>Github link</a><br/>
          {demo && (
            <a
              href={demo}
              style={{ color: 'white',  }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </Col>
  )
}