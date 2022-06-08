import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeFooter.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant'

import google_play from '../../assets/images/2_banner/google_play.svg'
import app_store from '../../assets/images/2_banner/app_store.svg'
import logo from '../../assets/images/1_header/logo.svg'
import qrcode from '../../assets/images/10_footer/qrcode.png'

import { changeLanguageApp } from '../../store/actions/appActions';

class HomeFooter extends Component {

    changeLanguage = (language) => {
        this.props.toggleLanguage(language);
    }

    
    render() {
        let language = this.props.language;
 
        return (
            <React.Fragment>
                <footer className='footer'>
                    <div className='home-footer-container text-light-white '>
                        <div className='home-footer-content container'>
                            <div className='footer-upper row'>
                                <div className='col-footer about col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3'>
                                    <span className='title'><FormattedMessage id="footerabout.aboutus" /></span>
                                    <ul>
                                        <li className='item'>
                                            <a href='' className='item-link'><FormattedMessage id="footerabout.mysystem" /></a>
                                        </li>
                                        <li className='item'>
                                            <a href='' className='item-link'><FormattedMessage id="footerabout.ourdoctor" /></a>
                                        </li>
                                        <li className='item'>
                                            <a href='' className='item-link'><FormattedMessage id="footerabout.cooperate" /></a>
                                        </li>
                                        <li className='item'>
                                            <a href='' className='item-link'><FormattedMessage id="footerabout.recruitment" /></a>
                                        </li>
                                        <li className='item'>
                                            <a href='' className='item-link'><FormattedMessage id="footerabout.news" /></a>
                                        </li>
                                        <li className='item'>
                                            <a href='' className='item-link'><FormattedMessage id="footerabout.policy" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-footer service col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3'>
                                    <span className='title'><FormattedMessage id="footerservice.myservice"/></span>
                                    <ul>
                                        <li className='item'>
                                            <a href='' className='item-link'><FormattedMessage id="footerservice.make" /></a>
                                        </li>
                                        <li className='item'>
                                            <a href='' className='item-link'><FormattedMessage id="footerservice.package" /></a>
                                        </li>
                                        <li className='item'>
                                            <a href='' className='item-link'><FormattedMessage id="footerservice.customer" /></a>
                                        </li>
                                        <li className='item'>
                                            <a href='' className='item-link'><FormattedMessage id="footerservice.resolve" /></a>
                                        </li>
                                        <li className='item'>
                                            <a href='' className='item-link'><FormattedMessage id="footerservice.how" /></a>
                                        </li>
                                        <li className='item'>
                                            <a href='' className='item-link'><FormattedMessage id="footerservice.faq" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-footer contact col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3'>
                                    <ul>
                                        <li className='item'>
                                            <img className='img' src={ logo } /></li>
                                        <li className='item'><FormattedMessage id="footercontact.name" /></li>
                                        <li className='item'>
                                            <i className="fas fa-map-marker-alt"></i>
                                            <FormattedMessage id="footercontact.address" /></li>
                                        <li className='item'>
                                            <i className="fas fa-mobile-alt"></i>
                                            <FormattedMessage id="footercontact.tel" />+84(0) 367 582 193</li>
                                        <li className='item'><FormattedMessage id="footercontact.support" />
                                            kt.itengineer@gmail.com</li>
                                        <li className='item'>
                                            <a href=''><FormattedMessage id="footercontact.signup" /></a>{' '}|{' '}
                                            <a href=''><FormattedMessage id="footercontact.login" /></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-footer download col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3'>
                                    <div className='qrcode'>
                                        <img className='img' src={ qrcode } />
                                    </div>
                                    <div className='app-store'>
                                        <img className='img' src={ google_play } />
                                        <img className='img' src={ app_store } />
                                    </div>
                                </div>
                            </div>
                            <div className='footer-bottom row'>
                                <span className='copyright col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4'>
                                    &copy; 2022 Copyright.
                                    <br />
                                    kt.itengineer@gmail.com
                                </span>
                                <span className='non-commercial col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4'>
                                    This is a demo website to demonstrate my abilities.
                                    <br /> Not for commercial purpose.</span>
                                <div className='social-media col-xl-4 col-lg-4 col-md-4 col-sm-4 col-4'>
                                    <a><i className="fab fa-facebook"></i></a>
                                    <a><i className="fab fa-youtube"></i></a>
                                    <a><i className="fab fa-github"></i></a>
                                    <a><i className="fab fa-linkedin"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }

}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleLanguage: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
