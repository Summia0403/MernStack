const arr7=[1,2];
const [a,b,...rest]=[1,2,3,4,5,6,7,8,9,10];
console.log(a)  
console.log(b)
console.log(rest)

const arr=[1,2,3];
const arr2=[...arr,4,5,6];
console.log(arr2) //[1,2,3,4,5,6]

const arr3=[
    [1,2,3],
    arr2
];
console.log(arr3) //[[1,2,3],[1,2,3,4,5,6]]

const arr4=[[1,2,3],...arr2];
console.log(arr4) //[[1,2,3],[1,2,3,4,5,6]]


//Spread inside Object
const person={
    name:'John',
    age:20,
    
};
console.log(person)  //{name:'John',age:20}  



//Adding the key values to the objects

const addr="TN,India"; //const enables to set value

const key1="val1";

const p={
  ...person,
  addr,
  key1,
  //Key:key1
  age:30,
};

console.log(p) //{name:'John',age:20,addr:'Tn,India',key1:'val1'}


p["name"]="Seeta"
console.log(p) //{name:'Seeta',age:30,addr:'Tn,India',key1:'val1'}
person["name"]="Seema"
console.log(p) //{name:'Seeta',age:30,addr:'Tn,India',key1:'val1'}
person.name="Seema"
console.log(p) //{name:'Seeta',age:30,addr:'Tn,India',key1:'val1'}

//Assignment
const p2={
  title:"MERN",
  body:"MERN Stack",
}
//defining
const{title,body}=p2

console.log(title)


let person1 = {
  name: 'John',
  age: 20,
};
const p1 = {
  ...person1,
  country: 'USA',
}
console.log(p1) 

person1 = {
  name: "Ran",
  age:85,
}//p1 does not consider the second initialization
//person1["name"]="abc"
console.log(person1)
console.log(p1)

/////
/*
person3 = {
  name: 'John',
  age: 20,
  address: {
      city: "Chennai",
  }
};

const addr = "TN, India";

const key1 = "val1";


console.log(p);

person3["name"] = "FooBar";

console.log(p);

person = "xyz";

let person2 = {
  name: "John",
  age: 20,
}*/

person2 = "xyz";