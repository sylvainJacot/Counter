
const INITIAL_STATE = {
    currentStateMenuNav : false,
}

const menuNavReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ACTIVATE_MENU_NAV ':
            return {
                ...state,
                currentStateMenuNav: action.payload
            };

     default :
            return state;
    }
};
export default menuNavReducer;