// import { clone } from '../utils'

export default (state = "yoooo", action) => {
    switch (action.type) {
        case 'TESTING':
            return state;
        default:
            return state;
    }
};
