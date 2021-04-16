import produce from "immer"

const initialState = {
    todos: []
}


export default produce((draft, action = {}) => {
    switch (action.type) {
        case 'GET_ALL_TODOS':
            draft.todos = action.payload
            break;
        case 'ACTIVE_TODO':
            draft.todos = action.payload
            break;
        case 'DELETE_TODO':
            const datdelete = draft.todos.findIndex(i => i.slug === action.payload)
            if (datdelete !== -1) draft.todos.splice(datdelete, 1)
            return draft
        default:
    }
},
    initialState
)