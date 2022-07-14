import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils/constant'

import { changeLanguageApp } from '../../store/actions/appActions';

class HomeHeader extends Component {


    changeLanguage = (language) => {
        this.props.toggleLanguage(language);
    }

    render() {
        let language = this.props.language;
        let logo_logo = 'https://raw.githubusercontent.com/kanechan25/frontend-bookingcare.github.io/main/src/assets/images/1_header/logo.svg'
        let logo_text = 'https://raw.githubusercontent.com/kanechan25/frontend-bookingcare.github.io/main/src/assets/images/1_header/logo_text.svg'
        let google_play = 'https://raw.githubusercontent.com/kanechan25/frontend-bookingcare.github.io/main/src/assets/images/2_banner/google_play.svg';
        let app_store = 'https://raw.githubusercontent.com/kanechan25/frontend-bookingcare.github.io/main/src/assets/images/2_banner/app_store.svg';

        let speciality = 'https://raw.githubusercontent.com/kanechan25/frontend-bookingcare.github.io/main/src/assets/images/2_banner/speciality.png';
        let remote = 'https://raw.githubusercontent.com/kanechan25/frontend-bookingcare.github.io/main/src/assets/images/2_banner/remote.png';
        let general = 'https://raw.githubusercontent.com/kanechan25/frontend-bookingcare.github.io/main/src/assets/images/2_banner/general.png';
        let test = 'https://raw.githubusercontent.com/kanechan25/frontend-bookingcare.github.io/main/src/assets/images/2_banner/test.png';
        let mental = 'https://raw.githubusercontent.com/kanechan25/frontend-bookingcare.github.io/main/src/assets/images/2_banner/mental.png';
        let dentist = 'https://raw.githubusercontent.com/kanechan25/frontend-bookingcare.github.io/main/src/assets/images/2_banner/dentist.png';
        let surgery = 'https://raw.githubusercontent.com/kanechan25/frontend-bookingcare.github.io/main/src/assets/images/2_banner/surgery.png';
        let product = 'https://raw.githubusercontent.com/kanechan25/frontend-bookingcare.github.io/main/src/assets/images/2_banner/product.png';

        return (
            <React.Fragment>
                <header className='header'>
                    <div className='home-header-container text-light-white '>
                        <div className='home-header-content container row '>
                            <div className='left-content col-xl-2 col-lg-3 col-md-3 col-sm-3 col-2'>
                                <i className="fas fa-bars"></i>
                                <div className='logo-both'>
                                    <div className='header-logo logo'>
                                        <img className='header-logo-img' src={logo_logo}></img>
                                    </div>
                                    <div className='header-logo text'>
                                        <img className='header-text-img' src={logo_text}></img>
                                    </div>
                                </div>
                            </div>
                            <div className='center-content col-xl-8 col-lg-7 col-md-6 col-sm-5 col-2'>
                                <div className='child-content'>
                                    <div className='header-title'><b><FormattedMessage id="homeheader.speciality" /></b></div>
                                    <div className='header-sub-title'><FormattedMessage id="homeheader.speciality-sub" /></div>
                                </div>
                                <div className='child-content'>
                                    <div className='header-title'><b><FormattedMessage id="homeheader.medical-central" /></b></div>
                                    <div className='header-sub-title'><FormattedMessage id="homeheader.medical-central-sub" /></div>
                                </div>
                                <div className='child-content'>
                                    <div className='header-title'><b><FormattedMessage id="homeheader.doctors" /></b></div>
                                    <div className='header-sub-title'><FormattedMessage id="homeheader.doctors-sub" /></div>
                                </div>
                                <div className='child-content'>
                                    <div className='header-title'><b><FormattedMessage id="homeheader.package" /></b></div>
                                    <div className='header-sub-title'><FormattedMessage id="homeheader.package-sub" /></div>
                                </div>
                            </div>
                            <div className='right-content col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6'>
                                <div className='help'><i className="fas fa-question-circle"></i><FormattedMessage id="homeheader.help" /></div>

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
                            </div>
                        </div>
                    </div>
                    {this.props.isShowBanner === true &&
                        <div className='home-header-banner text-light-white'>
                            <div className='banner-upper'>
                                <div className='banner-title'>
                                    <span><FormattedMessage id="homebanner.title1" /></span>
                                    <span><FormattedMessage id="homebanner.title2" /></span>
                                </div>
                                <div className='banner-search'>
                                    <div className="search-wrap">
                                        <svg className="search-icon " xmlns="http://www.w3.org/2000/svg" fill="none">
                                            <path className="search-icon-logo" strokeLinecap="round" strokeWidth="1.5"
                                                d="M15.028 15.334l4.644 4.644m-2.889-8.88a5.99 5.99 0 01-5.991 5.991 5.99 5.99 0 110-11.983 5.99 5.99 0 015.991 5.992z">
                                            </path>
                                        </svg>
                                        <input className="search-input" type="text" placeholder={
                                            language === LANGUAGES.EN ? 'Search for Doctors, Specialities or Medical Centre' : 'Tìm kiếm bác sĩ, chuyên khoa, hoặc cơ sở y tế'
                                        } />
                                    </div>
                                </div>
                                <div className='banner-download'>
                                    <a href='' className='app-mobile google-play'>
                                        <img className='img' src={google_play} />
                                    </a>
                                    <a href='' className='app-mobile app-store'>
                                        <img className='img' src={app_store} />
                                    </a>
                                </div>
                            </div>
                            <div className='banner-lower'>
                                <div className='container'>
                                    <ul className='banner-options row'>
                                        <li className='banner-option col col-1-8'>
                                            <a href='' className=' icon-option speciality'>
                                                <button className='btn wrap-img'><img className='img' src={speciality} /></button>
                                                <div className='text-option'><FormattedMessage id="homebanner.speciality" /></div>
                                            </a>
                                        </li>
                                        <li className='banner-option col col-1-8'>
                                            <a href='' className=' icon-option remote'>
                                                <button className='btn wrap-img'><img className='img' src={remote} /></button>
                                                <div className='text-option'><FormattedMessage id="homebanner.remote" /></div>
                                            </a>
                                        </li>
                                        <li className='banner-option col col-1-8'>
                                            <a href='' className=' icon-option general'>
                                                <button className='btn wrap-img'><img className='img' src={general} /></button>
                                                <div className='text-option'><FormattedMessage id="homebanner.general" /></div>
                                            </a>
                                        </li>
                                        <li className='banner-option col col-1-8'>
                                            <a href='' className=' icon-option test'>
                                                <button className='btn wrap-img'><img className='img' src={test} /></button>
                                                <div className='text-option'><FormattedMessage id="homebanner.test" /></div>
                                            </a>
                                        </li>
                                        <li className='banner-option col col-1-8'>
                                            <a href='' className=' icon-option mental'>
                                                <button className='btn wrap-img'><img className='img' src={mental} /></button>
                                                <div className='text-option'><FormattedMessage id="homebanner.mental" /></div>
                                            </a>
                                        </li>
                                        <li className='banner-option col col-1-8'>
                                            <a href='' className=' icon-option dentist'>
                                                <button className='btn wrap-img'><img className='img' src={dentist} /></button>
                                                <div className='text-option'><FormattedMessage id="homebanner.dentist" /></div>
                                            </a>
                                        </li>
                                        <li className='banner-option col col-1-8'>
                                            <a href='' className=' icon-option surgery'>
                                                <button className='btn wrap-img'><img className='img' src={surgery} /></button>
                                                <div className='text-option'><FormattedMessage id="homebanner.surgery" /></div>
                                            </a>
                                        </li>
                                        <li className='banner-option col col-1-8'>
                                            <a href='' className=' icon-option product'>
                                                <button className='btn wrap-img'><img className='img' src={product} /></button>
                                                <div className='text-option'><FormattedMessage id="homebanner.product" /></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
