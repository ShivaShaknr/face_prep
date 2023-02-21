function Cuboid(props) {
    var length = props.length;
    var breadth = props.breadth;
    var height = props.height;
    var Area = 2 *(length * breadth + breadth * height + length * height);
    return(Area)
    
}
export default Cuboid;