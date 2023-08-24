import React from 'react';
import { login } from '../api/ApiCalls';
import { withApiProgress } from '../api/ApiProgress';
import Input from '../page_components/userpage_components/Input';
import ProgressButton from '../page_components/userpage_components/ProgressButton';

class LoginPage extends React.Component
{
  state =
  {
    username: null,
    password: null,

    error: null
  };

  onChange = event => 
  { 
      const {name , value} = event.target; // Object Destructuring

      this.setState( {[name] : value , error : null}); // Kutularda değişiklik olunca error mesajı hala orada kalmasın diye
  };

  onClickLogin = async event =>
  {
      event.preventDefault(); 

      const credentials = 
      { 
          username : this.state.username,
          password : this.state.password
      };

      this.setState( {error : null}); // Arka arkaya istek açılınca karışıklık olmasın diye 

      try
      {
        await login(credentials); // Direkt state olarakta verilebilridi ama sonraki değişikliklerde bu mantıklı olmaz
      }
      catch (apiError) 
      {
        this.setState( {error : apiError.response.data.message} );
      }
  };

  render() 
  {
    const {pendingApiCall} = this.props;
    const {username , password , error} = this.state;
    
    const buttonEnabled = username && password; // username ve password varsa anlamına gelir

    return(
      <div className ='container'> 
        <form>
          <div>
            <h1 className ='text-center'>Login</h1>
          </div>

          <Input label ='Username' name ='username' onChange = {this.onChange}/>
          <Input label ='Password' name ='password' type ='password' onChange = {this.onChange}/>

          {error && <div class ='alert alert-danger'>{error}</div>}
          { /*Eğer error varsa bu kutuyu aç anlamına gelir. 
              js te bir değişkenin değeri null, undefined, 0 ya da boş string ise false kabul edilir*/ }

          <div className ='text-center'>
            <ProgressButton onClick = {this.onClickLogin}
                            disabled = {!buttonEnabled || pendingApiCall}
                            pendingApiCall = {pendingApiCall}
                            text = 'Login'/>
          </div>
        </form>
      </div>
    );
  }
}

export default withApiProgress(LoginPage , "/api/1.0/auth");