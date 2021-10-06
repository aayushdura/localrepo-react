 // rest operator. In following example the first argument a = 3,
 //  all rest arguments are collected in 'args' by rest parameter
 function sum(a,...args){
  var sum =0; 
  for(var i=0;i<arguments.length;i++){
     sum += arguments[i];
  }
   return sum;
}
console.log(sum(2,3,4,5,6,7,10,1010,10,101,01,10,10));
 // passsing an array as argument to a function using spread operator
// var add = (x, y, z) => {
//   console.log(x + y + z);
// };
// arr = [2, 3, 4];
// add(...arr);

 // copying an array to a new array
// arr2 = [23, 34, ...arr];
// console.log(arr2);

// // concatination
// arr3 = [...arr, "helloww", ...arr2];
// console.log("Concat  " + arr3);


// let arr =[2,3,4,5,6,7,8];
// let arr2= arr.filter((x)=>{x%2==0;});
// console.log(arr2);