import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    SideIconIsOpen: false,
    showNotifcation: false,
    showActivities: false
};

export const iconsSlice = createSlice({
    name: 'iconsState',
    initialState,
    reducers: {
        changeHeaderIconVisibility: state => {
            state.SideIconIsOpen = !state.SideIconIsOpen;
        },
        showNotifcationHandler: state => {
            state.showNotifcation = !state.showNotifcation;
            state.showActivities = false;
        },
        showActivitiesHandler: state => {
            state.showActivities = !state.showActivities;
            state.showNotifcation = false;
        },
        closeAllIcons: state => {
            state.showActivities = false;
            state.showNotifcation = false;
        }

    }
});

export const
    { changeHeaderIconVisibility,
        showNotifcationHandler,
        showActivitiesHandler,
        closeAllIcons } = iconsSlice.actions;
export const iconsSelector = (state) => state.iconsVisible;

export default iconsSlice.reducer;