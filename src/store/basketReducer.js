const defaultState = [
   {id: 1, title: 'Велосипед', count: 5},
   {id: 2, title: 'Самокат', count: 4},
   {id: 3, title: 'Гантели', count: 7},
   {id: 4, title: 'Ракетки', count: 1}

]

const PLUS_ITEM_PAYLOAD = 'PLUS_ITEM_PAYLOAD'
const MINUS_ITEM_PAYLOAD = 'MINUS_ITEM_PAYLOAD'
const ADD_ITEM_PAYLOAD = 'ADD_ITEM_PAYLOAD'



export const basketReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case PLUS_ITEM_PAYLOAD:
           { 
                // console.log('PLUS_ITEM_PAYLOAD', action);
                const {increaseBy, id} = action.payload
                const newState = state.map(el => {
                    if(el.id === id){
                        return {...el, count: el.count + increaseBy}
                    }
                    return el
                })
                return newState
            }

        case MINUS_ITEM_PAYLOAD:
            {
                const {decreaseBy, id} = action.payload
                const newState = state.map(el =>{
                    if(el.id === id){
                        return {...el, count: el.count - decreaseBy}
                    }
                    return el
                }).filter(el => el.count !== 0)
                return newState
        }

        case ADD_ITEM_PAYLOAD:
            {
            // console.log('ADD_ITEM_PAYLOAD', action);
            const newItem = {
                id: Date.now(),
                title: action.payload.title,
                count: 1
            }
            return [...state, newItem]
        }   

        default:
            return state
    } 
}


export const plusItemPayloadAction = (increaseBy, id) =>({type: PLUS_ITEM_PAYLOAD, payload: {increaseBy, id}})
export const minusItemPayloadAction = (decreaseBy, id) =>({type:MINUS_ITEM_PAYLOAD, payload: {decreaseBy, id}})
export const addItemPayloadAction = (title) =>({type: ADD_ITEM_PAYLOAD, payload:{title}})
