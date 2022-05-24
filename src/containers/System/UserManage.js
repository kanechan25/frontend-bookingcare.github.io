import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllUser } from '../../services/userService'


class UserManage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUsers: []
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


    render() {
        let arrUsers = this.state.arrUsers;
        return (
            <div className="user-container ">
                <div className='title text-center'>
                    Manage users Autodesk Construction Cloud from API
                </div>
                <div className='mx-2'>
                    <button className=' btn btn-light px-3'>
                        <i className="fas fa-plus pe-3"></i>
                        Add a new User
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
