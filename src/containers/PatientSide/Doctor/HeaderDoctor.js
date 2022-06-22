import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DetailDoctor.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../../utils/constant'

import { changeLanguageApp } from '../../../store/actions/appActions';

class HeaderDoctor extends Component {

    changeLanguage = (language) => {
        this.props.toggleLanguage(language);
    }

    
    render() {
        let language = this.props.language;
 
        return (
            <React.Fragment>
                <header className='header'>
                    <div className='home-header-container text-light-white '>
                        <div className='home-header-content container row '>
                            <div className='left-doctor-content col-xl-2 col-lg-3 col-md-3 col-sm-3 col-2'>
                                <i className="fas fa-backward"></i>
                                <div className='header-logo-logo'>
                                    <img className='header-logo-img' src=''></img>
                                </div>
                                <div className='header-logo-text'>
                                    <img className='header-text-img' src=''></img>
                                </div>
                            </div>
                            <div className='center-doctor-content col-xl-8 col-lg-7 col-md-6 col-sm-5 col-2'>
                                <span className='headline-header'>Phos Giiáo sư, Tiến Sĩ, Bác Sĩ Trần Văn A</span>
                            </div>
                            <div className='right-doctor-content col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6'>
                                <div className='help'><i className="fas fa-question-circle"></i><FormattedMessage id="homeheader.help"/></div>

                                <div className='dark-mode'>
                                    <button className='btn' data-bs-toggle="tooltip" data-bs-placement="bottom" title="Dark/Light Mode">
                                        <i className="fas fa-adjust dark-mode-icon active"></i>
                                    </button>
                                </div>

                                <div className='languages'>
                                    <div className='language'>
                                        <button className={
                                            language === LANGUAGES.VI ? 'btn lang-logo-vi active' : 'btn lang-logo-vi'
                                        }
                                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Kích để chuyển sang Tiếng Việt"
                                            onClick={() => this.changeLanguage(LANGUAGES.VI)}>
                                        </button>
                                    </div>
                                    <div className='language'>
                                        <button className={
                                            language === LANGUAGES.EN ? 'btn lang-logo-en active' : 'btn lang-logo-en'
                                        }
                                            data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click here to switch English"
                                            onClick={() => this.changeLanguage(LANGUAGES.EN)}>
                                        </button>
                                    </div>
                                </div>

                                <i className="fas fa-bars"></i>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    
                </main>
            </React.Fragment>
        );
    }

}


const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        userInfo: state.user.userInfo,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleLanguage: (language) => dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderDoctor);
