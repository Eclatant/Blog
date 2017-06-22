export function toggleComplete(itemId) {
  return {
    type: 'TOGGLE_COMPLETE',
    itemId,
  };
}

export function changeFilter(filter) {
  return {
    type: 'CHANGE_FILTER',
    filter,
  };
}

export function editItem(itemId) {
  return {
    type: 'EDIT_ITEM',
    itemId,
  };
}

export function doneEditing(itemId, newText) {
  return {
    type: 'DONE_EDITING',
    itemId,
    newText,
  };
}

export function cancelEditing(itemId) {
  return {
    type: 'CANCEL_EDITING',
    itemId,
  };
}

export function clearCompleted() {
  return {
    type: 'CLEAR_COMPLETED',
  };
}

export function deleteItem(itemId) {
  return {
    type: 'DELETE_ITEM',
    itemId,
  };
}

export function addItem(text) {
  return {
    type: 'ADD_ITEM',
    text,
  };
}

// import { List, Map } from 'immutable';
// import ToDo from './ToDoAction';
// export function initState() {
//   return dispatch => (
//     dispatch({
//       type: ToDo.SET_STATE,
//       payload: Map({
//         todos: List.of([
//               Map({ id: 1, text: 'React', status: 'active', editing: false }),
//               Map({ id: 2, text: 'Redux', status: 'active', editing: false }),
//               Map({ id: 3, text: 'Immutable', status: 'active', editing: false }),
//             ]),
//         filter: 'all',
//       },
//     ) })
//   );
// }
