
import { students } from "./data/sample_data.js";

const result = students.find((student) => student.name === "Ryan");

console.log(result); //solo devuelve el primer resultado que encuentra