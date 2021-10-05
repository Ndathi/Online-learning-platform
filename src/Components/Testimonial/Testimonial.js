import React from 'react';
import parentsImg from './img/guardian.png'

const Testimonial = () => {
    return (
        <div className="container">
            <div className="row justify-content-around my-5">
                <h1 className="mb-5">Testimonial</h1>

                <div className="d-flex flex-lg-row flex-column justify-content-around">
                    <div className="col-lg-4 col-12 order-lg-1">
                        <h2 className="text-start">Parents give us exceptional respons</h2>
                    </div>
                    <div className="col-lg-6 col-12 order-lg-2">
                        <div className="card">
                            <div className="card-body">
                                <q className="card-text text-start">Ut convallis, sem sit amet interdum consectetuer, odio augualiquam leo, nec dapibus tortor nibh sed augue. Integer eu magna sit amet metus fermentum posuere. Morbi sit amet nulla sed dolor elementum imperdiet. Quisque fermentum.</q>
                                <div className="row align-items-center justify-content-center mt-4">
                                    <div className="col-3">
                                        <img src={parentsImg} className="card-img-bottom w-75" alt="..." />
                                    </div>
                                    <div className="col-9">
                                        <h3 className="text-start">Susanne Kaufman</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;