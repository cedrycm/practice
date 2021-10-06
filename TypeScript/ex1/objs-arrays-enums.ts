//AObjects, Arrays, Enum Types in TypeScript

// const person: {
//   name: string;
//   age: number;
// } = 
// Better to let TS infer objects 


// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// }

enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
  name: 'Maximilian', 
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
};


let favoriteActivites: any[]; 

favoriteActivites = ['Sports', 1];

console.log(person.name);