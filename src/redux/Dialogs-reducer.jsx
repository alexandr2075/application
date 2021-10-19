let ADD_MESSAGE = 'ADD-MESSAGE'
let UPDATE_MESSAGE = 'UPDATE-MESSAGE'

let initialState = {

        dialogData: [
                { id: '1', name: 'dima' },
                { id: '2', name: 'goga' },
                { id: '3', name: 'hola' },
                { id: '4', name: 'lima' }
        ],

        phraseData: [
                { id: '1', phrase: 'Pronto!' },
                { id: '2', phrase: 'Gracia!' },
                { id: '3', phrase: 'Arrivederchi!' },
                { id: '4', phrase: 'Ciao!' }
        ],

        newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

        switch (action.type) {
                case ADD_MESSAGE: {
                        return {
                                ...state,
                                phraseData: [...state.phraseData, { id: '5', phrase: state.newMessageText }],
                                newMessageText: ''

                        }
                }
                case UPDATE_MESSAGE: {
                        return {
                                ...state,
                                newMessageText: action.body
                        }
                }

                default:
                        return state
        }
}

export const addMessageCreator = () => ({ type: ADD_MESSAGE })
export const updateMessageCreator = (body) => ({ type: UPDATE_MESSAGE, body: body })

export default dialogsReducer