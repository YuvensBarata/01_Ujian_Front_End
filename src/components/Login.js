import React, { Component } from 'react';
import "../styles/login.css";

class Login extends Component {
    
    handleSubmit = () => {
        
        let user = this.refs.name.value;
        this.props.onSubmit(user);
        console.log(user);
    }

  render() {

    return(
        <div className = "login-menu">
            <form>
                <div className = "form-bar form-group">
                    <label htmlFor = "nama" className = "col-form-label">Name</label>
                        <div>
                            <input className = "form-control" type = "text" ref = "name" id = "nama" placeholder = "Enter your name" />
                        </div>
                </div>
            </form>

            <div>
                <button className = "btn btn-info btn-submit" id = "submit" onClick = {() => {this.handleSubmit();}}>Submit</button>
            </div>
        </div>
    );
  }
}

export default Login;