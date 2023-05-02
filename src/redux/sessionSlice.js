import { createSlice } from "@reduxjs/toolkit";
import { computeHeadingLevel } from "@testing-library/react";

export const sessionSlice = createSlice({
    name: 'sessionSlice',
    initialState: {
        startTime: 0,
        endTime: 0,
        trialCount: 0,
        duration: 0,
        email: '',
        uid: null,
        isAdmin: false,
        key:false,
        token:false,
        wrongCount:0,
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload.email
        },
        setUid: (state, action) => {
            state.uid = action.payload.uid
        },
        setTime: (state, action) => {
            if (action.payload.type == 0) state.startTime = action.payload.startTime
            else state.endTime = action.payload.endTime
        },
        incrementTrial: (state) => {
            state.trialCount += 1
        },
        setDuration: (state, action) => {
            state.duration = action.payload.duration
        },
        setAdmin: (state) => {
            state.isAdmin = true
        },
        resetSession: (state) => {
            state = {
                ...state,
                startTime: 0,
                endTime: 0,
                trialCount: 0,
                duration: 0,
                wrongCount:0,
            }
        },
        setSessionKey: (state,action) => {
            state.key = action.payload.key
        },
        setSessionToken: (state,action) => {
            state.token = action.payload.token
        },
        incrementWrongCount: (state) => {
            state.wrongCount += 1
        }
    },
})

export const { setTime, incrementTrial, setDuration, setEmail, setUid, resetSession, setAdmin,setSessionKey, setSessionToken, incrementWrongCount } = sessionSlice.actions;
export default sessionSlice.reducer;