
console.log(`typescript tutorial`);

// check friend name
let friendNames: string[];

friendNames = ["ram", "shyam", "hari", "krishna"];

function checkFriend(list: string[]): boolean {
  return list.includes("hari");
}

console.log(checkFriend(friendNames));

// check discount or penalty

function checkDiscountOrPenalty(price: number, discount?: number): number {
  return price - (discount || 0);
}

checkDiscountOrPenalty(10);

checkDiscountOrPenalty(10, 20);

//with default value

function getDiscount(price: number, discount: number = 0): number {
  return price - discount;
}

getDiscount(100);
getDiscount(100 - 50);

// function with union types
function processData(data: string | number) {
  return typeof data == "string" ? data.toUpperCase() : data * 2;
}

console.log(processData(10));

// employee create by id

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id: id, isActive: id%2==0 };
}

console.log(createEmployee({ id: 20 }));


// another example without destructuring

function welcomeStudent(student:{id:number,name:string}):void{
  
  console.log(`Welcome student of roll ${student.id} and name ${student.name}`)
}

welcomeStudent({id:10,name:"krishna Tiwari"})

// importing type alias and use it 
import { Staff, StringOrNumber, Theme } from "./types";
let someNumber:StringOrNumber;
someNumber="10"
someNumber=20
// above both are valid

// theme import from type alias
let userTheme :Theme

userTheme="dark"
userTheme= "light"


// staff print details
