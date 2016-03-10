export default function(state = {items: [{title: 'Todo Item', isComplete: false}]}, action) {
  switch(action.type){
    case "ADDNEWITEM": {
      if(action.payload.keyCode == 13){
        return {items: [...state.items, {title: action.payload.target.value, isComplete: false}]};
      } else {
        return state;
      }
    }
  }

  return state;
}
