const initialState = null;
function logStatus(state = initialState ,action) {
    switch(action.type) {
        case "LOG" :return 1;
        case "LOGOUT":return null;
        default : return state;
    }
}

export default logStatus;