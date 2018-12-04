const initialState=[
    {
        id: 1,
        eventName: 'JS + .Net Wedding',
        location: 'The ROW, DTLA'
    },
    {
        id:2,
        eventName: 'Wedding 2',
        location: 'Las Vegas, NV' 
    }
]

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EVENT':
            return [
                ...state,
                {
                    id: action.id,
                    eventName: action.eventName,
                    location: action.location
                }
            ]
        case 'GET_EVENT_BY_ID':
            const itemArray = state.filter(item => item.id === action.id)
            const obj = itemArray.length > 0 ? itemArray[0] : {};
            return obj;
        default:
            return state;
    }
}

export default reducer;