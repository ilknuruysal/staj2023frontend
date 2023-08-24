import React, { Component } from 'react';
import axios from 'axios';

export function withApiProgress(WrappedComponent , apiPath) 
// children parametre olarak alındı ismi de WrappedComponent oldu , apiPath ise this.props.path yerine geldi
{
    // pendingApiCall u takip eden component
    return class extends Component 
    {
        state =
        {
            pendingApiCall: false
        };

        componentDidMount()
        {
            axios.interceptors.request.use((request) =>
            {
                this.updateApiCallFor(request.url , true);
                return request; // axios requesti devam ettirsin diye yapılır
            });

            // 2 tane callback function ister
            axios.interceptors.response.use(
            (response) =>
            {
                this.updateApiCallFor(response.config.url , false);
                return response;
            },
            (error) =>
            {
                this.updateApiCallFor(error.config.url , false);
                throw error;
            });
        };

        updateApiCallFor = (url , inProgress) =>
        {
            if(url === apiPath)
                this.setState( {pendingApiCall : inProgress} );
        };

        render() 
        {
            const {pendingApiCall} = this.state;

            return(
                
                // <div>
                //     { /*ApiProgress teki değer child component olan LoginPage e gönderilir*/ }
                //     {React.cloneElement(this.props.children , {pendingApiCall : this.state.pendingApiCall})} { /*Bu kısım daha kısa yazılabilir*/ }
                // </div>
                
                <WrappedComponent pendingApiCall = {pendingApiCall} {...this.props}/> // Spread Operator
                // this.props kısmı dil desteğinde lazım oluyor, ApiProgress in dışarıdan aldığı tüm property leri buraya paslıyor
            )
        } 
    }
}