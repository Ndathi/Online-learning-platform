import React from 'react';
import './Footer.css'
import logo from './img/logo.png'

const Footer = () => {
    return (
        <div className="footer">
            <div className="bg-light mt-5 py-5 text-center">
                <div className="container d-flex flex-wrap text-start">
                    <div className="col-lg-3 col-6 text-lg-center text-start">
                        <img src={logo} alt="" />
                        <h3 className="mt-2">Educative</h3>
                    </div>
                    <div className="col-lg-3 col-6">
                        <h5>Explore</h5>
                        <ul>
                            <li>About us</li>
                            <li>Success Story</li>
                            <li>Careers</li>
                            <li>Resource Center</li>
                            <li>Courses</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6">
                        <h5>Categories</h5>
                        <ul>
                            <li>All Courses</li>
                            <li>Digital Marketing</li>
                            <li>Design and Marketing</li>
                            <li>Veterans</li>
                            <li>Courses</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-6">
                        <h5>Support</h5>
                        <ul>
                            <li>Help Center</li>
                            <li>System Requirements</li>
                            <li>Register Activation Key</li>
                            <li>Site Feedback</li>
                            <li>Forumes</li>
                        </ul>
                    </div>
                </div>
                <p>Copyright@2021 Educative. All Rights Reserved. Create by Saptapan Barua</p>
            </div>
        </div>
    );
};

export default Footer;