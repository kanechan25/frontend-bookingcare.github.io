import React, { Component } from 'react';
import { connect } from "react-redux";
import './BookingModal.scss'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import DoctorProfile from '../DoctorProfile';
import NumberFormat from 'react-number-format';
import Select from 'react-select';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from 'lodash';

import * as actions from '../../../../store/actions';
import { LANGUAGES } from '../../../../utils';
import { postBookingAppointmentService } from '../../../../services/userService'


class BookingModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorId: '',
            fullName: '',
            telNum: '',
            age: '',
            gender: '',
            address: '',
            email: '',
            symptom: '',
            timeType: '',
            date: '',
            genderArr: [],
        }
    }

    async componentDidMount() {
        this.props.fetchGenderById();
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (this.props.genderRedux !== prevProps.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (this.props.bookingData !== prevProps.bookingData) {
            if (this.props.bookingData && !_.isEmpty(this.props.bookingData)) {                
                this.setState({
                    doctorId: this.props.bookingData.doctorId,
                    timeType: this.props.bookingData.timeType,
                    date: this.props.bookingData.date,
                })
            }
        }
    }
    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (e, inputId) => {
        let copyState = { ...this.state };
        copyState[inputId] = e.target.value;
        this.setState({
            ...copyState
        })
    }
    handleAddNewBooking = async () => {
        //validate
        let { fullName, telNum, email } = this.state;
        if (fullName && telNum && email &&
            fullName !== '' && telNum !== '' && email !== '') {            
            //save booking appointment
            console.log('state finally before sending: ', this.state)
            let res = await postBookingAppointmentService({
                doctorId: this.state.doctorId,
                fullName: this.state.fullName,
                telNum: this.state.telNum,
                age: this.state.age,
                gender: this.state.gender,
                address: this.state.address,
                email: this.state.email,
                symptom: this.state.symptom,
                timeType: this.state.timeType,
                date: this.state.date,
            });
            if (res && res.errCode === 0) {
                toast.success('You have booked successful! Please check your email!')
                this.toggle();
            } else {
                toast.error('You have booked an appointment error!')
            }
        } else {
            alert('Please enter fully mandatory inputs (full name *, telephone number * and email *')
        }
    }

    render() {
        let { language } = this.props;
        let { isOpenCreateBookingModal, bookingData } = this.props;
        let doctorId = bookingData && !_.isEmpty(bookingData) ? bookingData.doctorId : '';
        let genderArr = this.state.genderArr;
        // console.log('booking data: ', bookingData)
        return (
            <>
                <div className='booking-modal container'>
                    <Modal
                        isOpen={isOpenCreateBookingModal}
                        className={'form-create-booking'}
                        size="lg"
                        toggle={this.toggle}
                    >
                        <ModalHeader toggle={this.toggle}>
                            <FormattedMessage id="patientside.bookingdoctor.booking" />
                        </ModalHeader>

                        <ModalBody>
                            <div className="create-booking container">
                                <form className="mt-1" action="/booking" method="POST">
                                    <div className='doctor-profile'>
                                        <DoctorProfile
                                            doctorId={doctorId}
                                            isShowDetailDoctor={false}
                                            bookingData={bookingData}
                                        />
                                    </div>
                                    <div className='row'>
                                        <div className="form-group col-md-6 col-12 mt-4">
                                            <FormattedMessage id="patientside.bookingdoctor.name" />
                                            <input type="text" className="form-control " name="fullName"
                                            onChange={(e) => {this.handleOnChangeInput(e, 'fullName')}}
                                            value={this.state.fullName}
                                            />
                                        </div>
                                        <div className="form-group col-md-6 col-12 mt-4">
                                            <FormattedMessage id="patientside.bookingdoctor.tel" />
                                            <input type="text" className="form-control " name="telNum"
                                            onChange={(e) => {this.handleOnChangeInput(e, 'telNum')}}
                                            value={this.state.telNum}
                                            />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="form-group col-md-6 col-12 mt-4">
                                            <FormattedMessage id="patientside.bookingdoctor.age" />
                                            <input type="text" className="form-control " name="age"
                                            onChange={(e) => {this.handleOnChangeInput(e, 'age')}}
                                            value={this.state.age}
                                            />
                                        </div>
                                        <div className="form-group col-md-6 col-12 mt-4">
                                            <FormattedMessage id="patientside.bookingdoctor.gender" />
                                            <select name="gender" className="form-control "
                                                onChange={(e) => {this.handleOnChangeInput(e, 'gender')}}
                                                value={this.state.gender}
                                            >
                                                {genderArr && genderArr.length > 0 &&
                                                    genderArr.map((item, index) => {
                                                        return (
                                                            <option key={index} value={item.keyMap}>
                                                                {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                            </option>
                                                        )
                                                    })
                                                }
                                            </select>
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="form-group col-md-6 col-12 mt-4">
                                            <FormattedMessage id="patientside.bookingdoctor.address" />
                                            <input type="text" className="form-control " name="address"
                                            onChange={(e) => {this.handleOnChangeInput(e, 'address')}}
                                            value={this.state.address}
                                            />
                                        </div>
                                        <div className="form-group col-md-6 col-12 mt-4">
                                            <FormattedMessage id="patientside.bookingdoctor.email" />
                                            <input type="email" className="form-control " name="email"
                                            onChange={(e) => {this.handleOnChangeInput(e, 'email')}}
                                            value={this.state.email}
                                            />
                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className="form-group col-12 mt-4">
                                            <FormattedMessage id="patientside.bookingdoctor.symptom" />
                                            <input type="text" className="form-control " name="symptom"
                                            onChange={(e) => {this.handleOnChangeInput(e, 'symptom')}}
                                            value={this.state.symptom}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            <Button
                                color="primary"
                                className={'px-3'}
                                onClick={() => {this.handleAddNewBooking()}}
                            ><FormattedMessage id="patientside.bookingdoctor.ok" />
                            </Button>

                            <Button
                                className={'mx-3 px-2'}
                                onClick={this.toggle}>
                                <FormattedMessage id="patientside.bookingdoctor.cancel" />
                            </Button>
                        </ModalFooter>

                    </Modal>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        genderRedux: state.admin.genders,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getInfoDoctor: (id) => dispatch(actions.getInfoDoctor(id)),
        fetchGenderById:() => dispatch(actions.fetchGenderStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookingModal);
