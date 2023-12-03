export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';

const initialState = {
    modal: {
        isShow: false,

    }
}

/**
 * Root reducer
 * @param {*} state : current state
 * @param {*} action : action to be executed
 * @returns
 */
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return {
                ...state,
                modal: {
                    isShow: true,
                }
            }
        case 'CLOSE_MODAL':
            return {
                ...state,
                modal: {
                    isShow: false,
                }
            }
        case 'TOGGLE_MODAL':
            return {
                ...state,
                modal: {
                    isShow: !state.modal.isShow,
                }
            }
        default:
            return state;
    }
}

export default rootReducer;