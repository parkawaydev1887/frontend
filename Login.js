import React from 'react';
import fire from './config/fire';

class Login extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
      email: '',
      password: ''
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
  let target = e.target;
  let name = target.name;
  let value = target.value;

  this.setState({
    [name]: value
  });
  }

  handleSubmit(e) {
  e.preventDefault();

  console.log('The form was submitted with the following data:');
  console.log(this.state);
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Logged In');
      })
      .catch((err) => {
        console.log('Error: ' + err.toString());
      })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>

        <div className ="logintitle"> <h1>ParkAway</h1></div>
        <div className ="loginslogan"> <h2>3... 2... 1... Park.</h2></div>

          <div className ="Email">Email</div>
          <input id="email" placeholder="example@gmail.com" type="email" name="email" value={this.state.email} onChange={this.handleChange}/>


        <div>
          <div className ="Password">Password</div>
          <input id="password" placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        </div>

        <div classname = "FormField">
            <button className="FormField__Button mr-20" style={{ background: '#B22222',color: 'white'}} onClick={this.login}>Sign In</button>
        </div>
        <div classname = "FormField">
            <button className="FormField__Button mr-20" style={{ background: 'white',color: '#B22222' }}onClick={this.signUp}>Sign Up</button>
        </div>
        <div classname = "FormField">
            <button className="FormField__Button mr-20" style={{ background: 'white',color: '#B22222' }}onClick={this.signUp}>Continue as Guest </button>
        </div>
        </form>
      </div>
    )
  }
}

export default Login;
