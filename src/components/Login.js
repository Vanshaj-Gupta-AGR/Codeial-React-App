import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        this.emailInput=React.createRef();
        this.passwordInput=React.createRef();
    }
    handleFormSubmit=(e)=>{
        e.preventDefault();
        console.log(this.emailInput,this.passwordInput);
    }
    render() {
        return (
           <form className='login-form'>
               <span className='login-signup-header'>Log in</span>
               <div className='field'>
                   <input type="email" placeholder="Email" required ref={this.emailInput}></input>
               </div>
               <div className='field'>
                   <input type="password" placeholder="Password" required ref={this.passwordInput}></input>
               </div>
               <div className='field'>
                  <button onClick={this.handleFormSubmit} >Log In</button>
               </div>
           </form>
        );
    }
}

export default Login;