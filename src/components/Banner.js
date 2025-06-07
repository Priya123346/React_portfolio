import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";

export const Banner=()=>{
    const [loopNum,setLoopNum]=useState(0);
    const [isDeleting,setIsDeleting]=useState(false);
    const toRotate=["Passionate Learner","Web Developer","Python Developer"];
    const [delta,setDelta]=useState(300-Math.random()*100);
    const [text,setText]=useState('');
    const period=1000;

    const tick=()=>{
        let i=loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
        setText(updatedText);
        if(isDeleting){
            // setDelta(prevDelta=>prevDelta/2);
        }
        if(!isDeleting && updatedText===fullText){
            setIsDeleting(true);
            // setDelta(period);
        }
        else if (isDeleting && updatedText===''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(300);
        }
    }
    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
        
        return () => {
          clearInterval(ticker);
        };
      }, [delta, tick, text]);
      

        

   return (
    <section className="banner" id='home'>
        <Container>
        <Row>
        <Col xs={12} md={6} xl={7}>
        <span className="tagline">Welcome to my Portfolio website</span>
        <h1>{"I'm Priya Kotagiriwar, a "}
            <span className="wrap">{text}</span></h1>
        {/* <button className="vvd"><Link to='/connect' ><span>Let’s Connect</span><ArrowRightCircle size={25}/></Link></button> */}

        </Col>    
        <Col xs={12} md={6} xl={5}>
        <img src={headerImg} alt="Header description"/>
        </Col>
        </Row>   
        </Container>
    </section>
   ) 
}
