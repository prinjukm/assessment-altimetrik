/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';
import { AppState, User } from './types';

export const app = (state: { app: AppState }): AppState => state.app;

export const getLocale = createSelector([app], (app): User => app.user);
