import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUser } from '../../services/userService'
import ModalUser from './ModalUser';

class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
        }
    }


    async componentDidMount() {
        let response = await getAllUser('ALL');
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }

    handleClickAddNewUser = () => {
        this.setState({
            isOpenModalUser: true,
        })
    }

    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }

    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container ">
                <ModalUser 
                    isOpen = {this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                />
                <div className='title text-center'>
                    Manage users Autodesk Construction Cloud from API
                </div>
                
                <div className='mx-2'>
                    <button className=' btn btn-info px-3'
                        onClick={() => this.handleClickAddNewUser()}
                    >
                        <i className="fas fa-plus pe-3"></i>
                        Add a new user
                    </button>
                </div>
                <div className='user-table'>
                <table class="table table-bordered mt-4 mx-1 text-white-50">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Last Name</th>
                            <th>First Name</th>
                            <th>Gender</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                            {
                                arrUsers && arrUsers.map((item, index) => {
                                    return (
                                        <>
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.email}</td>
                                                <td>{item.lastName}</td>
                                                <td>{item.firstName}</td>
                                                <td>{item.gender}</td>
                                                <td>{item.roleId}</td>
                                                <td>
                                                    <button className="btn btn-link ps-2 pe-2">
                                                        <i className="fas fa-pencil-alt" ></i>
                                                    </button>
                                                    <button className="btn btn-link ms-2 ps-2 pe-2">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                    </tbody>

                </table>
                </div>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
