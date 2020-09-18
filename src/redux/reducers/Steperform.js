const initialState = {
  donerprofile: {
    idNumber:'',
    idProofImage: '',
    medDocument: []
  },
  donerprofiledetails: {},
  donerdoc: {
    idNumber:'',
    idProofImage: '',
    medDocument: []
  }
}



export default (state=initialState, action) => {
  const {type , payload } = action;

  console.log('i reach therre.............')

  switch(action.type){
    case "Update_Donerprofile": 
      Object.assign(state.donerprofiledetails,payload)
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

    case "ID_Number_Doner":
      state.donerdoc.idNumber = payload
      return state

    case "ID_Proof_Doner":
      state.donerdoc.idProofImage = payload
      return state

    case "Medical_DOC_Doner":
      state.donerdoc.medDocument.push(payload.fileInfo)
      return state
    
    case "Medical_DOC_Remove_Doner":
      let values_ = [...state.donerdoc.medDocument];
      values_.splice(payload, 1);
      state.donerdoc.medDocument= values_
     


    default:
      return state
  }
}