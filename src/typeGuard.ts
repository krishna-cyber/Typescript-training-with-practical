// tupe guard typeof operator



type ValueType = string | number | boolean;

let someValue: ValueType;

const random = Math.random();

someValue = random < 0.33 ? "hello" : random < 0.66 ? 123.456 : true;


function checkValue(value:ValueType) {
    if (typeof value == "string"){
        console.log(value.toUpperCase())
    }else if (typeof value == "number"){
        console.log(value.toFixed())
    }else{
        console.log(`This is a boolena value of ${value}`)
    }
}

checkValue(someValue)



// typeguard equality narrowing

type Dog ={type :"Dog", name:string, bark:()=>void}

type Cat = {type:"Cat", name:string, meaow:()=>void}

type Animal = Dog | Cat


function makeSound (animal:Animal):void{
    if(animal.type === "Dog"){
        animal.bark();


    }else{
        animal.meaow()
    }
}

function anotherMakeSound (animal:Animal){
    if("bark" in animal){
        animal.bark();
    }else{
        animal.meaow();
    }
}