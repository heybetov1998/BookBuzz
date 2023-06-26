import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signedIn: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signIn: (state) => {
            state.signedIn = true;
        },
        signOut: (state) => {
            state.signedIn = false;
        },
    },
});

export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;
