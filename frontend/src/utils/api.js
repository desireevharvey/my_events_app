import axios from 'axios'


// Create Event Route

export async function createEvent(formData) {
    const { data } = await axios.post('http://localhost:8000/event', formData, config)
    return data
}


// Get all events

export async function getAllProducts() {
    const { data } = await axios.get('http://localhost:8000/product')
    return data
}