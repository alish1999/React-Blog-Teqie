const initialState = "RandomUser";
function changeTheUser(state = initialState ,action) {
    switch(action.type) {
        case "SETUSER" :return action.payload;
        default : return state;
    }
}

export default changeTheUser;