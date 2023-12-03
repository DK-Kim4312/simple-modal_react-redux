export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

const initialState = {
    isShow: false,
}

/**
 * Root reducer
 * @param {*} state : current state
 * @param {*} action : action to be executed
 * @returns
 */
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                isShow: true,
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                isShow: false,
            }
        case 'TOGGLE_MODAL':
            return {
                ...state,
                isShow: !state.isShow,
            }
        default:
            return state;
    }
}

export default modalReducer;