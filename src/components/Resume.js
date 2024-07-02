import React from 'react';
import resume_priya from '../assets/priya_resume.pdf';
export default function Resume(){
    return (
        <iframe src={resume_priya} className='resume' 
        width="60%"
        height="600px"
        title="PDF Viewer" 
        allowFullScreen
        allow="autoplay"
        style={{margin:'10px',marginTop:'110px'}}></iframe>
    );
}