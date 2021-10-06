var arr2=[1,2,3,4];
var arr=[...arr2,'d'];
arr.push('d');
console.log(arr);
console.log(arr2);
let person={
    name: "aayush",
    age:22,
};
let person2={...person,name:"saroj",adress:"banepa"};
let persons={...person,...person2};
console.log(persons);

/*confusion*/
// {
//     "Image": {
//         "Width":  800,
//         "Height": 600,
//         "Title":  "View from 15th Floor",
//         "Thumbnail": {
//             "Url":    "http://www.example.com/image/481989943",
//             "Height": 125,
//             "Width":  100
//         },
//         "Animated" : false,
//         "IDs": [116, 943, 234, 38793]
//       }
//   }
 