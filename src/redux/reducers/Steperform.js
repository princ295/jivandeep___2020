const initialState = {
  donerprofile: {},
  donerprofiledetails: {},
  donerdoc: {}
}

export default (state=initialState, action) => {
  const {type , payload } = action;

  console.log('i reach therre.............')

  switch(action.type){
    case "Update_Donerprofile": 
      Object.assign(state.donerprofile,payload)
    default: 
      return state
  }
}