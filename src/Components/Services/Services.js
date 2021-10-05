import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/DruboSaptapan/project-json/main/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        /* sevices for sevices nav link start */
        <div className="my-5">
            <h2 className="mb-4">Our services</h2>
            <div className="container">
                <div className="services">
                    {
                        services.map(service => <Service service={service} key={service._id}></Service>)
                    }
                </div>
            </div>
        </div>
        /* sevices for sevices nav link end */
    );
};

export default Services;