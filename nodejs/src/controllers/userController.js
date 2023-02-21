import userService from '../services/userService';

let handleLoging = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }

    let userData = await userService.handleUserLogin(email, password)
    //check email exist
    //password nhap vao ko dung
    //return userInfor
    // access_token :JWT json web token

    return res.status(200).json({
        errCode: userData.errCode,
        message: userData.errMessage,
        user: userData.user ? userData.user : {}
    })
}

let handleGetAllUsers = async (req, res) => {
    let id = req.query.id; // All, id
    if (!id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameter',
            users: []
        })

    }
    let users = await userService.getAllUsers(id);

    return res.status(200).json({
        errCode: 0,
        errMessage: 'ok',
        users
    })
}

let handleCreatNewUser = async (req, res) => {
    let message = await userService.creatNewUser(req.body);
    console.log(message);
    return res.status(200).json(message);
}

let handleEditNewUser = async (req, res) => {
    let data = req.body;
    let message = await userService.updateUserData(data);
    return res.status(200).json(message)

}
let handleDeleteNewUser = async (req, res) => {
    if (!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: 'missing require parameter!'
        })
    }
    let message = await userService.deleteUser(req.body.id);
    console.log(message);
    return res.status(200).json(message);
}
let getAllCode = async (req, res) => {

    try {
        let data = await userService.getAllCodeService(req.query.type);
        return res.status(200).json(data);
    } catch (e) {
        console.log('get allcode error: ', e)
        return res.status(200).json({
            errCode: -1,
            errMessage: 'Error from server'
        })
    }
}
module.exports = {
    handleLoging: handleLoging,
    handleGetAllUsers: handleGetAllUsers,
    handleCreatNewUser: handleCreatNewUser,
    handleEditNewUser: handleEditNewUser,
    handleDeleteNewUser: handleDeleteNewUser,
    getAllCode: getAllCode
}