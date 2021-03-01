const INITIAL_STATE = {
    app_name: 'Chat App',
    email: 'ali@gmail.com',
}
export default (state = INITIAL_STATE ,action) => {   // dispatch mei jo bhi pass karen gy woh humein action k andar mily ga
    console.log('app_action ===>' , action)          // jab bhi dispatch call hoga toh action humein mil jaye ga

    switch (action.type) {
        case 'SETDATA':
            return({
                ...state,
                app_name: action.data,
            })
    }
    return state;
}