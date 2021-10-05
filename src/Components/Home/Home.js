import React, { useEffect, useState } from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css'

const Home = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/DruboSaptapan/project-json/main/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className="hero-image">
                <div className="hero-text mx-auto">
                    <h3><q>Education is the most powerful weapon by which you can change the world.</q>
                        <small> -Nelson Mendela</small></h3>
                </div>
            </div>

            {/* services of home start */}
            <div className="container my-5">
                <h2 className="mb-4">Our Services</h2>
                <div className="home-services">
                    {
                        services.slice(0, 4).map(service =>
                            <div className="card" key={service._id}>
                                <img src={service.icon} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{service.title}</h5>
                                    <p className="card-text">{service.description}</p>
                                    <button className="btn btn-success">Learn more</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            {/* services of home end */}
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;