import React, { useState } from 'react'
import { connect, useSelector } from 'react-redux';
import { login } from '../actions/authAction';
import { Link, useNavigate } from 'react-router-dom'

function Login({ login }) {
    // const nav = useNavigate();
 
    const [value, setValue] = useState({
        email: "",
        password: "",
    });

    const handleLoginSubmit = () => {
        login(value)
        console.log(value)
        // if (value === login.data){
        //     nav("/Home");
        // }
      
    }

    const errorMessage = useSelector(state => state.authMessage.message);    
    return (
        <>
            <div>
                <div className='main-card mt-5 ml-10'>
                    <h2>Login Form</h2>
                    <h6><span>{errorMessage}</span></h6>
                    <div className='card-body'>
                        <div className="form-group row mt-2">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder='Enter Email' value={value.email} onChange={(e) => { setValue({ ...value, email: e.target.value }); }} />
                            </div>
                        
                        </div>
                        <div className="form-group row mt-2">
                            <label className="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" placeholder="Enter Password" value={value.password} onChange={(e) => { setValue({ ...value, password: e.target.value }); }} />
                            </div>
    
                        </div>
                    </div>
                    <div className='card-footer'>
                        <button className='btn btn-primary' type="submit" onClick={handleLoginSubmit}>Login</button>
                        <p className='mt-3'>Don't have an account? 
                            <Link to="/Register"> <span > Register here{' '}</span> {' '}</Link>
                        </p>
                    </div>
                </div>
            </div>


           
        </>
    )
}

    const mapStateToProps = state =>{
        return{
            submitLoginForm: state.auth.login
        }
    }

    const mapDispatchToProps =(dispatch)=>{
        return {
            login:(data)=> dispatch(login(data)),
            error:(error)=> dispatch(login(error))
           
        }
    }
  
export default connect(mapStateToProps, mapDispatchToProps)(Login)




