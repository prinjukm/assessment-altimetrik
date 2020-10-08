export type User = {};

export type AppState = Readonly<{
    user: User;
}>;

export type Action = {
    type: string;
    payload: any;
};
