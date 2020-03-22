const INITIAL_STATE = {
    currentStateMenuNav : true,
}

const menuNavReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'TOGGLE_MENU_NAV':
            return {
                ...state,
                currentStateMenuNav: !state.currentStateMenuNav
                /* No need to pass the payload because it is just true/false state */
            };

     default :
            return state;
    }
};
export default menuNavReducer;