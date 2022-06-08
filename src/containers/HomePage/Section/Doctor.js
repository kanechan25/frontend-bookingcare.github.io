import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section.scss';
import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from '../../../store/actions/appActions';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import bsck2_tranminhkhuyen from '../../../assets/images/6_section_doctor/bsck2_tranminhkhuyen.jpg';
import pgsts_nguyenvantoan from '../../../assets/images/6_section_doctor/pgsts_nguyenvantoan.jpg';


class Doctor extends Component {

    changeLanguage = (language) => {
        this.props.toggleLanguage(language);
    }
    
    render() {
        let language = this.props.language;

        return (
            <React.Fragment>
                <section>
                    <div className='section section-doctor section-float container'>
                        <div className='section-header'>
                            <span className='col-xl-10 col-lg-10 col-md-9 col-sm-9 col-8 headline'><b><FormattedMessage id="doctor.headline"/></b></span>
                            <a href='' className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3 explore'><b><FormattedMessage id="doctor.explore"/></b></a>
                        </div>
                        <div className='carousel row'>
                            <Slider {...this.props.settings}>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ bsck2_tranminhkhuyen } />
                                        </div>
                                        <span className='doctor-title'>
                                            <b><FormattedMessage id="doctor.bsck2_tranminhkhuyen1"/> {' '}
                                            <FormattedMessage id="doctor.bsck2_tranminhkhuyen"/></b>
                                        </span>
                                        <span className='doctor-subtitle'><FormattedMessage id="doctor.bsck2_tranminhkhuyen2"/></span>
                                    </a>
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ pgsts_nguyenvantoan } />
                                        </div>
                                        <span className='doctor-title'>
                                            <b><FormattedMessage id="doctor.pgsts_nguyenvantoan1"/> {' '}
                                            <FormattedMessage id="doctor.pgsts_nguyenvantoan"/></b>
                                        </span>
                                        <span className='doctor-subtitle'><FormattedMessage id="doctor.pgsts_nguyenvantoan2"/></span>
                                    </a>
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ bsck2_tranminhkhuyen } />
                                        </div>
                                        <span className='doctor-title'>
                                            <b><FormattedMessage id="doctor.bsck2_tranminhkhuyen1"/> {' '}
                                            <FormattedMessage id="doctor.bsck2_tranminhkhuyen"/></b>
                                        </span>
                                        <span className='doctor-subtitle'><FormattedMessage id="doctor.bsck2_tranminhkhuyen2"/></span>
                                    </a>
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ pgsts_nguyenvantoan } />
                                        </div>
                                        <span className='doctor-title'>
                                            <b><FormattedMessage id="doctor.pgsts_nguyenvantoan1"/> {' '}
                                            <FormattedMessage id="doctor.pgsts_nguyenvantoan"/></b>
                                        </span>
                                        <span className='doctor-subtitle'><FormattedMessage id="doctor.pgsts_nguyenvantoan2"/></span>
                                    </a>
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ bsck2_tranminhkhuyen } />
                                        </div>
                                        <span className='doctor-title'>
                                            <b><FormattedMessage id="doctor.bsck2_tranminhkhuyen1"/> {' '}
                                            <FormattedMessage id="doctor.bsck2_tranminhkhuyen"/></b>
                                        </span>
                                        <span className='doctor-subtitle'><FormattedMessage id="doctor.bsck2_tranminhkhuyen2"/></span>
                                    </a>
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ pgsts_nguyenvantoan } />
                                        </div>
                                        <span className='doctor-title'>
                                            <b><FormattedMessage id="doctor.pgsts_nguyenvantoan1"/> {' '}
                                            <FormattedMessage id="doctor.pgsts_nguyenvantoan"/></b>
                                        </span>
                                        <span className='doctor-subtitle'><FormattedMessage id="doctor.pgsts_nguyenvantoan2"/></span>
                                    </a>
                                </div>

                            </Slider>
                        </div>
                    </div>
                </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
