import React, { Component } from 'react';
import { connect } from "react-redux";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';
import { changeLanguageApp } from '../../../store/actions/appActions';
import * as action from '../../../store/actions';
import { LANGUAGES } from '../../../utils';
import { CommonUtils } from '../../../utils';
import { getClinicByIdService, saveInfoClinicService } from '../../../services/userService';
import './ClinicManage.scss'
import Select from 'react-select';


const mdParser = new MarkdownIt(/* Markdown-it options */);

class ClinicManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isContainData: false,
            arrClinics: [],
            clinicId:'',
            selectedOption: '',
            nameVi: '',
            nameEn: '',
            address: '',
            descMarkdownVi: '',
            descMarkdownEn: '',
            descHtmlVi: '',
            descHtmlEn: '',
            image: '',
        }
    }
    changeLanguage = (language) => {
        this.props.toggleLanguage(language);
    }
    handleEditorChange = ({ html, text }) => {
        this.setState({
            descMarkdownVi: text,
            descHtmlVi: html,
        })
    };
    handleOnChangeTextInput = (e, inputId) => {
        let state = { ...this.state };
        state[inputId] = e.target.value
        this.setState({
            ...state
        })
    }
    handleOnchangeImage = async (e) => {
        let link = e.target.value
        this.setState({
            image: link,
        })
    }
    handleSaveEditClinic = async () => {
        console.log('check state before saving?: ', this.state)
        let res = await saveInfoClinicService(this.state)
        if (res && res.errCode === 0) {
            toast.success('Save Editing Clinic successful!')
            this.setState({
                selectedOption: '',
                nameVi: '',
                nameEn: '',
                address: '',
                descMarkdownVi: '',
                descMarkdownEn: '',
                descHtmlVi: '',
                descHtmlEn: '',
                image: '',
            })
        } else {
            toast.error('Saving Editing Clinic failed!')
            console.log('Having a tiny error somewhere, response is: ', res)
        }
    }
    handleChangeSelection = async (selectedOption) => {
        this.setState({ selectedOption });
        if (selectedOption.value) {            
            let clinicId = selectedOption.value;
            let clinicData = await getClinicByIdService({ id: clinicId })
            if (clinicData && clinicData.data) {
                this.setState({
                    clinicId: clinicId,
                    nameVi: clinicData.data.nameVi,
                    nameEn: clinicData.data.nameEn,
                    address: clinicData.data.address,
                    descMarkdownVi: clinicData.data.descMarkdownVi,
                    descMarkdownEn: clinicData.data.descMarkdownEn,
                    descHtmlVi: clinicData.data.descHtmlVi,
                    descHtmlEn: clinicData.data.descHtmlEn,
                    image: clinicData.data.image,
                })
            }
        }
    }

    async componentDidMount() {
        await this.props.loadAllClinic();
        let dataClinic = this.buildInputInfoSelect(this.props.clinicRedux, 'CLINIC');
        this.setState({
            arrClinics: dataClinic,
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.clinicRedux !== this.props.clinicRedux) {
            let dataClinic = this.buildInputInfoSelect(this.props.clinicRedux, 'CLINIC');
            this.setState({
                arrClinics: dataClinic,
            })
        }
        if (prevProps.language !== this.props.language) {
            let dataClinic = this.buildInputInfoSelect(this.props.clinicRedux, 'CLINIC');
            this.setState({
                arrClinics: dataClinic,
            })
        }

    }
    buildInputInfoSelect = (inputData, type) => {
        let result = [];
        if (inputData && inputData.length > 0) {
            if (type === 'CLINIC') {
                inputData.map((item, index) => {
                    let obj = {}
                    obj.label = this.props.language === LANGUAGES.VI ? item.nameVi : item.nameEn;
                    obj.address = item.address;
                    obj.value = item.id;
                    result.push(obj);
                })
            }
        }
        return result;
    }
    render() {
        let { arrClinics, isContainData, image, address, descMarkdownVi } = this.state;
        return (
            <>
                <div className='manage-clinic-container'>
                    <div className='clinic-management'>
                        <div className="title" > <FormattedMessage id="system.manageclinic.headline2" /></div>
                        <div className='container'>
                            <div className='clinic-info mb-4 row'>
                                <div className='info-input col-md-7 col-12'>
                                    <div className='contain-left container'>
                                        <div className='namevi-clinic col-12'>
                                            <label className='mt-3 mb-1'><FormattedMessage id="system.manageclinic.namevi" /></label>
                                            <Select
                                                value={this.state.selectedOption}
                                                onChange={this.handleChangeSelection}
                                                options={arrClinics}
                                            />
                                        </div>

                                        <div className='address-clinic col-12'>
                                            <label className='mt-3 mb-1'><FormattedMessage id="system.manageclinic.address" /></label>
                                            <input
                                                className='form-control'
                                                onChange={(e) => this.handleOnChangeTextInput(e, 'address')}
                                                value={address}
                                                disabled
                                            />
                                        </div>
                                        <div className='img-clinic col-12'>
                                            <label className='mt-3 mb-1'><FormattedMessage id="system.manageclinic.img" /></label>
                                            <input
                                                className='form-control'
                                                value={image}
                                                onChange={(e) => this.handleOnchangeImage(e)}
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className='img-input col-md-5 col-12 mt-5'>
                                    <div className='img-render'>
                                        <img
                                            src={image}
                                            className='img-link'
                                        ></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='detail-clinic container'>
                            <label className='mt-3 mb-1'><FormattedMessage id="system.manageclinic.description" /></label>
                            <MdEditor
                                className={'markdown-clinic'}
                                style={{ height: '750px', marginBottom: '20px' }}
                                renderHTML={text => mdParser.render(text)} onChange={this.handleEditorChange}
                                value={descMarkdownVi}
                            />
                        </div>
                        <div className='container'>
                            <button
                                className={isContainData === true ?
                                    'save mt-3 mb-5 btn btn-warning col-lg-1 col-sm-2 col-3' :
                                    'save mt-3 mb-5 btn btn-info col-lg-1 col-sm-2 col-3'}
                                onClick={() => this.handleSaveEditClinic()}
                            >
                                {isContainData === true ?
                                    <FormattedMessage id="common.edit" /> :
                                    <FormattedMessage id="common.save" />
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        clinicRedux: state.admin.allClinic,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleLanguage: (language) => dispatch(changeLanguageApp(language)),
        loadAllClinic: () => dispatch(action.fetchAllClinic()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClinicManage);
