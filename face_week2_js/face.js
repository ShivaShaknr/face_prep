//1

const concat = (...arrs) => {
    let a = [];
    for (let i = 0; i < arrs.length; i++) {
      for (let j = 0; j < arrs[i].length; j++){
        a.push(arrs[i][j]);
      }
      
    }return a;
  }
  
  console.log(concat([1, 2, 3], [4, 5], [6, 7]));
  
  //2nd
  var number = 12345;
  var rem;
  var sum = 0;
  while(number){
      rem = number%10;
      sum = sum+rem;
      number = Math.floor(number/10);
  }
  if(sum%2==0){
      console.log("evenish");
  }
  else{
      console.log("oddish");
  }
  
  //3
  
  var recursion = function(arr,number,strt,end){
      if(str>end){
          return false;
      }
      var mid = Math.floor(strt+end)/2;
      if(arr[mid]==number){
          return true;
      }
      if(arr[mid]>number){
          return recursion(arr,number,strt,mid-1);
      }
      else{
          return recursion(arr,number,mid+1,end);
      }
  }
  var arr = [1,2,3,4,5,6];
  var number = 2;
  if(recursion(arr,number,0,arr.length-1)){
      console.log("element found");
  }
  else{
      console.log("element not found");
  }