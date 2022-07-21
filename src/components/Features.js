import React from 'react'
import { faCheck, faShippingFast, faExchangeAlt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Features = () => {
    return (

            <div className="container-fluid pt-5">
                <div className="row px-xl-5 pb-3">
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                        <div className="d-flex align-items-center border mb-4 feature-cards" >
                                    <h1 className='text-primary' id="card-icon"><FontAwesomeIcon icon={faCheck} /></h1>
                            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center border mb-4 feature-cards" >
                        <h1 className='text-primary' id="card-icon"><FontAwesomeIcon icon={faShippingFast} /></h1>
                            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center border mb-4 feature-cards" >
                        <h1 className='text-primary' id="card-icon"><FontAwesomeIcon icon={faExchangeAlt} /></h1>
                            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                                <div className="d-flex align-items-center border mb-4 feature-cards" >
                        <h1 className='text-primary' id="card-icon"><FontAwesomeIcon icon={faPhoneVolume} /></h1>
                            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
                        </div>
                    </div>
                </div>
            </div>

    )
}