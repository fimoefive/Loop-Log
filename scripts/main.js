/*
Loop through this array of objects and console.log "name's job title is title."
*/

const array =
[
  {
    name: "Bob",
    department: "sales",
    title: "sales manager"
  },
  {
    name: "Tina",
    department: "finance",
    title: "director of finance"
  },
  {
    name: "Randy",
    department: "IT",
    title: "hardware guy"
  },
  {
    name: "Glenda",
    department: "C-suite",
    title: "CEO"
  }
];

  for (let i = 0; i < array.length; i++) {

   console.log(`${array[i].name} job title is ${array[i].title}.`)
 
};


