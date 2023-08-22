import React from 'react';
import { signUp } from '../api/apiCalls';
import Input from '../signuppage_components/input';

// App.js teki jsx bloğu yerine class componenti oluşturduk
class SignUpPage extends React.Component // inheritance
{
    // Uygulamanın durumunu güncel tutmak için kullanılır, class component özelliğidir
    state = 
    {
        username: null, // json obj. olduğu için noktalı virgül koyulmaz
        display_name: null,
        password: null,
        password_repeat: null,

        pendingApiCall: false, // Butona tıklanınca disabled olacak değer
        valErrors: {}
    };
    
    /*
    Fonk. tanımını bu şekilde yapmak yerine ayrı bir yerde bu class a özel oluşturuyoruz
        <input onChange= {function(event) { console.log(event.target.value); }}/>
    */
    onChange = event => 
    { 
        // console.log(event.target.value); --> konsolda ne yaptığımıza bakmak istersek açılabilir

        /*
        Aşağıdaki kısım yerine diğeri yapılır
            const value = event.target.value;
            const name = event.target.name;
        */
        
        const {name,value} = event.target; // Object Destructuring

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
        event.preventDefault(); // Default olarak formu bir yere göndermesini önler

        const {username, display_name, password} = this.state;

        const body = 
        { 
            username, // Eğer json objesinde key ve value aynı ise birini yazarız. Yani "username: username" yerine böyle yaptık
            display_name,
            password
        };

        this.setState( {pendingApiCall : true} );

        try
        {
            const response = await signUp(body);
        }
        catch (error) 
        {
            if(error.response.data.validationErrors) // 500 hatası alınca program durmasın diye bu kısmı ekledik
            {
                this.setState( {valErrors : error.response.data.validationErrors} );
            }
        }
        this.setState( {pendingApiCall : false} ); 

        /* Yukarıdaki kısım async olmadan da yapılabilir. "onClickSignUp = event" şeklinde değiştiririz ve aşağıdaki bloğu yazarız

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
        const {pendingApiCall, valErrors} = this.state;
        const {username , display_name , password , password_repeat} = valErrors;

        return(
            <div className ='container'> {/*sağdan soldan boşluklu bir yapı elde ederiz*/}
                <form>
                    <div>
                        <h1 className ='text-center'>Sign Up</h1>
                    </div>

                    <Input label ='Username' name = 'username' error = {username} onChange = {this.onChange}/>
                    <Input label ='Display Name' name = 'display_name' error = {display_name} onChange = {this.onChange}/>
                    <Input label ='Password' name = 'password' error = {password} type ='password' onChange = {this.onChange}/>
                    <Input label ='Password Repeat' name = 'password_repeat' error = {password_repeat} type ='password' onChange = {this.onChange}/>

                    <div className ='text-center'>
                        <button className ='btn btn-primary' onClick = {this.onClickSignUp} disabled = {pendingApiCall || password_repeat !== undefined}> {/*primary ile kutular etrafı mavilik gelir*/}
                                {pendingApiCall ? <span className ='spinner-grow spinner-grow-sm'></span> : 'Sign Up'}
                        </button> 
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpPage; // index.html e veri gödnderebilmek için