// // const studentDetail={
// //     name:"Sampada",
// //     address:"Kapan",
// //     isGraduted:"false",
// // };
// // console.log(`My name is ${studentDetail.name} and i am from ${studentDetail.address}. I am ${studentDetail.isGraduated}?`);

// const bottleDetail={
//     name:"Water bottle",
//     brand:"Servewell",
//     price:700,
//     color:"blue",
// };
// const name="Ashish";
// const{name:bottleName}=bottleDetail;
// // console.log(bottleDetail.name);
// console.log(bottleName);


// nested Object
const studentDetail={
    firstName:"Avishek",
    lastname:"Panthi",
    address:{
        permanent:"Morang",
        temporary:"Kathmandu"
  ,  }
};
console.log(studentDetail.address.permanent);
studentDetail.address.permanent="aGRAKHACHII"
console.log(studentDetail);