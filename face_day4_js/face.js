// task_one_reverse_string
var str = "Welcome to this Javascript Guide!"
str = str.split("").reverse().join("")
console.log(str)
/*----------------------------------------------------------------------*/
//task_two_empty_array
var arr = [0,1,2,3]
arr = []
console.log(arr)
/*----------------------------------------------------------------------*/
//task_four_fizzbuzz
for(var i=0;i<=100;i++){
    if(i%3==0 && i%5==0){
        console.log("fizzbuzz",i)
    }
    else if(i%5==0){
        console.log("buzz",i)
    }
    else if(i%3==0 && i%5==0){
        console.log("fizz",i)
    }
}
/*----------------------------------------------------------------------*/
//task_three_anagram
var str1 = "army"
var str2 = "mary"
var str_2 = str2.split("").sort().join("")
var str_1 = str1.split("").sort().join("")
if(str_1==str_2){
    console.log("true")
}else{
    console.log("false")
}
/*----------------------------------------------------------------------*/
//task_five_enque_deque
const shiva = ["shiva", "shankar", "natraj", "pradeep"];
shiva.pop();
shiva.pop();
shiva.pop();

shiva.push("bye");
/*----------------------------------------------------------------------*/
//task_six

function validName(name){

    var validator = name.split(" ");
    if(validator.length==3){
    validatorSplitterOne=validator[0].split("");
    validatorSplitterTwo = validator[1].split("");
    validatorSplitterThree = validator[2].split("");
    for(const validators of validator){
        if(validators[0] != validators[0].toUpperCase()){
            console.log("false")
            return false;
        }
    }
    let flag=1;
    if(validatorSplitterOne[0]==validatorSplitterOne[0].toUpperCase() && validatorSplitterOne[1]=="." ){
        if(validatorSplitterTwo[0]==validatorSplitterTwo[0].toUpperCase() && validatorSplitterTwo[1]!="." && validatorSplitterThree[0]==validatorSplitterThree[0].toUpperCase() && validatorSplitterThree[1]!="."){
            console.log("True");
            return true;
        }
        else{
            console.log("False")
            return false;

        }
    }
    else if(validatorSplitterTwo[0]==validatorSplitterTwo[0].toUpperCase() && validatorSplitterTwo[1]=="." ){
        if(validatorSplitterOne[0]==validatorSplitterOne[0].toUpperCase() && validatorSplitterOne[1]!="." && validatorSplitterThree[0]==validatorSplitterThree[0].toUpperCase() && validatorSplitterThree[1]!="."){
            console.log("True");
            return true;
        }
        else{
            console.log("False")
            return false;
        }
    }
    else if(validatorSplitterThree[0]==validatorSplitterThree[0].toUpperCase() && validatorSplitterThree[1]=="." ){
        if(validatorSplitterTwo[0]==validatorSplitterTwo[0].toUpperCase() && validatorSplitterTwo[1]!="." && validatorSplitterOne[0]==validatorSplitterOne[0].toUpperCase() && validatorSplitterOne[1]!="."){
            console.log("True");
            return true;
        }
        else{
            console.log("False")
            return false;
        }

    }
    else{
        console.log("False")
        return false;
    }
}
else if (validator.length==2){
    validatorSplitterOne=validator[0].split("");
    
    validatorSplitterTwo = validator[1].split("");
    for(const validators of validator){
        if(validators[0] != validators[0].toUpperCase()){
            console.log("false")
            return false;
        }
    }
    if(validatorSplitterOne[0]==validatorSplitterOne[0].toUpperCase() && validatorSplitterOne[1]=="." && validatorSplitterTwo[1]!="."){
        console.log("True");
        return true
    }
    if(validatorSplitterTwo[0]==validatorSplitterTwo[0].toUpperCase() && validatorSplitterTwo[1]=="." && validatorSplitterOne[1]!="."){
        console.log("True");
        return true
    }
}
else{
    console.log("false")
    return false;
}
    
}
/*----------------------------------------------------------------------*/