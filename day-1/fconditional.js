console.log("Hello");
console.log("Nepal");
console.log("Hi");
let discount="7";
if(discount>7){
console.log("You have higher discount");}
else{
    console.log("You have less discount");
}
let x= 5;
let y=7;
let z=8;
if(x>y&&x>z)
{
    console.log("x is greatest");
}
else if(y>x&&y>z){
    console.log("y is greatest");
}
else{
    console.log("z is greatest");
}
 x=7;
if(x%2===0)
{
    console.log(`${x} is even`);
}
else{

    console.log(`${x} is odd`);
}
x=2;
console.log(x%2===0?"even":"odd");
//switch
let daynumber=3;
switch(daynumber)
{
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wednesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
}