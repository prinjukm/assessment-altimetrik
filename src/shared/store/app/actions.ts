import { User } from './types';

export const ActionTypes = {
    SETUSER: 'app/set-user',
};

export const setUser = (user: User) => ({
    type: ActionTypes.SETUSER,
    payload: user,
});
