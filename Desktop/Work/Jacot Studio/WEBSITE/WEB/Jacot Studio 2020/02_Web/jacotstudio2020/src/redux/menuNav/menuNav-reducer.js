
/*
Setting up the initial state
 */

const INITIAL_STATE = {
    menuNav : false,
}

/*
state : initial/current state
action: is an object that has 2 properties : a type and a payload
 */

export const menuNavReducer = (state = INITIAL_STATE, action) => {

/*
Switch is a bit like "If...else.."
 */

    switch (action.type) {
        case 'ACTIVATE_MENU_NAV':
            return {
                ...state,
                menuNav: action.payload;
            }

        default :
            return state;
    }
};