function someFunction<T>(data: T): T {
  return data;
}

let result = someFunction<string>("Hello");

console.log(result);

// another example
function getProducts<T>(data: T[]): T {
  return data[0];
}

let products = getProducts<string>(["apple", "banana", "orange"]);

console.log(products);

// NEXT EXAMPLE

function returnSomeValue<T>(arg: T[]): T[] {
  console.log(arg.length);
  if (typeof arg[0] == "string") {
    console.log(arg[0].toLowerCase());
  }
  return arg;
}

let output = returnSomeValue(["some", "text", 1]);

console.log(output);

// arrow generic function

const arrowFunction = <T>(data: T): T => {
  return data;
};

// call the function <string> define explicitely by user if not given identifided by typescript and is the common method of calling generics function

console.log(arrowFunction<string>("Hello"));


// generic function

function generateStringArray(length:number,value:string):string[]{
    return Array.from({length},()=>value)
}

console.log(generateStringArray(5,"Hello"));

//generic funtion that returns an array of any type

function generateArray<T>(length:number,value:T):T[]{
    return Array.from({length},()=>value)
}

console.log(generateArray<string>(5,"Hello"));
console.log(generateArray<number>(5,5));
