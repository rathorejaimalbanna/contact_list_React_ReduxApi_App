import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Initial state for the contact slice
const INITIAL_STATE = {
    contacts:[]
};

// Async thunk for fetching contacts
export const contactAsync = createAsyncThunk("contact/fetchContactAsync", async (payload) => {
    const res = await fetch(payload);
    const data = await res.json();
    return data;
});

// Async thunk for adding a contact
export const addContactAsync = createAsyncThunk("contact/addContact", async (payload) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            id: "",
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            address: { city: payload.city }
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const data = await res.json();
    data.id = Math.random();
    return data;
});

// Async thunk for deleting a contact
export const deleteContactAsync = createAsyncThunk("contact/deleteContact", async (payload) => {
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE'
    });
    const data = {
        id: payload.id
    };
    return data;
});

// Async thunk for updating a contact
export const updateContactAsync = createAsyncThunk("contact/updateContact", async (payload) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: payload.id,
            name: payload.name,
            email: payload.email,
            phone: payload.phone,
            address: { city: payload.city }
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    const data = await res.json();
    data.id = payload.id;
    return data;
});

// Slice for contact management
const contactSlice = createSlice({
    name:'contact',
    initialState:INITIAL_STATE,
    extraReducers:(builder)=>{
        builder.addCase(contactAsync.fulfilled,(state,action)=>{
            state.contacts = action.payload;
        })
        .addCase(addContactAsync.fulfilled,(state,action)=>{
            state.contacts.push(action.payload);
        })
        .addCase(deleteContactAsync.fulfilled,(state,action)=>{
            state.contacts = state.contacts.filter((item)=> item.id !== action.payload.id);
        })
        .addCase(updateContactAsync.fulfilled,(state,action)=>{
            state.contacts = state.contacts.map((item)=> {
                if(item.id === action.payload.id) {
                    item.name = action.payload.name;
                    item.address.city = action.payload.address.city;
                    item.phone = action.payload.phone;
                    item.email = action.payload.email;
                }
                return item;
            });
        });
    }
});

// Exporting reducer, actions, and selectors
export const contactReducer = contactSlice.reducer;
export const contactActions = contactSlice.actions;
export const contactSelectors = (state)=> state.contactReducer;
