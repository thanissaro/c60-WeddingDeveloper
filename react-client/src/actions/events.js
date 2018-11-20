export const add = data => ({
    type: 'ADD_EVENT',
    eventName: data.eventName,
    location: data.location
})