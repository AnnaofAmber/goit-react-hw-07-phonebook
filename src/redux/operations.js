import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit"
const BASE_URL = 'https://653927fee3b530c8d9e80563.mockapi.io'

export const fetchContacts = createAsyncThunk(
    "contacts/fetchAll", async(_, thunkAPI) => {
        try{
            const response = await axios.get("/contacts")
            return response.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const addContact = createAsyncThunk(
    "contacts/addContact", async(name, thunkAPI) => {
        try{
            const response = await axios.post("/contacts", {name})
            return response.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)
export const deleteContact = createAsyncThunk(
    "contacts/deleteContact", async(contactId, thunkAPI) => {
        try{
            const response = await axios.post(`/contacts/${contactId}`)
            return response.data
        }
        catch(error){
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)