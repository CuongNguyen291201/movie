import * as types from '../action/type';

const initialState = {
  idTodo: 1,
  listWork: []
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_WORK:
      return {
        ...state,
        ...{
          idTodo: action.payload.id + 1,
          listWork: [...state.listWork, {
            id: state.idTodo,
            name: action.payload.name,
            done: false
          }]
        }
      }
    case types.DELETE_WORK:
      const id = action.payload.id;
      const newListWork = state.listWork.filter(item => item.id !== id)
      return {
        ...state,
        ...{
          listWork: newListWork
        }
      }
    case types.DONE_WORK:
      const idDone = action.payload.id;
      const newWorks = state.listWork.map(item => {
        return item.id === idDone ? {...item, done: !item.done} : item;
      })
      return {
        ...state,
        ...{
          listWork: newWorks
        }
      }

    default:
      return state;
  }
}

export default todoReducer