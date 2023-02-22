import React from "react";
import './formula.css';
class Formula extends React.Component{
    constructor(props){
        super(props);
        this.state={
            m:2,
            c:5
        };
    }
    changeM=()=>{
        this.setState({m:"5"});
    }
    changeC=()=>{
        this.setState({c:"10"});
    }
    changeMC=()=>{
        this.setState({
            m:"10",
            c:"10"
        })
    }
    render(){
        return(
            <>
            <button onClick={this.changeM}>Click me to change M:5</button>
            <button onClick={this.changeC}>Click me to change C:10</button>
            <button onClick={this.changeMC}>Click me to change M:10&C:10</button>
            <h1>Formula: E = mc<sup>2</sup></h1>
           <h1>{this.state.m*this.state.c*this.state.c}</h1>
        </>
        );
    }
}
export default Formula;