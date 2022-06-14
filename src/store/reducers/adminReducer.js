import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoadingGender: false,
    genders: [],
    role: [],
    position: [],
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let startGenderState = { ...state };
            startGenderState.isLoadingGender = true;
            return {
                ...startGenderState
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let successGenderState = { ...state };
            successGenderState.genders = action.data;
            successGenderState.isLoadingGender = false;
            return {
                ...successGenderState
            }
        case actionTypes.FETCH_GENDER_FAILED:
            state.isLoadingGender = false;
            state.genders = [];
            return {
                ...state
            }


        case actionTypes.FETCH_POSITION_START:
            let startPositionState = { ...state };
            startPositionState.isLoadingGender = true;
            return {
                ...startPositionState
            }
        case actionTypes.FETCH_POSITION_SUCCESS:
            let successPositionState = { ...state };
            successPositionState.position = action.data;
            successPositionState.isLoadingGender = false;
            return {
                ...successPositionState
            }
        case actionTypes.FETCH_POSITION_FAILED:
            state.isLoadingGender = false;
            state.position = [];
            return {
                ...state
            }


        case actionTypes.FETCH_ROLE_START:
            let startRoleState = { ...state };
            startRoleState.isLoadingGender = true;
            return {
                ...startRoleState
            }
        case actionTypes.FETCH_ROLE_SUCCESS:
            let successRoleState = { ...state };
            successRoleState.role = action.data;
            successRoleState.isLoadingGender = false;
            return {
                ...successRoleState
            }
        case actionTypes.FETCH_ROLE_FAILED:
            state.isLoadingGender = false;
            state.role = [];
            return {
                ...state
            }

        default:
            return state;
    }
}

export default adminReducer;