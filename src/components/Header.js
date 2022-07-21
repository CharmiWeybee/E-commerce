import React from 'react'
// import { Link } from 'react-router-dom'
import { faSearch, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export const Header = (props) => {
    return (
        <>
        <div className="container-fluid">
            <div className="row align-items-center py-3 px-xl-5">
                <div className="col-lg-3 d-none d-lg-block">
                    <p  className="text-decoration-none">
                        <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </p>
                </div>
                <div className="col-lg-6 col-6 text-left">
                    <form action="">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for products" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-transparent text-primary">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </span>
                                </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3 col-6 text-right">
                    <p  className="btn border">
                            <FontAwesomeIcon icon={faHeart} />
                        <span className="badge">0</span>
                    </p>
                    <p  className="btn border">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        <span className="badge">0</span>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
