import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        // this.emailInput=React.createRef();
        // this.passwordInput=React.createRef();

        this.state={
            email:'',
            password:''
        }
    }
    handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state.email,this.state.password);
    }
    handleEmailChange=(e)=>{
        this.setState({
            email: e.target.value
        })
    }
    handlepasswordChange=(e)=>{
        this.setState({
            password: e.target.value
        })
    }
    render() {
        return (
           <form className='login-form'>
               <span className='login-signup-header'>Log in</span>
               <div className='field'>
                   <input type="email" placeholder="Email" required onChange={this.handleEmailChange} value={this.state.email}></input>
               </div>
               <div className='field'>
                   <input type="password" placeholder="Password" required onChange={this.handlepasswordChange} value={this.state.password}></input>
               </div>
               <div className='field'>
                  <button onClick={this.handleFormSubmit} >Log In</button>
               </div>
           </form>
        );
    }
}

export default Login;