
const INITIAL_STATE = {
    currentStateMenuNav : false,
}

export const menuNavReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ACTIVATE_MENU_NAV':
            return {
                ...state,
                currentStateMenuNav: action.payload
            }

        default :
            return state;
    }
};