import actionTypes from './actionTypes';
import {
    getAllCodeService, createNewUserServices,
    getAllUsers, deleteUserService, editUserService, getTopDocterHomeService, getAllDoctors, saveDetailDoctorService
} from '../../services/userService';
import { toast } from 'react-toastify';
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START
// })
export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })


            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                // console.log('check get state: ', getState)
                dispatch(fetchGenderSuccess(res.data))
            } else {
                dispatch(fetchGenderFailed());
            }
        } catch (e) {
            dispatch(fetchGenderFailed());

            console.log('fetchGenderStart error', e)
        }
    }

}
export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData
})
export const fetchGenderFailed = () => ({
    type: actionTypes.FETCH_GENDER_FAILED
})

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })


            let res = await getAllCodeService("POSITION");
            if (res && res.errCode === 0) {
                // console.log('check get state: ', getState)
                dispatch(fetchPositionSuccess(res.data))
            } else {
                dispatch(fetchPositionFailed());
            }
        } catch (e) {
            dispatch(fetchPositionFailed());

            console.log('fetchGenderStart error', e)
        }
    }

}
export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData
})
export const fetchPositionFailed = () => ({
    type: actionTypes.FETCH_POSITION_FAILED
})

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({ type: actionTypes.FETCH_GENDER_START })


            let res = await getAllCodeService("ROLE");
            if (res && res.errCode === 0) {
                // console.log('check get state: ', getState)
                dispatch(fetchRoleSuccess(res.data))
            } else {
                dispatch(fetchRoleFailed());
            }
        } catch (e) {
            dispatch(fetchRoleFailed());

            console.log('fetchGenderStart error', e)
        }
    }

}

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserServices(data);
            console.log('check create user redux: ', res)
            if (res && res.errCode === 0) {
                toast.success("Create new user success!");
                dispatch(saveUserSuccess())
                dispatch(fetchAllUsersStart());
            } else {
                dispatch(saveUserFailed());
            }
        } catch (e) {
            dispatch(saveUserFailed());

            console.log('saveUserFailed error', e)
        }
    }
}

export const saveUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS
})
export const saveUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAILED
})


export const deleteUser = (userId) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(userId);

            if (res && res.errCode === 0) {
                toast.success("Delete user success!");
                dispatch(deleteUserSuccess())
                dispatch(fetchAllUsersStart());
            } else {
                toast.error('delete failed');
                dispatch(deleteUserFailed());
            }
        } catch (e) {
            toast.error('delete failed');

            dispatch(deleteUserFailed());
            console.log('deleteUserFailed error', e)
        }
    }
}

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS
})
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAILED
})

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData
})
export const fetchRoleFailed = () => ({
    type: actionTypes.FETCH_ROLE_FAILED
})

// start diong end

export const fetchAllUsersStart = () => {
    return async (dispatch, getState) => {
        try {

            let res = await getAllUsers("ALL");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUsersSuccess(res.users.reverse()));
            } else {
                toast.error('Fetch all users error!')
                dispatch(fetchAllUsersFailed());
            }
        } catch (e) {
            toast.error('Fetch all users error!')
            dispatch(fetchAllUsersFailed());

            console.log('fetchAllUsersFailed error', e)
        }
    }

}
export const fetchAllUsersSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_SUCCESS,
    users: data
})

export const fetchAllUsersFailed = (data) => ({
    type: actionTypes.FETCH_ALL_USERS_FAILED,

})

export const editUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await editUserService(data);

            if (res && res.errCode === 0) {
                toast.success("Update user success!");
                dispatch(editUserSuccess())
                dispatch(fetchAllUsersStart());
            } else {
                toast.error('Update failed');
                dispatch(editUserFailed());
            }
        } catch (e) {
            toast.error('Update failed');

            dispatch(editUserFailed());
            console.log('editUserFailed error', e)
        }
    }
}

export const editUserSuccess = () => ({
    type: actionTypes.EDIT_USER_SUCCESS
})
export const editUserFailed = () => ({
    type: actionTypes.EDIT_USER_FAILED
})


// let res1 = await getTopDocterHomeService(3);
export const fetchTopDoctor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getTopDocterHomeService('');
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_SUCCESS,
                    dataDoctors: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_TOP_DOCTORS_FAILED
                })
            }
        } catch (e) {
            console.log('FETCH_TOP_DOCTORS_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_TOP_DOCTORS_FAILED
            })

        }
    }
}

export const fetchAllDoctors = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllDoctors();
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_SUCCESS,
                    dataDr: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALL_DOCTORS_FAILED
                })
            }
        } catch (e) {
            console.log('FETCH_ALL_DOCTORS_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALL_DOCTORS_FAILED
            })

        }
    }
}

export const saveDetailDoctors = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await saveDetailDoctorService(data);
            if (res && res.errCode === 0) {
                toast.success("Save infor detail doctor success!");
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_SUCCESS,
                })
            } else {
                toast.error('Save error')
                dispatch({
                    type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED
                })
            }
        } catch (e) {
            console.log('SAVE_DETAIL_DOCTORS_FAILED: ', e)
            dispatch({
                type: actionTypes.SAVE_DETAIL_DOCTOR_FAILED
            })

        }
    }
}

export const fetchAllScheduleTime = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME");
            if (res && res.errCode === 0) {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_SUCCESS,
                    dataTime: res.data
                })
            } else {
                dispatch({
                    type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED
                })
            }
        } catch (e) {
            console.log('FETCH_ALLCODE_SCHEDULE_TIME_FAILED: ', e)
            dispatch({
                type: actionTypes.FETCH_ALLCODE_SCHEDULE_TIME_FAILED
            })

        }
    }
}


export const getRequiredDoctorInfor = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllCodeService("TIME");

            dispatch({ type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_START })

            let resPrice = await getAllCodeService("PRICE");
            let resPayment = await getAllCodeService("PAYMENT");
            let resProvince = await getAllCodeService("PROVINCE")

            if (resPrice && resPrice.errCode === 0
                && resPayment && resPayment.errCode === 0
                && resProvince && resProvince.errCode === 0) {
                let data = {
                    resPrice: resPrice.data,
                    resPayment: resPayment.data,
                    resProvince: resProvince.data
                }
                dispatch(fetchRequiredDoctorInforSuccess(data))

            } else {
                dispatch(fetchRequiredDoctorInforFailed());
            }
        } catch (e) {
            dispatch(fetchRequiredDoctorInforFailed());
        }
    }
}
export const fetchRequiredDoctorInforSuccess = (allRequiredData) => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_SUCCESS,
    data: allRequiredData
})
export const fetchRequiredDoctorInforFailed = () => ({
    type: actionTypes.FETCH_REQUIRED_DOCTOR_INFOR_FAIDED
})