import React, { Component } from 'react';
import { connect } from "react-redux";
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';
import { FormattedMessage } from 'react-intl';
import { toast } from 'react-toastify';
import * as actions from '../../../store/actions';
import { LANGUAGES } from '../../../utils';
import { CommonUtils } from '../../../utils';
import { createClinicService } from '../../../services/userService';


const mdParser = new MarkdownIt(/* Markdown-it options */);

class CreateClinic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isContainData: false,
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
    handleSaveNewClinic = async () => {
        console.log('check state saving?: ', this.state)
        let res = await createClinicService(this.state)
        if (res && res.errCode === 0) {
            toast.success('Add a new Clinic successful!')
            this.setState({
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
            toast.error('Add a new Clinic failed!')
            console.log('Having a tiny error somewhere, response is: ', res)
        }
    }
    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        let { isContainData, image, address, markdownContent, nameVi, nameEn } = this.state;
        return (
            <>
                <div className='manage-clinic-container'>
                    <div className='clinic-management'>
                        <div className="title" > <FormattedMessage id="system.manageclinic.headline1" /></div>
                        <div className='container'>
                            <div className='clinic-info mb-4 row'>
                                <div className='info-input col-md-7 col-12'>
                                    <div className='contain-left container'>
                                        <div className='namevi-clinic col-12'>
                                            <label className='mt-3 mb-1'><FormattedMessage id="system.manageclinic.namevi" /></label>
                                            <input
                                                className='form-control'
                                                onChange={(e) => this.handleOnChangeTextInput(e, 'nameVi')}
                                                value={nameVi}
                                            />
                                        </div>
                                        <div className='nameen-clinic col-12'>
                                            <label className='mt-3 mb-1'><FormattedMessage id="system.manageclinic.nameen" /></label>
                                            <input
                                                className='form-control'
                                                onChange={(e) => this.handleOnChangeTextInput(e, 'nameEn')}
                                                value={nameEn}
                                            />
                                        </div>
                                        <div className='address-clinic col-12'>
                                            <label className='mt-3 mb-1'><FormattedMessage id="system.manageclinic.address" /></label>
                                            <input
                                                className='form-control'
                                                onChange={(e) => this.handleOnChangeTextInput(e, 'address')}
                                                value={address}
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
                                style={{ height: '450px', marginBottom: '20px' }}
                                renderHTML={text => mdParser.render(text)} onChange={this.handleEditorChange}
                                value={markdownContent}
                            />
                        </div>
                        <div className='container'>
                            <button
                                className={isContainData === true ?
                                    'save mt-3 mb-5 btn btn-warning col-lg-1 col-sm-2 col-3' :
                                    'save mt-3 mb-5 btn btn-info col-lg-1 col-sm-2 col-3'}
                                onClick={() => this.handleSaveNewClinic()}
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

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateClinic);
