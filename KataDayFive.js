//functional programming solution
let array = ["1a", "a", "2b", "b"];
const result = array.filter(word => /[0-9]/.test(word));
const t = ["1a", "a", "2b", "b"].filter(word => /[0-9]/.test(word));
console.log(t);