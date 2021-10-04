import React from 'react';
import './Service.css'

const Service = (props) => {
    const {icon, title, description} = props.service
    return (
        <div className="card">
            <img src={icon} className="card-img-top" alt=""/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <button className="btn btn-success">Learn more</button>
            </div>
        </div>
    );
};

export default Service;