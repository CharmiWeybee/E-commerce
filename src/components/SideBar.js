import React from 'react'

export const SideBar = (props) => {
    return (
<div className="col-lg-3 d-none d-lg-block">
    <p className="btn shadow-none d-flex align-items-center justify-content-between bg-light text-white w-100 sidebar-comp" data-toggle="collapse" >
        <h6 className="m-0">Categories</h6>
        <i className="fa fa-angle-down text-dark"></i>
    </p>
    <nav className="collapse show navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0" id="navbar-vertical">
        <div className="navbar-nav w-100 overflow-hidden sidebar-nav" >
            <div className="nav-item dropdown">
                <p className="nav-link" data-toggle="dropdown">Men <i className="fa fa-angle-down float-right mt-1"></i></p>
                {/* <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                    <p className="dropdown-item">Men's Dresses</p>
                    <p className="dropdown-item">Women's Dresses</p>
                    <p className="dropdown-item">Baby's Dresses</p>
                </div> */}
            </div>
            <p className="nav-item nav-link">Women</p>
            <p className="nav-item nav-link">Engagement</p>
            <p className="nav-item nav-link">Wedding</p>
            <p className="nav-item nav-link">Gift</p>
        </div>
    </nav>
        </div>
    )
}
