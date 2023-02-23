import axios from 'axios'

const config = {
    headers: {
        'Authorization': localStorage.getItem('token')
    }
}

//USER AXIOS ROUTES 

// Log in to User Account
export async function userLogIn(formData) {
    const { data } = await axios.post('user/login', formData)
    return data
}

// Sign Up User Account 
export async function userSignUp(formData) {
    const { data } = await axios.post('user/signup', formData)
    return data
}


// Show User 

export async function getUserAccount(userId) {
    const { data } = await axios.get(`user/${userId}`, config)
    return data
}

// Delete User and Associated Events

export async function deleteUserAccount(userId) {
    await axios.delete(`user/${userId}`, config)
}

// PRODUCTS AXIOS ROUTES

// Create Event Route

export async function createEvent(formData) {
    const { data } = await axios.post('event', formData, config)
    return data
}

// Get token data
export async function getToken() {
    const { data } = await axios.get('user/token', config)
    return data
}

// Get Only The Logged In Users Events
export async function getUserEvents(userId) {
    const { data } = await axios.get(`user/get/${userId}`)
    return data
}

// Get all events

export async function getAllEvents() {
    const { data } = await axios.get('/event')
    return data
}


// Show One Event

export async function showOneEvent(itemId) {
    const { data } = await axios.get(`event/${itemId}`)
    return data
}

// Update a Event

export async function updateOneEvent(itemId, editedState) {
    const { data } = await axios.put(`event/${itemId}`, editedState, config)
    return data
}

// Delete a event

export async function deleteOneEvent(itemId) {
    await axios.delete(`event/${itemId}`, config)
}

