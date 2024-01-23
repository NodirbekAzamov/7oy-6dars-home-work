import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    count1: 0,
    array: [0],
    users: [
        { id: 1, first_name: 'John', last_name: 'Doe', age: 15, email: 'john@example' },
        { id: 2, first_name: 'Javlon', last_name: 'Dostonov', age: 29, email: 'john@example' },
        { id: 3, first_name: 'Palonchi', last_name: 'Pistonchiyiv', age: 56, email: 'john@example' },
    ],
    search_arr: [],
    modal: false,
    defualtValue: "",
    index: "",
}

const countSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state, action) {
            state.count += action.payload;
        },

        increment1(state) {
            state.count1 += 1;
        },

        increment_arr(state, action) {
            state.array.push(action.payload);
        },

        decrement_index(state, action) {
            state.array[action.payload] -= 1;
        },
        increment_index(state, action) {
            state.array[action.payload] += 1;
        },

        users(state) {
            state.users = users
        },

        search(state, action) {
            if (action.payload) {
                let filtered = action.payload ? state.users.filter(item => item.first_name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase())) : state.users
                state.search_arr = filtered
            } else {
                state.search_arr = state.users
            }
        },

        openModal(state,) {
            state.modal = true
        },

        toggle(state) {
            state.modal = false
            state.defualtValue = ""
        },

        addUser(state, action) {
            if (state.defualtValue === "") {
                state.search_arr.push(action.payload)
            } else {
                state.search_arr.splice(state.index, 1, action.payload)
            }
            state.modal = false
        },

        editOpen(state, action) {
            state.modal = true
            state.defualtValue = action.payload
        },
        editOpen2(state, action) {
            state.index = action.payload
        },



    }
})

export const { increment, increment1, decrement_index, increment_index, increment_arr, users, search, addUser, openModal, toggle, editOpen, editOpen2 } = countSlice.actions
export default countSlice.reducer