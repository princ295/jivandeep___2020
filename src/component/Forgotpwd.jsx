
import React from 'react';


const Forgotpwd = () => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog ">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Forgot password</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
              </button>
            </div>
          <div className="modal-body text-center">
            <form onSubmit={this.submitHandler}> 
              <input type="email" className="form-control" 
                placeholder="Enter Registered Email" name="email" />
                             
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="modal-footer">
          {/* <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
          </div>
        </div>
      </div>
    </div> 
  )   
}

export default Forgotpwd;