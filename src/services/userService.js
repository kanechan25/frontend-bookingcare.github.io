import axios from "../axios";

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
}

const getAllUser = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService = (data) => {
    console.log('data in axios.post will be: ', data)
    return axios.post('/api/create-new-user', data);

}

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId,
        }
    });

}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData );
}

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}
const getDoctorHomeService = (limit) => {
    return axios.get(`/api/top-doctor?limit=${limit}`);
}

const getAllDoctorService = () => {
    return axios.get(`/api/all-doctor`);
}

const saveInfoDoctorService = (data) => {
    return axios.post(`/api/save-info-doctor`, data);
}

const getInfoDoctorService = (inputId) => {
    return axios.get(`/api/get-info-doctor-by-id?id=${inputId}`);
}

export { 
    handleLoginApi, 
    getAllUser, 
    createNewUserService, 
    deleteUserService, 
    editUserService,
    getAllCodeService,
    getDoctorHomeService,
    getAllDoctorService,
    saveInfoDoctorService,
    getInfoDoctorService,
} 
