import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Section.scss';
import { FormattedMessage } from 'react-intl';
import { changeLanguageApp } from '../../../store/actions/appActions';
import * as action from '../../../store/actions'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { LANGUAGES } from '../../../utils';


class Doctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctors: [],
        }
    }
    changeLanguage = (language) => {
        this.props.toggleLanguage(language);
    }
    
    componentDidMount() {
        this.props.loadDoctor();
    
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.doctorRedux !== this.props.doctorRedux) {
            this.setState({
                arrDoctors: this.props.doctorRedux
            })
        }
    }
    render() {
        let language = this.props.language;
        let arrDoctors = this.state.arrDoctors;
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
                                {arrDoctors && arrDoctors.length > 0 && arrDoctors.map((item, index) => {
                                        let titleNameVi = `${item.titleData.valueVi} ${item.lastName} ${item.firstName}`;
                                        let titleNameEn = `${item.titleData.valueEn} ${item.firstName} ${item.lastName}`;
                                        let imgBase64 = '';
                                        if (item.image) {
                                            imgBase64 = new Buffer(item.image, 'base64').toString('binary');
                                        }
                                        return (
                                            <div className='slide' key={index}>
                                                <a className='slider-link' href=''>
                                                    <div className='slider'>
                                                        <img className='img col'
                                                            style={{ backgroundImage: `url(${imgBase64})` }}
                                                        />
                                                    </div>
                                                    <span className='doctor-title'>
                                                        <b>{language === LANGUAGES.VI ? titleNameVi : titleNameEn}</b>
                                                    </span>
                                                    <span className='doctor-subtitle'>

                                                    </span>
                                                </a>
                                            </div>
                                        )
                                    })
                                }
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
        doctorRedux: state.admin.doctors,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleLanguage: (language) => dispatch(changeLanguageApp(language)),
        loadDoctor: () => dispatch(action.fetchDoctor())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
