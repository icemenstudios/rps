import React, { Component } from 'react';

class User extends Component {
  constructor(props){
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.enterPressed = this.enterPressed.bind(this);
  }
  handleInput(event){
    const userName = event.target.value;
    this.props.getName(userName);
  }
  enterPressed(event){
    //event.preventDefault();
    const code = event.keyCode || event.which;
    if (code===13){
      console.log("enter");
      const userName = event.target.value;
      this.props.getName(userName);
      this.props.onEnter(event);

    }


  }
  render() {
    return (
      <div className="User">
          <form>
            <input type="text" id="userName" onChange={this.handleInput} onKeyPress={this.enterPressed}></input>
          </form>
      </div>
    )
  }
}

export default User;
