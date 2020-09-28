
const initialState = {
  document: []
}


export default(state=initialState, action)=>{
  
  const {type, payload} = action; 
  switch(type){

    case "Cadover_Medical_DOC":
        state.document.push(payload.fileInfo)
        console.log(state)
        return state
  
    case "Cadover_Medical_DOC_Remove":
        let values = [...state.document];
        values.splice(payload, 1);
        console.log(state)
        state.document= values
        console.log(state)
    default: 
        return state
  }
}

