import React, {Component} from 'react';


const Sidebar = () => {
  return (
    <div className="secondery off-canvas position-left reveal-for-large " id="my-info" data-off-canvas data-position="left">
      <div className="row column">
        
        <h5>{this.props.name}</h5>
        {
          this.state.logout
            ? <button type="button" className="button"  onClick={this.logout}> Logout</button>
            : null
        }       
      </div>
    </div>
  );
}

export default Sidebar;