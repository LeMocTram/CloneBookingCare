import axios from '../axios'
import UserManage from '../containers/System/UserManage';

const handleLoginApi = (email, password) => {
    return axios.post('/api/login', { email, password });
}
const getAllUsers = (inputId) => {
    // template string
    return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserServices = (data) => {
    console.log('check data from service : ', data)
    return axios.post('/api/creat-new-user', data)
}
const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user', { id: userId })
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    })
}
const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData);
}
const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)
}

const getTopDocterHomeService = (limit) => {
    return axios.get(`/api/top-doctor-home?limit=${limit}`)
}

const getAllDoctors = () => {
    return axios.get(`/api/get-all-doctors`)
}

const saveDetailDoctorService = (data) => {
    return axios.post('/api/save-infor-doctors', data)
}
const getDetailInfoDoctor = (inputId) => {
    return axios.get(`/api/get-detail-doctor-by-id?id=${inputId}`)
}
const saveBulkScheduleDoctor = (data) => {
    return axios.post('/api/bulk-create-schedule', data)
}
const getScheduleDoctorByDate = (doctorId, date) => {
    return axios.get(`api/get-schedule-doctor-by-date?doctorId=${doctorId}&date=${date}`)
}
const getExtraInforDoctorById = (doctorId) => {
    return axios.get(`/api/get-extra-infor-doctor-by-id?doctorId=${doctorId}`)
}
const getProfileDoctorById = (doctorId) => {
    return axios.get(`/api/get-profile-doctor-by-id?doctorId=${doctorId}`)
}

const postPatientBookAppointment = (data) => {
    return axios.post('/api/patient-book-appointment', data)
}
const postVerifyBookAppointment = (data) => {
    return axios.post('/api/verify-book-appointment', data)
}
const createNewSpecialty = (data) => {
    return axios.post('/api/create-new-specialty', data)

}
export {
    handleLoginApi,
    getAllUsers,
    createNewUserServices,
    deleteUserService,
    editUserService,
    getAllCodeService,
    getTopDocterHomeService,
    getAllDoctors,
    saveDetailDoctorService,
    getDetailInfoDoctor,
    saveBulkScheduleDoctor,
    getScheduleDoctorByDate,
    getExtraInforDoctorById,
    getProfileDoctorById,
    postPatientBookAppointment,
    postVerifyBookAppointment,
    createNewSpecialty
    
}