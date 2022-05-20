import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
        }
    }

    handleOnChangeUsername = (e) => {
        this.setState({
            username: e.target.value,
        })
    }

    handleOnChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        })
    }
    handleLogin = () => {
        console.log(`username ${this.state.username}`)
        console.log(`password ${this.state.password}`)
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword,
        })
    }
    render() {
        return (
            <div>
                <div className='login-bg'>
                    <div className='login-container'>
                        <div className='login-content'>
                            <div className="col-12 mt-3 text-center text-title"><b>Login</b>
                            </div>
                            <div className="form-group mt-4 col-12">
                                <label for="inputName">Username</label>
                                <input type="text" className="form-control " name="userName" placeholder="Enter your username" 
                                    value={this.state.username}
                                    onChange={(e) => this.handleOnChangeUsername(e)}
                                />
                            </div>
                            <div className="form-group mt-4 col-12">
                                <label for="inputPassword">Password</label>
                                <div className='input-password'>
                                    <input type={this.state.isShowPassword ? 'text' : 'password'} className="form-control " placeholder="Enter your password" 
                                        onChange={(e) => this.handleOnChangePassword(e)}
                                    />
                                    <span onClick={() => {this.handleShowHidePassword()}}>
                                        <i className={ this.state.isShowPassword ? 'far fa-eye eye-password' : 'far fa-eye-slash eye-password'}></i>
                                    </span>
                                </div>
                            </div>
                            <div className='mt-3 mb-3 text-center'>
                                <button type="submit" className="btn btn-primary btn-login"
                                    onClick={() => {this.handleLogin()}}
                                >Login</button>
                            </div>
                            <div className='col-12'>
                                <a href='#'>Forgot your Password?</a>
                            </div>
                            <div className='col-12 text-center mt-3'>
                                <span>Or Login with</span>
                            </div>
                            <div className='col-12 social-login d-flex mt-3'>
                                <i class="fab fa-google-plus-g gg"></i>
                                <i class="fab fa-facebook-f fb"></i>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
