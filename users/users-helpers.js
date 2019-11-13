
module.exports ={
    validateUsers,
}

function validateUsers(users) {
    let errors = []

    if(!users.username || users.username.length < 2){
        errors.push('please include a username with at least 2 characters')
    }
    if(!users.password || users.password.length < 4){
        errors.push('please include a password with at least 4 characters')
    }
    return {
        isSuccessful: errors.length > 0 ? false : true,
        errors
    }
}