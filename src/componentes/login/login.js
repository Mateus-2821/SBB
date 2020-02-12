import React, { Component } from 'react'

import Input from '../componentesDiversos/input/Input'
import Button from '../componentesDiversos/button/Button'

class login extends Component{
    constructor(props){
        super(props)
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(){
        console.log('clicou')
    }

    render(){
        return(
            <div>
                <Input 
                hintText="E-mail"
                type="text"
                />
                <Input
                hintText="Senha"
                type="password"
                />
                <Button
                label="Fazer Login"
                primary={true}
                onClick={this.handleLogin}
                />
            
            </div>
        )
         
    }
}