import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent();
    }

    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
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
                                <form class="mt-3" action="/post-crud" method="POST">
                                    <div class="form-row text-light">
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail">Email</label>
                                            <input type="email" class="form-control " name="email" placeholder="Email" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword">Password</label>
                                            <input type="password" class="form-control " name="password" placeholder="Password" />
                                        </div>
                                    </div>
                                    <div class="form-row text-light">
                                        <div class="form-group col-md-6">
                                            <label for="inputFirstName">First Name</label>
                                            <input type="text" class="form-control " name="firstName" placeholder="" />
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputLastName">Last Name</label>
                                            <input type="text" class="form-control " name="lastName" placeholder="" />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputAddress">Address</label>
                                        <input type="text" class="form-control " name="address" placeholder="etc. 2425, Vo Nguyen Giap St, HCMC" />
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-4">
                                            <label for="inputPhoneNum">Phone Number</label>
                                            <input type="text" class="form-control " name="phoneNum" placeholder="etc. +84 368889999" />
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputGender">Sex</label>
                                            <select name="gender" class="form-control ">
                                                <option selected>Choose sex</option>
                                                <option value="1">Male</option>
                                                <option value="2">Female</option>
                                                <option value="3">Others</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputRole">Role</label>
                                            <select name="roleId" class="form-control ">
                                                <option selected>Choose role</option>
                                                <option value="R1">Admin</option>
                                                <option value="R2">Doctor</option>
                                                <option value="R3">Patient</option>
                                            </select>
                                        </div>

                                    </div>

                                    <button type="submit" class="btn btn-primary">Sign in</button>
                                </form>
                            </div>
                        </div>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            color="primary"
                            className={'ps-2 pe-2'}
                            onClick={function noRefCheck(){}}
                        >
                            Do Something
                        </Button>
                        
                        <Button
                            className={'ps-2 pe-2'}
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




