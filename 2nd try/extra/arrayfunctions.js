//filter()
// var arr=['sushil','aayush','bishal','aashish','karan'];
// var filteredarr=arr.filter(name=>(name[0]=="k"||name[0]=="a"));
// console.log('using filter fucntion '+filteredarr);
//reduce()

const orders = [
    {
        id: 1,
        amount: 200
    },
    {
        id: 2,
        amount: 20
    },
    {
        id: 1,
        amount: 300
    },
    {
        id: 2,
        amount: 30
    },
]
const result = orders.filter(order => order.id == 2).map(order => order.amount).reduce((a, b) => a + b);
console.log('total amount' + result);
