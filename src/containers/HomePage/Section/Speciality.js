import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section.scss';
import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from '../../../store/actions/appActions';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import acupuncture from '../../../assets/images/4_section_specialism/acupuncture.jpg';
import cardio from '../../../assets/images/4_section_specialism/cardio.jpg';
import children from '../../../assets/images/4_section_specialism/children.jpg';
import covid19 from '../../../assets/images/4_section_specialism/covid19.jpg';
import dentist from '../../../assets/images/4_section_specialism/dentist.jpg';
import dermatology from '../../../assets/images/4_section_specialism/dermatology.jpg';
import digest from '../../../assets/images/4_section_specialism/digest.jpg';
import eyes from '../../../assets/images/4_section_specialism/eyes.jpg';
import ent from '../../../assets/images/4_section_specialism/ent.jpg';
import gynecology from '../../../assets/images/4_section_specialism/gynecology.jpg';
import lung from '../../../assets/images/4_section_specialism/lung.jpg';
import musculoskeletal from '../../../assets/images/4_section_specialism/musculoskeletal.jpg';
import neurosciences from '../../../assets/images/4_section_specialism/neurosciences.jpg';
import psychology from '../../../assets/images/4_section_specialism/psychology.jpg';
import tradition from '../../../assets/images/4_section_specialism/tradition.jpg';

class Speciality extends Component {

    changeLanguage = (language) => {
        this.props.toggleLanguage(language);
    }
    
    render() {
        let language = this.props.language;

        return (
            <React.Fragment>
                <section>
                    <div className='section section-speciality section-float container'>
                        <div className='section-header'>
                            <span className='col-xl-10 col-lg-10 col-md-9 col-sm-9 col-8 headline'><b><FormattedMessage id="specialities.headline"/></b></span>
                            <a href='' className='col-xl-2 col-lg-2 col-md-3 col-sm-3 col-3 explore'><b><FormattedMessage id="specialities.explore"/></b></a>
                        </div>
                        <div className='carousel row'>
                            <Slider {...this.props.settings}>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ acupuncture } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.acupuncture"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ cardio } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.cardio"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ children } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.children"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ covid19 } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.covid19"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ dentist } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.dentist"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ dermatology } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.dermatology"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ digest } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.digest"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ eyes } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.eyes"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ ent } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.ent"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ gynecology } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.gynecology"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ lung } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.lung"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ musculoskeletal } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.musculoskeletal"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ neurosciences } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.neurosciences"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ psychology } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.psychology"/></b></span>
                                    </a>
                                        
                                </div>
                                <div className='slide'>
                                    <a className='slider-link' href=''>
                                        <div className='slider'>
                                            <img className='img col' src={ tradition } />
                                        </div>
                                        <span className='slider-title'><b><FormattedMessage id="specialities.tradition"/></b></span>
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

export default connect(mapStateToProps, mapDispatchToProps)(Speciality);
