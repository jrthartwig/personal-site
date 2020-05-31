import React from 'react';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './projectsCTA.css';

const ProjectsCTA = () => {
    return (
        <div className="wrapper">
            <Button className="button" variant="outline-info">Projects</Button>{' '}
        </div>
    )
}

export default ProjectsCTA;