import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormattedMessage } from 'react-intl';
import Select from 'react-select';
import * as actions from '../../store/actions';
import { LANGUAGES } from '../../utils/constant';
import DatePicker from '../../components/Input/DatePicker';
import moment from 'moment';
import './ManageSchedule.scss'


class ManageSchedule extends Component {

    constructor(props) {
        super(props);
        this.state = {
            allDoctors: [],
            isContainData: false,
            currentDate: '',
            rangeTime: [],
        }
    }


    async componentDidMount() {
        await this.props.fetchAllDoctor();
        await this.props.fetchAllCodeTimeDoctor();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelection = this.buildInputSelect(this.props.allDoctors)
            this.setState({
                allDoctors: dataSelection,
            })
        }
        if (prevProps.allTime !== this.props.allTime) {
            this.setState({
                rangeTime: this.props.allTime
            })
        }
        if (prevProps.language !== this.props.language) {
            let dataSelection = this.buildInputSelect(this.props.allDoctors)
            this.setState({
                allDoctors: dataSelection
            })
        }
    }
    buildInputSelect = (inputData) => {
        let result = [];
        if (inputData && inputData.length > 0) {
            inputData.map((item, index) => {
                let obj = {}
                let labelVi = `${item.lastName} ${item.firstName}`
                let labelEn = `${item.firstName} ${item.lastName}`
                obj.label = this.props.language === LANGUAGES.VI ? labelVi : labelEn;
                obj.value = item.id;
                result.push(obj);
            })
        }
        return result;
    }

    handleChangeSelection = async (selectedOption) => {
        this.setState({ selectedOption });
    };
    handleOnChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0],
        });
    }

    render() {
        let { isContainData, rangeTime } = this.state;
        let { language } = this.props;
        console.log('Check PROPS in Manage Schedule: ', this.props.allTime);

        return (
            <div className="schedule-container container">
                <div className='schedule-title row'>
                    <span className='title'>
                        <FormattedMessage id="doctorschedule.schedule-headline" />
                    </span>
                </div>
                <div className='schedule-info row'>
                    <div className='form-group col-sm-6 col-12'>
                        <label className='mt-3'><FormattedMessage id="doctorschedule.label-doctor" /></label>
                        <Select
                            className={'mt-1'}
                            value={this.state.selectedOption}
                            onChange={this.handleChangeSelection}
                            options={this.state.allDoctors}
                        />
                    </div>
                    <div className='form-group col-sm-6 col-12'>
                        <label className='mt-3'><FormattedMessage id="doctorschedule.label-date" /></label>
                        <DatePicker
                            className={'form-control mt-1'}
                            onChange={this.handleOnChangeDatePicker}
                            value={this.state.currentDate}
                            minDate={new Date()}
                        />
                    </div>
                    <div className='pick-time col-12 '>
                        {rangeTime && rangeTime.length > 0 && 
                            rangeTime.map((item, index) => {
                                return (
                                    <button 
                                        className='btn-time btn btn-warning'
                                        key={index}
                                    >
                                        {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                    </button>
                                )
                            })
                        }
                    </div>
                    <button
                        className={isContainData === true ? 'save btn btn-warning col-lg-1 col-sm-2 col-3' :
                        'save btn btn-info col-lg-1 col-sm-2 col-3'}
                    >
                        {isContainData === true ? <FormattedMessage id="common.edit" /> : <FormattedMessage id="common.save" />}
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        allDoctors: state.admin.allDoctors,
        allTime: state.admin.allTime,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
        fetchAllCodeTimeDoctor: () => dispatch(actions.fetchAllCodeTimeDoctor()),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSchedule);
