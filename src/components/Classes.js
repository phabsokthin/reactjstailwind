import React, { Component } from "react";
import Data from './Data'

export default class Classess extends React.Component{

    constructor(){
        super()

        this.state = {
            color: "blue",
            fontSize: "25px",

        }
        
    }

    render(){

        let myColor = [
            this.state.color,
        
        ]
    
        
        return(

            <>
            
            <h1 style={{color:myColor}}>This is color</h1>
            <h1 style={{fontSize: this.state.fontSize}}>Helo</h1>

                

            </>
        )

    }

}