import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { LANGUAGES } from '../../../utils/constant';
import { getAllCodeService } from '../../../services/userService';
import * as actions from '../../../store/actions/index';


import '../ModalUser.scss'
import './UserRedux.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgURL: '',
            isOpen: false,

            email: '',
            password: '',
            firstName: '',
            lastName: '',
            address: '',
            phoneNum: '',
            gender: '',
            roleId: '',
            positionId: '',
            image: '',
        }
    }

    async componentDidMount() {
        // try { Cách 1: Dùng state
        //     let res = await getAllCodeService('gender');
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data
        //         })
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
        await this.props.getGenderStart();
        await this.props.getPositionStart();
        await this.props.getRoleStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux
            })
        }
        if (prevProps.positionRedux !== this.props.positionRedux) {
            this.setState({
                positionArr: this.props.positionRedux
            })
        }
        if (prevProps.roleRedux !== this.props.roleRedux) {
            this.setState({
                roleArr: this.props.roleRedux
            })
        }
    }
    handleOnchangeImage = (e) => {
        let files = e.target.files;
        let file = files[0];
        if (file) {
            let objectUrl = URL.createObjectURL(file);
            this.setState({
                previewImgURL: objectUrl,
            })
        }
    }

    openPreviewImg = () => {
        if (!this.state.previewImgURL) return;

        this.setState({
            isOpen: true,
        })
    }
    handleAddNewUser = () => {

    }

    render() {
        
        let genderArr = this.state.genderArr;
        let positionArr = this.state.positionArr;
        let roleArr = this.state.roleArr;
        let language = this.props.language;
        let isLoadingGender= this.props.isLoadingGender;

        return (
            <div className='user-redux-container'>
                <div className="title" >Manage users Autodesk Construction Cloud by Redux</div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='mt-1 ms-2 row'>{isLoadingGender === true ? 'Loading data' : ''}</div>
                        <form className="mt-1 row text-info">
                            <div className="form-group mt-3 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <input type="email" className="form-control " name="email" 
                                placeholder="Enter your email"
                                />
                            </div>
                            <div className="form-group mt-3 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <input type="password" className="form-control " name="password" 
                                placeholder="Enter you password" 
                                />
                            </div>
                            <div className="form-group mt-3 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <input type="text" className="form-control " name="firstName" 
                                placeholder="Enter your first name" 
                                />
                            </div>
                            <div className="form-group mt-3 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <input type="text" className="form-control " name="lastName" 
                                placeholder="Enter your last name" 
                                />
                            </div>
                            <div className="form-group mt-3 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <input type="text" className="form-control " name="address" 
                                placeholder="Enter address: etc. 2425, Vo Nguyen Giap St, HCMC" 
                                />
                            </div>
                            <div className="form-group mt-3 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <input type="text" className="form-control " name="phoneNum" 
                                placeholder="Enter phone number: etc. +84368889999" 
                                />
                            </div>
                            <div className="form-group mt-3 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <select name="gender" className="form-control ">
                                    <option value='' selected>-- Choose gender --</option>
                                    {genderArr && genderArr.length > 0 && 
                                        genderArr.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group mt-3 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <select name="roleId" className="form-control ">
                                    <option value='' selected>-- Choose role --</option>
                                    {roleArr && roleArr.length > 0 && 
                                        roleArr.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group mt-3 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <select name="position" className="form-control">
                                    <option value='' selected>-- Choose title --</option>
                                    {positionArr && positionArr.length > 0 && 
                                        positionArr.map((item, index) => {
                                            return (
                                                <option key={index} value={item.key}>
                                                    {language === LANGUAGES.VI ? item.valueVi : item.valueEn}
                                                </option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="form-group mt-3 col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                                <div className='preview-container'>
                                    <input type="file" className="form-control " name="image" id="formFile" 
                                        onChange={(e) => this.handleOnchangeImage(e)}
                                    />
                                    <div className='preview-img'
                                        style={{ backgroundImage: `url(${this.state.previewImgURL})` }}
                                        onClick={() => {this.openPreviewImg()}}
                                    ></div>
                                </div>
                            </div>
                        </form>
                        <div className='admin-footer row'>
                            <button
                                className='create btn btn-primary col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-8'
                                onClick={() => {this.handleAddNewUser()}}
                            >Create New User</button>
                            <button
                                className='cancel btn btn-info col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-8'
                                // onClick={this.toggle}
                            >Cancel and Back</button>
                        </div>
                    </div>
                </div>
                {this.state.isOpen === true &              
                    <Lightbox
                        mainSrc={this.state.previewImgURL}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.position,
        roleRedux: state.admin.role,
        isLoadingGender: state.admin.isLoadingGender,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
