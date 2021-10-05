import React from 'react';

const ContactUs = () => {
    return (
        <div className="container-lg">
            <h2 className="mb-4">Contact Us</h2>
            <div className="row w-100 mx-auto">
                <div className="col">
                    <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                </div>
                <div>
                    <input type="mail" className="form-control mt-3" placeholder="Email Address" aria-label="Last name" />
                    <textarea class="mt-3 form-control" placeholder="Write your message here" id="floatingTextarea"></textarea>
                    <button className="btn btn-success px-5 mt-3 rounded-pill">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;