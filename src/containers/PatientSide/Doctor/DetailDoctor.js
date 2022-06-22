import React, { Component } from 'react';
import { connect } from "react-redux";
import HeaderDoctor from './HeaderDoctor';
import './DetailDoctor.scss'

class DetailDoctor extends Component {

    render() {

        return (
            <>
                <HeaderDoctor />
                <div className='doctor-container'>

                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,

    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
