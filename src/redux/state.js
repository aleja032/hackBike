
import { loadLocalStorage } from "../localStorage/localStorage";

export const initialState = {
    commentsLocalStorage: loadLocalStorage('comments'),
    infoBikes: [],
    status: 'idle', 
    error: null,
};