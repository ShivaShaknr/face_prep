import logo from './logo.svg';
import './App.css';
import Circle from './components/circle/circle';
import Cuboid from './components/cuboid/cuboid';
import Rhombhus from './components/rhombus/rhombus';
import Square from './components/square/square';
import Triangle from './components/triangle/triangle';
import{Square1,Rhombhus1,Circle1,Cuboid1,Triangle1} from './components/classes/class'

function App() {
  return (<>
    <Circle r='2' />
    <br />
    <Cuboid  length='10' breadth='10' height='10'/>
    <br/>
    <Rhombhus base='3' height='5'/>
    <br/>
    <Square a='2'/>
    <br/>
    <Triangle base='3' height='5'/>
    <Square1 /><Rhombhus1/><Circle1/><Cuboid1/><Triangle1/>
    </>
    
  );
}

export default App;
