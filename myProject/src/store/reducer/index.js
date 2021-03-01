// const INITIAL_STATE = {
//     users:[
//         {
//         name: 'Asad',
//         email:'asad@gmail.com',
//     }
// ]
// }

const INITIAL_STATE = {
    users:[{"-MST_lmVNXeV2utFR4Rf": {"age": "17", "bloodgroup": "A", "contact": "5", "email": "ahsan@gmail.com", "minfo": "Fit", "name": "Ahsan", "password": "ahsan123", "uid": "-MST_lmVNXeV2utFR4Rf"}, "-MSTaA39YDE6fvx9ocij": {"age": "22", "bloodgroup": "A", "contact": "5", "email": "abid@gmail.com", "minfo": "Fit", "name": "Abid", "password": "abid123", "uid": "-MSTaA39YDE6fvx9ocij"}, }],
    loginUser : '',
    postdetail: ''
}


export default (state = INITIAL_STATE , action) => {
    // console.log('action==>' , action.payLoad)
    switch (action.type) {
        // case 'apple':
        //     return(
                
        //         {
        //         ...state,
        //         users:[...state.users, action.data1],
                
        //     }
        //     )
            case 'apple':
            return(
                
                {
                
                users:[action.payLoad.data1],
                loginUser : action.payLoad.obj.email,
                postdetail: [action.payLoad.data1],
                
            }
            )
            
    //     case 'SETDATAaaaaa':
    //         return(
    //             console.log("chal raha hai ...",action.data)
               
            
    // )
}
    return state;
}