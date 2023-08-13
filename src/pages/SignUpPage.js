import React from 'react';
import {signUp} from '../api/apiCalls';

// App.js teki jsx bloğu yerine class componenti oluşturduk
class SignUpPage extends React.Component //inheritance
{
    // Uygulamanın durumunu güncel tutmak için kullanılır, class component özelliğidir
    state = 
    {
        username: null, // json obj. olduğu için noktalı virgül koyulmaz
        display_name: null,
        password: null,
        password_repeat: null,

        pendingApiCall: false, // Butona tıklanınca disabled olacak değer

        errors: {}
    };
    
    
    /*
    Fonk. tanımını bu şekilde yapmak yerine ayrı bir yerde class a özel oluşturuyoruz
        <input onChange= {function(event) 
        {
            console.log(event.target.value);
        }}/>
    */
    onChange = event => 
    { 
        // console.log(event.target.value); --> konsolda ne yaptığımıza bakmak istersek açılabilir

        /*
        Aşağıdaki kısım yerine diğeri yapılır
            const value = event.target.value;
            const name = event.target.name;
        */
        // Object Destructuring
        const {name,value} = event.target;

        // setState, React.Component tan gelir 
        // State bilgisi değişimini haber verir ve render methodunu tekrar çağırır
        this.setState( {[name] : value} ); 
            
        // console.log(this.state)
    };

    onClickSignUp = event =>
    {
        event.preventDefault(); // Default olarak formu bir yere göndermesini önler

        const {username, display_name, password} = this.state;

        const body = 
        { 
            username, // Eğer json objesindeki key ve value aynı ise birini yazarız. Yani "username: username" yerine böyle yaptık
            display_name,
            password
        };

        this.setState( {pendingApiCall : true} );

        // then başarı durumunda yani 200 de, catch 400 500 lü kodlarda çalışır ve bu kısıma "promise" denir
        signUp(body)
            .then ( response => 
            { 
                this.setState( {pendingApiCall : false} );
            })
            .catch ( error => 
            {
                this.setState( {errors : error.response.data.validationErrors} );
                this.setState( {pendingApiCall : false} );
            })
        /* Yukarıdaki kısım async ile de yapılabilir. "onClickSignUp = async event" şeklinde değiştiririz ve aşağıdaki bloğu yazarız
        try
        {
            const response = await signUp(body);
        }
        catch (error) {}
        
        this.setState( {pendingApiCall : false}); 
        */
    };
    
    
    // Her class componenti mutlaka bir render methodunu override etmelidir
    render() 
    {
        const {pendingApiCall , errors} = this.state;
        const {username} = errors;

        return(
            <div className ='container'> {/*sağdan soldan boşluklu bir yapı elde ederiz*/}
                <form>
                    <div>
                        <h1 className ='text-center'>Sign Up</h1>
                    </div>

                    <div className ='form-group'>
                        <label>Username</label>
                        <input className ='form-control' name ='username' onChange = {this.onChange}/>
                    </div>

                    <div className ='form-group'>
                        <label>Display Name</label>
                        <input className ='form-control' name ='display_name' onChange = {this.onChange}/>
                    </div>

                    <div className ='form-group'>
                        <label>Password</label>
                        <input className ='form-control' name ='password' type ='password' onChange = {this.onChange}/>
                    </div>

                    <div className ='form-group'>
                        <label>Password Repeat</label>
                        <input className ='form-control' name ='password_repeat' type ='password' onChange = {this.onChange}/>
                    </div>

                    <div className ='text-center'>
                        <button className ='btn btn-primary' 
                                onClick = {this.onClickSignUp}
                                disabled = {pendingApiCall}> {/*primary ile kutular etrafı mavilik gelir*/}
                                {pendingApiCall ? <span className ='spinner-grow spinner-grow-sm'></span> : 'Sign Up'}
                        </button> 
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpPage; //index.html e veri gödnderebilmek için