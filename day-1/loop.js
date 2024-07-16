// const numList ={5,10,15,20};
// //map
//works as loop
//returns new array
//to change content of array
//original array size is always equal to returned array size

//  const newnumList=numList.map((Item,index,array)=>{
//     console.log(item,index);
//     let newNumber=item+2;
//     return newNumber
//  });
//     console.log(newnumList);

// const userList = ["Hari", "Sita", "Gita", "Ram"];
// const newuserList = userlist.map((item, index, array) => {
//   if (item == "Hari") {
//     return "Sita";
//   }
//   return item;
// });

// console.log(newuserList);

const productList = [
  {
    name: "Orange",
    price: 200,
  },
  {
    name: "Mango",
    price: 120,
  },
  {
    name: "Avocado",
    price: 480,
  },
  {
    name: "Apple",
    price: 300,
  },
];

//get all fruits whose price is below 250
// const newproductList = productList.map((item, index, array) => {
//   if (item.price < 250) {
//     return item;
//   }
// });
// console.log(newproductList);

//find
//returns item which matches condition

// const numList = [55, 45, 75, 95, 100];
// const matchedItem = numList.filter((item, index, array) => {
//   if (item > 70) {
//     return item;
//   }
// });
// console.log(matchedItem);

//foreach
const numList = [55, 45, 75, 95, 100];
numList.forEach((item, index, array) => {
    console.log(item);
};


//increase price of each product by 20

// const newproductList=productList.map((item,index,array)=>{
//     const newPrice=item.price+20;
// item.price=newPrice;
// return item;
// });
// console.log(newPrice);

// //increase price of product by 10% whose original price is less than 250
// const newproductList = productList.map((item, index, array) => {
//   if (item.price < 250) {
//     const newPrice = item.price + 0.1 * item.price;
//     item.price = newPrice;
//   }
//   return item;
// });
// console.log(newproductList);

//decrease price of mango by 20 due to high production
// const newProductList = productList.map((item, index, array) => {
//   if (item.name === "Mango") {
//     const newPrice = item.price - 20;
//     item.price = newPrice;
//   }
//   return item;
// });
// console.log(newProductList);

//filter
//removes item from array
//return new array
//high chance that original array size not equal to returned array size

// const numlist = [10, -10, 11, -25, 55, -75];
// //removes all negative values

// const newNumList = numlist.filter((item, index, array) => {
//   if (item > 0) {
//     return item;
//   }
// });
// console.log(newNumList);
