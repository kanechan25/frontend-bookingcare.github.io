import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section.scss';
import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from '../../../store/actions/appActions';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import themostreputationdentistry from '../../../assets/images/7_section_handbook/themostreputationdentistry.jpg';
import pregnancyhandbook from '../../../assets/images/7_section_handbook/pregnancyhandbook.jpg';


class Handbook extends Component {

    changeLanguage = (language) => {
        this.props.toggleLanguage(language);
    }
    
    render() {
        let language = this.props.language;

        return (
            <React.Fragment>
                <section>
                    <div className='section section-handbook section-sink container'>
                        <div className='section-header'>
                            <span className='headline'><b><FormattedMessage id="handbook.headline"/></b></span>
                            {/* <button className='btn explore'><FormattedMessage id="handbook.post"/></button> */}
                            <a href='' className='col explore'><b><FormattedMessage id="handbook.post"/></b></a>
                        </div>
                        <div className='carousel row'>
                            <Slider {...this.props.settings}>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ themostreputationdentistry } />
                                        </div>
                                        <span className='handbook-title'><b><FormattedMessage id="handbook.themostreputationdentistry"/></b></span>
                                    </a>  
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ pregnancyhandbook } />
                                        </div>
                                        <span className='handbook-title'><b><FormattedMessage id="handbook.pregnancyhandbook"/></b></span>
                                    </a>  
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ themostreputationdentistry } />
                                        </div>
                                        <span className='handbook-title'><b><FormattedMessage id="handbook.themostreputationdentistry"/></b></span>
                                    </a>  
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ pregnancyhandbook } />
                                        </div>
                                        <span className='handbook-title'><b><FormattedMessage id="handbook.pregnancyhandbook"/></b></span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
