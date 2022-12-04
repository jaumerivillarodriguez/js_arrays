import { students } from "./data/sample_data.js";

const result = students.every((student) => student.name.includes("J"));

console.log(result); // devuelve true o false si todos los studiantes tienen una J