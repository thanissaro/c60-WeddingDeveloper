const initialState=[
    {
        eventName: 'Event 1',
        location: 'Location 1'
    },
    {
        eventName: 'Event 2',
        location: 'Location 2' 
    }
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return [
                ...state,
                {
                    eventName: action.eventName,
                    location: action.location
                }
            ]
            break;
        default:
            return state;
    }
}

export default reducer;