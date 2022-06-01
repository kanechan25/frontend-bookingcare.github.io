import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomeHeader.scss';

class HomeHeader extends Component {

    render() {

        return (
            <React.Fragment>
                <div className='home-header-container text-low-light'>
                    <div className='home-header-content row '>
                        <div className='left-content col-3'>
                            <i className="fas fa-bars"></i>
                            <div className='header-logo'></div>
                        </div>
                        <div className='center-content col-7'>
                            <div className='child-content'>
                                <div className='header-title'><b>Chuyên khoa</b></div>
                                <div className='header-sub-title'>Tìm bác sĩ theo chuyên khoa</div>
                            </div>
                            <div className='child-content'>
                                <div className='header-title'><b>Cơ sở y tế</b></div>
                                <div className='header-sub-title'>Chọn bệnh viện, phòng khám</div>
                            </div>
                            <div className='child-content'>
                                <div className='header-title'><b>Bác sĩ</b></div>
                                <div className='header-sub-title'>Chọn bác sĩ giỏi</div>
                            </div>
                            <div className='child-content'>
                                <div className='header-title'><b>Gói khám</b></div>
                                <div className='header-sub-title'>Khám sức khỏe tổng quát</div>
                            </div>
                        </div>
                        <div className='right-content col-2'>
                            <div><i className="fas fa-question-circle"></i> Hỗ trợ</div>
                            <div className='languages'>
                                <button className='btn header-lang-img'></button>
                                VIE
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-header-banner'>
                    <div className='banner-upper'>
                        <div className='banner-title'>

                        </div>
                        <div className='banner-search'>

                        </div>
                        <div className='banner-download'>

                        </div>
                    </div>
                    <div className='banner-lower'>
                        <div className='banner-options'>
                            <div className='banner-option'>
                                <div className='icon-option'></div>
                                <div className='text-option'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
