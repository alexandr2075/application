import contentReducer from "./Content-reducer"
import dialogsReducer from "./Dialogs-reducer"

let store = {
    _state: {
        contentPage: {
            messagesData: [
                { id: 1, message: 'hi, i lucky!' },
                { id: 2, message: 'hi, i lovely!' },
                { id: 3, message: 'hi, i duck!' },

            ],

            newMessData: 'yogurt',
        },

        dialogsPage: {

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

    },

    _callSubscriber() {
        console.log('State changed')
    },
    getState() {
        return this._state
    },

    subscriber(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.contentPage = contentReducer(this._state.contentPage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }
}




export default store