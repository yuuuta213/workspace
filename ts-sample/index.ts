import { exportedFunction, exportedValue } from "./anotherModule";
import fetch from "node-fetch";

console.log(exportedValue);
console.log(exportedFunction(128));
// fetch('https://api.publicapis.org/entries').then((response) => {
//   console.log(response);
// });
// console.log('next process');

export { }