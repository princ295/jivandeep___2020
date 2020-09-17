const initialState = {
  donerprofile: {
    idNumber:'',
    idProofImage: '',
    medDocument: []
  },
  donerprofiledetails: {},
  donerdoc: {}
}



export default (state=initialState, action) => {
  const {type , payload } = action;

  console.log('i reach therre.............')

  switch(action.type){
    case "Update_Donerprofile": 
      Object.assign(state.donerprofile,payload)
      return state
    case "ID_Number":
      state.donerprofile.idNumber = payload
      return state
    case "ID_Proof":
      state.donerprofile.idProofImage = payload
      return state
    case "Medical_DOC":
      state.donerprofile.medDocument.push(payload.fileInfo)
      return state

    case "Medical_DOC_Remove":
      let values = [...state.donerprofile.medDocument];
      values.splice(payload, 1);
      state.donerprofile.medDocument= values
    default:
      return state
  }
}