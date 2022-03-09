const initialState = 0;
function logStatus(state = initialState ,action) {
    switch(action.type) {
        case "LOG" :return 1;
        case "LOGOUT":return 0;
        default : return state;
    }
}

export default logStatus;