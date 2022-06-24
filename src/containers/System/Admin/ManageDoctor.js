import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES, CRUD_ACTION } from '../../../utils/constant';
import { CommonUtils } from '../../../utils';
import * as actions from '../../../store/actions';
import Markdown from 'markdown-to-jsx';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { getInfoDoctorService } from '../../../services/userService';

import '../ModalUser.scss'
import './UserRedux.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import TableUserRedux from './TableUserRedux';
import Select from 'react-select';


const mdParser = new MarkdownIt(/* Markdown-it options */);


class ManageDoctor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrOriginalDoctors: [],
            allDoctors: [],
            markdownContent: '',
            htmlContent: '',
            selectedOption: '',
            description: '',
            isContainData: false,
        }
    }

    handleChangeSelection = async (selectedOption) => {
        this.setState({ selectedOption });
        let doctorInfoData = await getInfoDoctorService(selectedOption.value)
        console.log('Option selected Doctors: ', doctorInfoData);
        if (doctorInfoData && doctorInfoData.data && doctorInfoData.data.Markdown) {
            let markdown = doctorInfoData.data.Markdown
            this.setState({
                htmlContent: markdown.htmlContent,
                markdownContent: markdown.markdownContent,
                description: markdown.description,
                isContainData: true,
            })
        } else {
            this.setState({
                htmlContent: '',
                markdownContent: '',
                description: '',
                isContainData: false,
            })
        }
    };

    handleEditorChange = ({ html, text }) => {
        this.setState({
            markdownContent: text,
            htmlContent: html,
        })
    };
    
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

    handleSaveContentMarkdown = () => {
        let { isContainData } = this.state;
        this.props.saveInfoDoctor({
            htmlContent: this.state.htmlContent,
            markdownContent: this.state.markdownContent,
            description: this.state.description,
            doctorId: this.state.selectedOption.value,
            action: isContainData === true ? CRUD_ACTION.EDIT : CRUD_ACTION.CREATE
        });
        this.setState({
            markdownContent: '',
            htmlContent: '',
            selectedOption: '',
            description: '',
        })
    }

    handleOnChangeDesc = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    async componentDidMount() {
        await this.props.fetchAllDoctor();
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataSelection = this.buildInputSelect(this.props.allDoctors)
            this.setState({
                allDoctors: dataSelection,
                arrOriginalDoctors: this.props.allDoctors,
            })
        }
        if (prevProps.language !== this.props.language) {
            let dataSelection = this.buildInputSelect(this.props.allDoctors)
            this.setState({
                allDoctors: dataSelection
            })
        }

    }

    render() {
        let arrOriginalDoctors = this.state.arrOriginalDoctors;
        // console.log('all doctors: ', arrOriginalDoctors)
        let { isContainData } = this.state;
        return (
            <div className='doctor-management'>
                <div className="title" > Doctor Management</div>
                <div className='container user-table'>
                    <div className='more-info row'>
                        <div className='content-left form-group col-3'>
                            <label className='my-2'><FormattedMessage id="doctor.choose" /></label>
                            <Select
                                value={this.state.selectedOption}
                                onChange={this.handleChangeSelection}
                                options={this.state.allDoctors}
                            />
                        </div>
                        <div className='content-right form-group col-9'>
                            <label className='my-2'><FormattedMessage id="doctor.intro" /></label>
                            <textarea className='form-control mb-3' rows='5'
                                onChange={(e) => this.handleOnChangeDesc(e)}
                                value={this.state.description}
                            >

                            </textarea>
                        </div>
                    </div>
                </div>
                <div className='detail-doctor container'>
                    <MdEditor
                        className={'detail-doctor-vi'}
                        style={{ height: '300px', marginBottom: '50px' }}
                        renderHTML={text => mdParser.render(text)} onChange={this.handleEditorChange}
                        value={this.state.markdownContent}
                    />
                </div>
                <div className='container'>
                    <button
                        className={isContainData === true ? 'save btn btn-warning col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-2 col-3' :
                            'save btn btn-info col-xxl-1 col-xl-1 col-lg-1 col-md-2 col-sm-2 col-3'}
                        style={{ marginBottom: '50px' }}
                        onClick={() => this.handleSaveContentMarkdown()}
                    >{isContainData === true ? <FormattedMessage id="common.edit" /> : <FormattedMessage id="common.save" />}
                    </button>
                </div>
                <table className="table table-bordered my-5 px-1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Gender</th>
                            <th>Role</th>
                            <th>Title</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            arrOriginalDoctors && arrOriginalDoctors.length > 0 && arrOriginalDoctors.map((item, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.lastName}</td>
                                            <td>{item.firstName}</td>
                                            <td>{item.address}</td>
                                            <td>{item.phoneNum}</td>
                                            <td>{item.gender}</td>
                                            <td>{item.roleId}</td>
                                            <td>{item.titleId}</td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        allDoctors: state.admin.allDoctors,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
        saveInfoDoctor: (data) => dispatch(actions.saveInfoDoctor(data)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
