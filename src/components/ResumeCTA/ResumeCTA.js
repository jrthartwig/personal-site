import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResumeCTA.css';


const ResumeCTA = () => {

    return (
        <div className="resume-wrapper">
           <Button className="resume-button"  variant="outline-info">Resume</Button>{' '}
        </div>
    )
}

export default ResumeCTA;