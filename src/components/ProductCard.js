import React from 'react'
import { Link } from 'react-router-dom'

export const ProductCard = (props) => {
    return (


<div className="col-lg-9">
    <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
        <p className="text-decoration-none d-block d-lg-none">
            <h1 className="m-0 display-5 font-weight-semi-bold"><span className="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
        </p>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav mr-auto py-0">

                <p className="nav-item nav-link active">Home</p>
                        <Link to="/Products"><p className="nav-item nav-link">Shop</p> {' '}</Link>
            
               
                <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <div className="navbar-nav ml-auto py-0">
                {/* <p className="nav-item nav-link">Login</p> */}
                {/* <p className="nav-item nav-link">Register</p> */}
                <Link to="/"> <p className="nav-item nav-link"> Login{' '}</p> {' '}</Link>
                <Link to="/Register"> <p className="nav-item nav-link"> Register{' '}</p> {' '}</Link>
            </div>
        </div> 
    </nav>
    {/* <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" >
                        <img id="bg-img" className="img-fluid" src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8amV3ZWxyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3">
                            <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                            <h3 className="display-4 text-white font-weight-semi-bold mb-4">Fashionable Dress</h3>
                            <p className="btn btn-light py-2 px-3">Shop Now</p>
                        </div>
                    </div>
            </div>
            <div className="carousel-item home-item" >
                <img className="img-fluid" src="img/carousel-2.jpg" alt="product" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" >
                            <h4 className="text-light text-uppercase font-weight-medium mb-3">10% Off Your First Order</h4>
                            <h3 className="display-4 text-white font-weight-semi-bold mb-4">Reasonable Price</h3>
                            <p className="btn btn-light py-2 px-3">Shop Now</p>
                        </div>
                    </div>
            </div>
        </div>
        <a className="carousel-control-prev" href="#header-carousel" data-slide="prev">
            <div className="btn btn-dark button-on-card">
                <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
        </a>
        <a className="carousel-control-next" href="#header-carousel" data-slide="next">
            <div className="btn btn-dark button-on-card">
                <span className="carousel-control-next-icon mb-n2"></span>
            </div>
        </a>
    </div> */}
    </div>

    )
}