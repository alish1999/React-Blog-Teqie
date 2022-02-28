const initialState = 0;
function viewById(state = initialState ,action) {
    switch(action.type) {
        case "GETBLOG" :return action.payload;
        default : return state;
    }
}

export default viewById;