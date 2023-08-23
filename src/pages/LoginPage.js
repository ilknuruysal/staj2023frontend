import React from 'react';
import Input from '../page_components/userpage_components/input';

class LoginPage extends React.Component
{
  state =
  {
    username: null,
    password: null
  };

  onChange = event => 
  { 
      const {name , value} = event.target; // Object Destructuring

      this.setState( {[name] : value} ); 
  };

  render() 
  {
    return(
      <div className ='container'> 
        <form>
          <div>
            <h1 className ='text-center'>Login</h1>
          </div>

          <Input label ='Username' name ='username' onChange = {this.onChange}/>
          <Input label ='Password' name ='password' type ='password' onChange = {this.onChange}/>

          <div className ='text-center'>
            <button className ='btn btn-primary'>Login</button> 
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;