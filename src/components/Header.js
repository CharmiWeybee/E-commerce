import React from 'react'
import { Link } from 'react-router-dom'


export const Header = (props) => {
    return (
        <>
            <div className='header d-flex'>
                <div className='nav-left d-flex'>
                    <div className='nav-logo'>
                        logo
                    </div>
                    <div className='nav-search'>
                        search
                    </div>
                    <div className='nav-right'>
                        <Link to="/cart" className='cart-link'> <span className='cart-option'>Cart{' '}{props.countCartItems ? (<button type='button' className="btn btn-success" id="count-badge"><small>{props.countCartItems}</small></button>) : ('')}</span> {' '}</Link>
                    </div>

                </div>
            </div>
        </>
    )
}
