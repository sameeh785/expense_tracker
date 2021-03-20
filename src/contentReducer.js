export default function reduncer(state,action) {
//   state = {...state}
    switch (action.type) {
        case "New Transaction":
         return [action.payload, ...state];
            
        case "Delete Transaction":
         return [...action.data]
            
        default:
            return state;
    }

    
}