import React from 'react';
import { signUp } from '../api/ApiCalls';
import { withApiProgress } from '../api/ApiProgress';
import Input from '../page_components/userpage_components/Input';
import ProgressButton from '../page_components/userpage_components/ProgressButton';

// App.js teki jsx bloğu yerine class componenti oluşturuldu
class SignUpPage extends React.Component // inheritance
{
    // Uygulamanın durumunu güncel tutmak için kullanılır, class component özelliğidir
    state = 
    {
        username: null, // json obj. olduğu için noktalı virgül koyulmaz
        display_name: null,
        password: null,
        password_repeat: null,

        valErrors: {}

        // pendingApiCall: false, --> Butona tıklanınca disabled olacak değer, ApiProgress ten alınıyor
    };
    
    /*
    Fonk. tanımı, bu şekilde yapılmak yerine ayrı bir yerde bu class a özel oluşturuldu
        <input onChange= {function(event) { console.log(event.target.value); }}/>
    */
    onChange = event => 
    { 
        // console.log(event.target.value); --> konsolda ne yazpıldığına bakmak için açılabilir

        /*
        Aşağıdaki kısım yerine diğeri yapılır
            const value = event.target.value;
            const name = event.target.name;
        */
        
        const {name , value} = event.target; // Object Destructuring

        const valErrors = {...this.state.valErrors}; // Objenin kopyasını alır --> Spread Operator
        valErrors[name] = undefined // Kutu doldurulmaya başlanınca uyarı yazısı silinsin diye yapılır

        if(name === 'password' || name === 'password_repeat')
        {
            if(name === 'password' && value !== this.state.password_repeat)
                valErrors.password_repeat = 'Password mismatch';
            else if(name === 'password_repeat' && value !== this.state.password)
                valErrors.password_repeat = 'Password mismatch';
            else
                valErrors.password_repeat = undefined;
        }

        this.setState( {[name] : value , valErrors} ); 
        // setState, React.Component tan gelir 
        // State bilgisi değişimini haber verir ve render methodunu tekrar çağırır

        // console.log(this.state)
    };

    onClickSignUp = async event =>
    {
        event.preventDefault(); // Default olarak formun bir yere göndermesini önler

        const {username , display_name , password} = this.state;

        const body = 
        { 
            username, // Eğer json objesinde key ve value aynı ise birini yazarız. Yani "username: username" yerine böyle yaptık
            display_name,
            password
        };

        try
        {
            const response = await signUp(body);
        }
        catch (error) 
        {
            if(error.response.data.validationErrors) // 500 hatası alınca program durmasın diye eklenir
            {
                this.setState( {valErrors : error.response.data.validationErrors} );
            }
        }

        /* Yukarıdaki kısım async olmadan da yapılabilir. "onClickSignUp = event" şeklinde değiştirilir ve aşağıdaki blok yazılır

        // then başarı durumunda yani 200de, catch 400 500lü kodlarda çalışır ve bu olaya "promise" denir
        signUp(body)
            .then ( response => 
            { 
                this.setState( {pendingApiCall : false} );
            })
            .catch ( error => 
            {
                this.setState( {valErrors : error.response.data.validationErrors} );
                this.setState( {pendingApiCall : false} );
            })
        */
    };
    
    // Her class componenti mutlaka bir render methodunu override etmelidir
    render() 
    {
        const {pendingApiCall} = this.props;
        const {valErrors} = this.state;
        const {username , display_name , password , password_repeat} = valErrors;

        return(
            <div className ='container'> { /*sağdan soldan boşluklu bir yapı elde ederiz*/ }
                <form>
                    <div>
                        <h1 className ='text-center'>Sign Up</h1>
                    </div>

                    <Input label ='Username' name ='username' error = {username} onChange = {this.onChange}/>
                    <Input label ='Display Name' name ='display_name' error = {display_name} onChange = {this.onChange}/>
                    <Input label ='Password' name ='password' error = {password} type ='password' onChange = {this.onChange}/>
                    <Input label ='Password Repeat' name ='password_repeat' error = {password_repeat} type ='password' onChange = {this.onChange}/>

                    <div className ='text-center'>
                        <ProgressButton onClick = {this.onClickSignUp}
                                        disabled = {pendingApiCall || password_repeat !== undefined}
                                        pendingApiCall = {pendingApiCall}
                                        text = 'Sign Up'/>
                    </div>
                </form>
            </div>
        );
    }
}

const SignUpPageWithApiProgress = withApiProgress(SignUpPage , "/api/1.0/users");

export default SignUpPageWithApiProgress; // index.html e veri gönderebilmek için