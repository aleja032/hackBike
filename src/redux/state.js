
import { loadLocalStorage } from "../localStorage/localStorage";

export const initialState = {
    commentsLocalStorage: loadLocalStorage('comments'),
    infoBikes: [],
    reservas: [],
    status: 'idle', 
    error: null,
};