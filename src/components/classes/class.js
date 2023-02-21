import React from "react";
import { Component } from "react";

class Square1 extends React.Component{
    render(){
        var a=10;
        return(
            <>
            <p>Area= {a*a}</p>
            </>
        );
    }
}
class Triangle1 extends React.Component{
    render(){
        var base=10;
        var height=10;
        return(
            <>
            <p>Area = {0.5*base*height}</p>
            </>
        );
    }
}
class Rhombhus1 extends React.Component{
    render(){
        var base=10;
        var height=10;
        var area=10;
        return(
            <>
            <p>Area = {base*height}</p>
            </>
        );
    }
}
class Circle1 extends React.Component{
    render(){
        var r=10;
        return(
            <>
            <p>Area = {3.14*r*r}</p>
            </>
        );
    }
}
class Cuboid1 extends React.Component{
    render(){
        var length = 10;
        var breadth = 10;
        var height = 10;
        return(
            <>
            <p>Area={2 *(length * breadth + breadth * height + length * height)}</p>
            </>
        );
    }
}
export {Square1,Rhombhus1,Circle1,Cuboid1,Triangle1}

