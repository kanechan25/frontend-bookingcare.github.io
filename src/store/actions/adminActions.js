import actionTypes from './actionTypes';
import { getAllCodeService, createNewUserService, getAllUser, 
    deleteUserService, editUserService } from '../../services/userService';
import { toast } from 'react-toastify';


//#region fetchGender/Role/Position 
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })

            let res = await getAllCodeService('gender')
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (error) {
            dispatch(fetchGenderFailed());
            console.log('fetch Gender Failed: ' , error)
        }
    }
}

const fetchGenderSuccess = (data) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: data,
})
const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})


export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_POSITION_START })

            let res = await getAllCodeService('position')
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (error) {
            dispatch(fetchPositionFailed());
            console.log('fetch Position Failed: ' , error)
        }
    }
}

const fetchPositionSuccess = (data) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: data,
})
const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})


export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_ROLE_START })

            let res = await getAllCodeService('role')
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (error) {
            dispatch(fetchRoleFailed());
            console.log('fetch Role Failed: ' , error)
        }
    }
}

const fetchRoleSuccess = (data) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: data,
})
const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})
//#endregion

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data)
            if (res && res.errCode === 0) {
                dispatch(createUserSuccess());
                dispatch(fetchAllUserStart());
                toast.success('Add a new user successful!' )
            } else {
                dispatch(createUserFailed());
            }
        } catch (error) {
            dispatch(createUserFailed());
            console.log('create User Failed: ' , error)
        }
    }
}

const createUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
})
const createUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})




export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUser('ALL')
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users.sort()));
            } else {
                dispatch(fetchAllUserFailed());
                toast.error('Get all users from database failed!')

            }
        } catch (error) {
            dispatch(fetchAllUserFailed());
            toast.error('Get all users from database failed!')
            console.log('fetch All User Failed: ' , error)
        }
    }
}

const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data,
})
const fetchAllUserFailed = () => ({
    type: actionTypes.FETCH_ALL_USER_FAILED
})



export const deleteNewUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId)
            if (res && res.errCode === 0) {
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUserStart());
                toast.success('Delete a user successful!')
            } else {
                dispatch(deleteUserFailed());
                toast.error('Delete a user failed!')

            }
        } catch (error) {
            dispatch(deleteUserFailed());
            toast.error('Delete a user failed!')
            console.log('delete User Failed: ' , error)
        }
    }
}

const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
})
const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})



export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data)
            if (res && res.errCode === 0) {
                dispatch(editUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                dispatch(editUserFailed());
                toast.error('Edit a user failed!')
            }
        } catch (error) {
            dispatch(editUserFailed());
            toast.error('Edit a user failed!')
            console.log('edit User Failed: ' , error)
        }
    }
}

const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS,
})
const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})
