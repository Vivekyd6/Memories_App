

import {FETCH,DELETE,CREATE,UPDATE,LIKE} from '../constants/actionType';


const posts = (posts = [], action) => {
    switch (action.type) {
        case FETCH:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        case UPDATE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case LIKE:
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        default:
            return posts;
    }
};

export default posts;