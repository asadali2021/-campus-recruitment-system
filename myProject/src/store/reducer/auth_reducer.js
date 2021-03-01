const INITIAL_STATE = {
    username: 'Asad Ali',
    email: 'asadali@gmail.com',
}
export default (state = INITIAL_STATE , action) => {    // dispatch mei jo bhi pass karen gy woh humein action k andar mily ga
    console.log('auth_action ===>' , action)          // jab bhi dispatch call hoga toh action humein mil jaye ga
    return state;
}