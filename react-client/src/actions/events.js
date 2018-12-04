let index = 3;

export const add = data => ({
    id: index++,
    type: 'ADD_EVENT',
    eventName: data.eventName,
    location: data.location
})

export const getById = id => ({
    type: 'GET_EVENT_BY_ID',
    id: id
})

export const update = data => ({
    type: 'UPDATE_EVENT',
    eventName: data.eventName,
    location: data.location
})

export const del = data => ({
    type: 'DELETE_EVENT',
    id: data.id,
})