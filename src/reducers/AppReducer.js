const defaultState = {};


const AppReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "":
            state = {
                ...state,

            };
            break;
        default:
    }
    return state;
};

export default AppReducer;
