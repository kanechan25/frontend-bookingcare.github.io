import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './ModalUser.scss'
class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            lastName: '',
            firstName: '',
            address: '',
            phoneNum: '',
            gender: '',
            role: '',

        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    handleOnChangeInput = (e, inputId) => {
        console.log(e.target.value, inputId)
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={true}
                    // isOpen={this.props.isOpen}
                    className={'form-create-new-user'}
                    size="md"
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>
                        Create a new user
                    </ModalHeader>

                    <ModalBody>
                        <div class="container">
                            <div class="row text-info">
                                <form class="mt-1" action="/post-crud" method="POST">
                                    <div class="form-row text-light">
                                        <div class="form-group mt-3">
                                            <input type="email" class="form-control " name="email" placeholder="Enter email: youremail@gmail.com" 
                                                onChange={(e) => {this.handleOnChangeInput(e, 'email')}}
                                            />
                                        </div>
                                        <div class="form-group mt-3">
                                            <input type="password" class="form-control " name="password" placeholder="Enter you password" 
                                                onChange={(e) => {this.handleOnChangeInput(e, 'password')}}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-row text-light">
                                        <div class="form-group mt-3">
                                            <input type="text" class="form-control " name="firstName" placeholder="Enter your first name" 
                                                onChange={(e) => {this.handleOnChangeInput(e, 'firstName')}}
                                            />
                                        </div>
                                        <div class="form-group mt-3">
                                            <input type="text" class="form-control " name="lastName" placeholder="Enter your last name" 
                                                onChange={(e) => {this.handleOnChangeInput(e, 'lastName')}}
                                            />
                                        </div>
                                    </div>
                                    <div class="form-group mt-3">
                                        <input type="text" class="form-control " name="address" placeholder="Enter address: etc. 2425, Vo Nguyen Giap St, HCMC" 
                                            onChange={(e) => {this.handleOnChangeInput(e, 'address')}}
                                        />
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group mt-3">
                                            <input type="text" class="form-control " name="phoneNum" placeholder="Enter phone number: etc. +84368889999 or 0986969696" 
                                                onChange={(e) => {this.handleOnChangeInput(e, 'phoneNum')}}
                                            />
                                        </div>
                                        <div class="form-group mt-3 ">
                                            <select name="gender" class="form-control ">
                                                <option selected>-- Choose sex --</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Others</option>
                                            </select>
                                        </div>
                                        <div class="form-group mt-3 ">
                                            <select name="roleId" class="form-control ">
                                                <option selected>-- Choose role --</option>
                                                <option value="R1">Admin</option>
                                                <option value="R2">Doctor</option>
                                                <option value="R3">Patient</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            className={'px-3'}
                            onClick={function noRefCheck(){}}
                        >
                            Create
                        </Button>
                        
                        <Button
                            className={'mx-3 px-2'}
                            onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>

                </Modal>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);




