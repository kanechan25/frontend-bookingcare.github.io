const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: 'APP_START_UP_COMPLETE',
    SET_CONTENT_OF_CONFIRM_MODAL: 'SET_CONTENT_OF_CONFIRM_MODAL',
    CHANGE_LANGUAGE: 'CHANGE_LANGUAGE',

    //user
    ADD_USER_SUCCESS: 'ADD_USER_SUCCESS',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAIL: 'USER_LOGIN_FAIL',
    PROCESS_LOGOUT: 'PROCESS_LOGOUT',

    //admin
    FETCH_GENDER_START: 'FETCH_GENDER_START',
    FETCH_GENDER_SUCCESS: 'FETCH_GENDER_SUCCESS',
    FETCH_GENDER_FAILED: 'FETCH_GENDER_FAILED',

    FETCH_TITLE_START: 'FETCH_TITLE_START',
    FETCH_TITLE_SUCCESS: 'FETCH_TITLE_SUCCESS',
    FETCH_TITLE_FAILED: 'FETCH_TITLE_FAILED',

    FETCH_ROLE_START: 'FETCH_ROLE_START',
    FETCH_ROLE_SUCCESS: 'FETCH_ROLE_SUCCESS',
    FETCH_ROLE_FAILED: 'FETCH_ROLE_FAILED',

    FETCH_REQUIRED_DOCTOR_INFO_START: 'FETCH_REQUIRED_DOCTOR_INFO_START',
    FETCH_REQUIRED_DOCTOR_INFO_SUCCESS: 'FETCH_REQUIRED_DOCTOR_INFO_SUCCESS',
    FETCH_REQUIRED_DOCTOR_INFO_FAILED: 'FETCH_REQUIRED_DOCTOR_INFO_FAILED',


    CREATE_USER_SUCCESS: 'CREATE_USER_SUCCESS',
    CREATE_USER_FAILED: 'CREATE_USER_FAILED',

    EDIT_USER_SUCCESS: 'EDIT_USER_SUCCESS',
    EDIT_USER_FAILED: 'EDIT_USER_FAILED',

    DELETE_USER_SUCCESS: 'DELETE_USER_SUCCESS',
    DELETE_USER_FAILED: 'DELETE_USER_FAILED',

    FETCH_ALL_USER_SUCCESS: 'FETCH_ALL_USER_SUCCESS',
    FETCH_ALL_USER_FAILED: 'FETCH_ALL_USER_FAILED',

    FETCH_DOCTOR_SUCCESS: 'FETCH_DOCTOR_SUCCESS',
    FETCH_DOCTOR_FAILED: 'FETCH_DOCTOR_FAILED',

    FETCH_ALL_DOCTOR_SUCCESS: 'FETCH_ALL_DOCTOR_SUCCESS',
    FETCH_ALL_DOCTOR_FAILED: 'FETCH_ALL_DOCTOR_FAILED',

    SAVE_INFO_DOCTOR_SUCCESS: 'SAVE_INFO_DOCTOR_SUCCESS',
    SAVE_INFO_DOCTOR_FAILED: 'SAVE_INFO_DOCTOR_FAILED',

    GET_INFO_DOCTOR_SUCCESS: 'GET_INFO_DOCTOR_SUCCESS',
    GET_INFO_DOCTOR_FAILED: 'GET_INFO_DOCTOR_FAILED',

    FETCH_ALLCODE_TIME_SUCCESS: 'FETCH_ALLCODE_TIME_SUCCESS',
    FETCH_ALLCODE_TIME_FAILED: 'FETCH_ALLCODE_TIME_FAILED',

    FETCH_ALL_CLINIC_SUCCESS: 'FETCH_ALL_CLINIC_SUCCESS',
    FETCH_ALL_CLINIC_FAILED: 'FETCH_ALL_CLINIC_FAILED',
})

export default actionTypes;